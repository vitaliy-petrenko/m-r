'use strict';
import { scroll } from './scroll';
import { Vector } from './Vector';


const rectanglesMoveSpeedCoef = .3;//сама по себе скорость генерируется рандомно в каком то диапазоне, тут всего лишь коэффициент (ищите генерацию по названию, если что то менять)
const gridStep = 222; //шаг серых полосок
const rectangleHeight = 335; //дефолтная высота блока (из дизайна, для расчета площади больше)
const sizes = [1 / 2, 1 / 2, 1, 1, 1, 1, 1, 2]; //эмуляция рандомного выбора размера нового прямоугольника. Типа, чем больше повторяется, тем больше вероятность. (1/2, 1, 2 - ширина относительно gridStep)
const square = gridStep * rectangleHeight;//площадь, для расчета действительной высоты. Типа площадь всегда константа.
const anglesPointsRadius = 3.5;
const linesColor = "#cbcbcb";//цвет вертикальных полос
const curves = true;//переключатель кривизны


const fps = 60;
let now;
let then = Date.now();
let delta;
let interval = 1000 / fps;
let vector = new Vector(0, 0);
let mouseCoordinates = [{ x: null, y: null }, { x: null, y: null }];
let maxRectanglesCount;

function initMaxRectanglesCount() {
  maxRectanglesCount = Math.floor(.5 * window.innerWidth / gridStep); //считай половина сетки
}



const rectanglesConfig = {
  bright: {
    color: '#fff848',
    borderColor: '#cbcbcb'
  },
  default: {
    color: '#fff848',
    borderColor: '#cbcbcb'
  }
};
let canvas;

let grid = [], gridCenter;
document.addEventListener('sectionchange', function () {
  if (scroll.activeSection === 0) {
    start();
  } else {
    stop();
  }
});
let gridInit = function (element) {
  grid = [];
  let elementWidth = element.width,
    center = elementWidth / 2,
    x = center;

  gridCenter = center;
  while (x - gridStep >= 0) {
    x -= gridStep;
  }
  while (x <= elementWidth) {
    grid.push(x);
    x += gridStep;
  }
};

class Canvas {
  constructor(selector, parent) {
    parent = parent || document;
    this.element = parent.querySelector(selector);
    this.ctx = this.element.getContext('2d');
    this.width = this.element.offsetWidth;
    this.height = this.element.offsetHeight;
  }

  drawGrid() {
    let ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = linesColor;

    grid.forEach(x => {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
    });

    ctx.stroke();
    ctx.closePath();
  }
}
let rectanglesArray = [];
class Point {

  constructor(point) {
    this.x = point.x;
    this.y = point.y;
    this.constX = point.x;
    this.constY = point.y;
    this.stop();
    this.animationLock = false;
  }

  generateMovePath() {
    let points = [];
    let oscillationCount;
    let getLastPoint = () => {
      return points.length > 0 ? points[points.length - 1] : this;
    };

    let lastPointDistance = distanceFromConst(getLastPoint());

    oscillationCount = Math.round(lastPointDistance / 10);
    this.speed += (1 - (100 - lastPointDistance) / 100) / 10;
    let delta = 1;
    for (let i = 0; i < oscillationCount; i++) {
      delta /= 1.6;
      let lastPoint = getLastPoint();
      points.push({
        x: lastPoint.x + (this.constX - lastPoint.x) * (1 + delta),
        y: lastPoint.y + (this.constY - lastPoint.y) * (1 + delta),
      });
    }
    points.push({ x: this.constX, y: this.constY });
    this.movePath = points;
  }

  move() {
    if (this.animationLock || (this.x === this.constX && this.y === this.constY)) return;
    if (!this.movePath) {
      this.generateMovePath();
    }
    if (!this.movePath.length) {
      return;
    }
    let nextMovePoint = this.movePath[0];
    this.x += (nextMovePoint.x - this.x) * this.speed;
    this.y += (nextMovePoint.y - this.y) * this.speed;
    if (pointDistance(this, nextMovePoint) < 1) {
      this.movePath.shift();
      this.speed *= .75;
    }
  }

  stop() {
    this.speed = .2;
    this.movePath = null;
  }
}
// top left, top right, bottom right, bottom left
class Rectangle {
  constructor(config) {
    this.direction = config.direction;
    let angles = [
      { x: config.x, y: config.y }, //top left
      { x: config.x + config.width, y: config.y }, //top right
      { x: config.x + config.width, y: config.y + config.height }, //bottom right
      { x: config.x, y: config.y + config.height } //bottom left
    ];
    this.width = config.width;
    this.height = config.height;
    this.startY = config.y;
    this.speed = config.speed || 1;
    this.gridPosition = config.gridPosition;
    this.gridWidth = config.gridWidth;
    this.color = rectanglesConfig.default.color;
    this.borderColor = rectanglesConfig.default.borderColor;
    this.points = [];
    this.pass = null;
    for (let i = 0; i < angles.length; i++) {
      let next = i + 1;
      if (next === angles.length) next = 0;
      this.points.push([
        new Point({
          x: angles[i].x,
          y: angles[i].y
        }),
        new Point({
          x: getPointBetween(angles[i].x, angles[next].x, 1 / 2),
          y: getPointBetween(angles[i].y, angles[next].y, 1 / 2),
        }),
        new Point({
          x: getPointBetween(angles[i].x, angles[next].x, 2),
          y: getPointBetween(angles[i].y, angles[next].y, 2),
        }),
      ]);

    }
    this.points[0].push(this.points[1][0]);
    this.points[1].push(this.points[2][0]);
    this.points[2].push(this.points[3][0]);
    this.points[3].push(this.points[0][0]);
    function getPointBetween(start, end, lambda) {
      return (start + lambda * end) / (1 + lambda);
    }

  }

  draw() {
    let ctx = canvas.ctx;
    let rectangle = this;
    ctx.beginPath();
    ctx.strokeStyle = this.borderColor;
    ctx.fillStyle = this.color;
    ctx.moveTo(rectangle.points[0][0].x, rectangle.points[0][0].y);
    for (let i = 0; i < rectangle.points.length; i++) {
      let next = i + 1;
      if (next === rectangle.points.length) next = 0;
      ctx.bezierCurveTo(rectangle.points[i][1].x, rectangle.points[i][1].y, rectangle.points[i][2].x, rectangle.points[i][2].y, rectangle.points[next][0].x, rectangle.points[next][0].y);
    }
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }

  move() {
    this.points.forEach(line => {
      let speed = this.speed;
      let xDiff = this.direction.x * speed;
      let yDiff = this.direction.y * speed;
      for (let i = 0; i < 3; i++) {
        let point = line[i];
        point.x += xDiff;
        point.y += yDiff;
        point.constX += xDiff;
        point.constY += yDiff;
        if (point.movePath) {
          point.movePath.forEach(movePoint=> {
            movePoint.x += xDiff;
            movePoint.y += yDiff;
          })
        }
      }
    })

  }

}

class BrightRectangle extends Rectangle {
  constructor(config) {
    super(config);
    this.color = rectanglesConfig.bright.color;
    this.borderColor = rectanglesConfig.bright.borderColor;
    this.height = rectanglesConfig.bright.height;
    this.type = 'bright';
    rectanglesArray.push(this);
  }

  draw() {
    super.draw();
    let ctx = canvas.ctx;
    let rectangle = this;
    ctx.beginPath();
    ctx.fillStyle = rectangle.borderColor;
    rectangle.points.forEach(line => {
      ctx.moveTo(line[0].x, line[0].y);
      ctx.arc(line[0].x, line[0].y, anglesPointsRadius, 0, 2 * Math.PI, false);
    });

    ctx.fill();
    ctx.closePath();
  }

}

class FadedRectangle extends Rectangle {
  constructor(config) {
    super(config);
    this.color = rectanglesConfig.faded.color;
    this.borderColor = rectanglesConfig.faded.borderColor;
    this.size = rectanglesConfig.faded.height;
    this.type = 'faded';
    rectanglesArray.push(this);
  }
}

let animationStep;
function animate() {
  now = Date.now();
  delta = now - then;
  animationStep = requestAnimationFrame(animate);

  while(rectanglesArray.length < maxRectanglesCount) {
    generateRectangle(null, 'bright');
  }
  if (delta > interval) {
    for (let i = 0; i < rectanglesArray.length; i++) {
      let rectangle = rectanglesArray[i];
      if (checkRectangleIsNotVisible(rectangle)) {
        generateRectangle(rectangle, rectangle.type);
        break;
      }
    }
    canvas.drawGrid();
    if (curves) {
      let curveCoef = 1;
      const senseDistance = 100;
      let cursorPosition = mouseCoordinates;

      rectanglesArray.forEach(rectangle => {

        // checkPass(rectangle);
        let closestLine = getClosestLine(rectangle, cursorPosition[1]);
        let closestPoint = getClosestPoint(closestLine, cursorPosition[1]);
        let cursorMoveVector = {
          x: cursorPosition[1].x - cursorPosition[0].x,
          y: cursorPosition[1].y - cursorPosition[0].y
        };

        if (vector.length.call(cursorMoveVector) > 100) return;
        if (!rectangle.pass) rectangle.move();

        rectangle.points.forEach(line => {
          for (let i = 0; i < 3; i++) {
            line[i].move();
          }
        });
        if (closestPoint) {
          closestPoint.stop();
          clearTimeout(closestPoint.timeout);
          closestPoint.animationLock = true;
          let closestDistance = distanceFromConst(closestPoint);
          if (closestDistance < senseDistance) {
            closestPoint.x += curveCoef * cursorMoveVector.x;
            closestPoint.y += curveCoef * cursorMoveVector.y;
          }

          closestPoint.timeout = setTimeout(function () {
            closestPoint.animationLock = false;
          }, 100);
        }
      });

    }
    rectanglesArray.forEach(rectangle => {
      rectangle.draw();
      rectangle.move();
    });

    then = now - (delta % interval);
  }
}

function stop() {
  document.body.removeEventListener('mousemove', mouseMove);
  cancelAnimationFrame(animationStep);
}
function start() {
  stop();
  document.body.addEventListener('mousemove', mouseMove);
  animationStep = requestAnimationFrame(animate);
}

export let rectangles = {
  init: function () {
    rectanglesArray = [];
    initMaxRectanglesCount();
    if (!canvas) {
      canvas = new Canvas('canvas.rectangles');

    }
    let width = canvas.element.parentNode.offsetWidth;
    let height = canvas.element.parentNode.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    canvas.element.width = width;
    canvas.element.height = height;

    canvas.ctx.clearRect(0, 0, width, height);
    gridInit(canvas);
    for (let type in rectanglesConfig) {
      if (type === 'bright') {
        for (let i = 0; i < maxRectanglesCount; i++) {
          generateRectangle(null, type);
        }
      }
    }
    start();
  },
  start: start,
  stop: stop
};

function removeRectangle(rectangle) {
  removeArrayElement(rectangle, rectanglesArray);
}

function removeArrayElement(element, array) {
  ~array.indexOf(element) && array.splice(array.indexOf(element), 1);
}

function generateRectangle(invisibleRectangle, type) {
  if (invisibleRectangle) {
    removeRectangle(invisibleRectangle);
  }
  let gridWidth,
    width,
    direction,
    speed = rectanglesMoveSpeedCoef * Math.round(100 * (1 + 2 * Math.random())) / 100,
    x, y, height, config,
    gridPosition = getRandomInt(0, grid.length - 2);
  direction = getRandomDirection();


  gridWidth = sizes[getRandomInt(0, sizes.length - 1)];
  width = gridWidth * gridStep;
  height = square / width;

  if (direction.y) {
    x = getRandomAvailableGridPosition(width);
    if (direction.y > 0) {

      y = -height - getRandomInt(20, 120);
    } else {
      y = canvas.height + getRandomInt(20, 120);
    }
  }
  function getRandomAvailableGridPosition() {
    let tempGrid = [], availableGrid = [];
    for (let i = 0; i < grid.length - 2; i++) {
      let item = grid[i];
      if (gridWidth === .5) {
        tempGrid.push({ x: item, isEnabled: true });
        tempGrid.push({ x: item + gridStep / 2, isEnabled: true });
      } else if (gridWidth === 1) {
        tempGrid.push({ x: item, isEnabled: true });
      } else if (gridWidth === 2 && i !== grid.length - 3) {
        tempGrid.push({ x: item, isEnabled: true });
      }
    }

    for (let i = 0; i < tempGrid.length; i++) {
      rectanglesArray.forEach(rectangle=> {
        if (rectangle.direction.x) return;

        let x11 = tempGrid[i].x,
          x12 = x11 + width,
          x21 = rectangle.points[0][0].x,
          x22 = rectangle.points[0][3].x;

        if (Math.min(x12, x22) - Math.max(x11, x21) > 0) {
          tempGrid[i].isEnabled = false;
        }

      });
    }
    for (let i = 0; i < tempGrid.length; i++) {
      if (tempGrid[i].isEnabled) {
        availableGrid.push(tempGrid[i].x);
      }
    }
    return availableGrid[getRandomInt(0, availableGrid.length - 1)];

  }

  if (!x || !y) return;
  config = {
    x: x,
    y: y,
    width: width,
    height: height,
    gridWidth: gridWidth,
    canvas: canvas,
    direction: direction,
    speed: speed,
    gridPosition: gridPosition,
    type: type
  };
  if (type === 'bright') {
    new BrightRectangle(config)
  } else if (type === 'faded') {
    new FadedRectangle(config);
  }
}

// let moveTimeout;
function mouseMove(e) {
  // lastMouseMoveTime = Date.now();
  // clearTimeout(moveTimeout);
  mouseCoordinates[0] = mouseCoordinates[1];
  mouseCoordinates[1] = {
    x: e.clientX,
    y: e.clientY
  };
  // moveTimeout = setTimeout(()=> {
  //   mouseCoordinates[0] = mouseCoordinates[1];
  // }, 200)
}
// function checkPass(rectangle) {
//   let direction = rectangle.direction,
//     lineToCheck, otherRectangleLineIndex, pass = null, distanceToPass = 50;
//
//   if (direction.x) {
//     if (direction.x === 1) {
//       lineToCheck = rectangle.points[1];
//       otherRectangleLineIndex = 3;
//     } else {
//       lineToCheck = rectangle.points[3];
//       otherRectangleLineIndex = 1;
//     }
//   } else if (direction.y) {
//     if (direction.y === 1) {
//       lineToCheck = rectangle.points[2];
//       otherRectangleLineIndex = 0;
//     } else {
//       lineToCheck = rectangle.points[0];
//       otherRectangleLineIndex = 2;
//     }
//   }
//
//   rectanglesArray.forEach(otherRectangle => {
//     if (otherRectangle.pass === rectangle) return;
//     let otherLine = otherRectangle.points[otherRectangleLineIndex];
//     if (direction.x) {
//       if (Math.abs(lineToCheck[0].constX - otherLine[0].constX) < distanceToPass) {
//         lineToCheck.forEach(point => {
//           if ((point.constY > otherLine[0].constY && point.constY < otherLine[3].constY) || (point.constY >
// otherLine[3].constY && point.constY < otherLine[0].constY)) { pass = otherRectangle; } }); } } else { if
// (Math.abs(lineToCheck[0].constY - otherLine[0].constY) < distanceToPass) { lineToCheck.forEach(point => { if
// ((point.constX > otherLine[0].constX && point.constX < otherLine[3].constX) || (point.constX > otherLine[3].constX
// && point.constX < otherLine[0].constX)) { pass = otherRectangle; } }); } } });  rectangle.pass = pass; }
function getAvailableGridPositions(gridWidth, type) {
  let lockedGridPositions = [],
    availableGridPositions = [],
    lockedGridPositionsTemp = [];
  rectanglesArray.forEach(rectangle => {
    if (rectangle.direction.y) {
      lockedGridPositionsTemp.push(rectangle.gridPosition);
      lockedGridPositionsTemp.push(rectangle.gridPosition - 1);
      if (gridWidth === 2) {
        lockedGridPositionsTemp.push(rectangle.gridPosition - 2);
      }
      lockedGridPositionsTemp.push(rectangle.gridPosition + 1);
      if (rectangle.gridWidth === 2) {
        lockedGridPositionsTemp.push(rectangle.gridPosition + 2);
      }

    }
  });
  lockedGridPositionsTemp.forEach(position => {
    if (position >= 0 && position < grid.length && !~lockedGridPositions.indexOf(position)) {
      lockedGridPositions.push(position);
    }
  });
  grid.forEach((coordinate, i) => {
    if (!~lockedGridPositions.indexOf(i)) {
      availableGridPositions.push(i);
    }
  });
  return availableGridPositions;
}

function getAvailableYPosition(type) {
  let ordinates = [];
  rectanglesArray.forEach(rectangle => {
    if (rectangle.direction.x) {
      ordinates.push(rectangle.startY);
    }
  });
  ordinates.sort((a, b) => {
    return a - b;
  });
  let available = [];
  let fullSegment = [0, canvas.height - rectangleHeight];

  if (!ordinates.length) {
    return [fullSegment];
  }
  if (ordinates[0] - rectangleHeight > fullSegment[0]) {
    available.push([fullSegment[0], ordinates[0] - rectangleHeight]);
  }
  for (let i = 0; i < ordinates.length; i++) {
    let first, second;
    if (i + 1 < ordinates.length) {
      first = ordinates[i] + rectangleHeight;
      second = ordinates[i + 1] - rectangleHeight;
      if (second > first) {
        available.push([first, second]);
      }
    }
  }
  if (available[available.length - 1] < fullSegment[1]) {
    available.push([ordinates[ordinates.length - 1] + rectangleHeight, fullSegment[1]]);
  }

  return available;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
function getClosestLine(rectangle, point) {
  const senseDistance = 40;
  let closestLine = false;
  let x = point.x;
  let y = point.y;
  for (let i = 0; i < rectangle.points.length; i++) {
    let line = rectangle.points[i];
    if (Math.abs(line[0].constY - line[1].constY) < 1) {
      if (y > line[0].constY - senseDistance && y < line[0].constY + senseDistance) {
        let x1 = line[0].constX - senseDistance;
        let x2 = line[3].constX + senseDistance;
        if ((x > x1 && x < x2) || (x < x1 && x > x2 )) {
          closestLine = line;
        }
      }

    } else if (x > line[0].constX - senseDistance && x < line[0].constX + senseDistance) {
      let y1 = line[0].constY - senseDistance;
      let y2 = line[3].constY + senseDistance;
      if ((y > y1 && y < y2) || (y < y1 && y > y2)) {
        closestLine = line;
      }
    }
  }

  return closestLine;

}
function checkRectangleIsNotVisible(rectangle) {
  let direction = rectangle.direction;
  let coordinateForCheck, coordinateScreen;
  let isPositive = true;
  let delta = 5;
  if (direction.x === 1) {
    coordinateForCheck = rectangle.points[0][0].x;
    coordinateScreen = canvas.width + delta;
    isPositive = false;
  } else if (direction.x === -1) {
    coordinateForCheck = rectangle.points[1][0].x;
    coordinateScreen = -delta;
  } else if (direction.y === 1) {
    coordinateForCheck = rectangle.points[0][0].y;
    coordinateScreen = canvas.height + delta;
    isPositive = false;
  } else if (direction.y === -1) {
    coordinateForCheck = rectangle.points[2][0].y;
    coordinateScreen = -delta;
  }

  if (isPositive) {
    return coordinateScreen - coordinateForCheck > 0;
  }
  return coordinateScreen - coordinateForCheck < 0;
}
function pointDistance(point1, point2) {
  return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
}
function distanceFromConst(point) {
  return Math.sqrt(Math.pow(point.x - point.constX, 2) + Math.pow(point.y - point.constY, 2));
}
function getRandomDirection() {
  const directions = [/*{ x: 1, y: 0 }, { x: -1, y: 0 },*/ {
    x: 0,
    y: 1
  }, { x: 0, y: -1 }];
  return directions[getRandomInt(0, directions.length - 1)];
}
function getClosestPoint(line, point) {
  if (!line) return null;
  let closest;
  for (let i = 1; i < line.length - 1; i++) {
    if (!closest) closest = line[i];
    if (pointDistance(line[i], point) < pointDistance(closest, point)) {
      closest = line[i]
    }
  }

  return closest;
}

function roundToMultiply(number, multiply) {
  let tmp;
  if ((tmp = number % multiply) != 0) {
    number += number > -1 ? (multiply - tmp) : -tmp;
  }
  return number;

}

Array.prototype.getUnique = function () {
  var u = {}, a = [];
  for (var i = 0, l = this.length; i < l; ++i) {
    if (u.hasOwnProperty(this[i])) {
      continue;
    }
    a.push(this[i]);
    u[this[i]] = 1;
  }
  return a;
};