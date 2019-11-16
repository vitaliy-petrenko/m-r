'use strict';
import { Vector } from './Vector';
import { scroll } from './scroll';

const color = '#fff843';
const linesColor = "#cbcbcb";

const fps = 60;
let now;
let then = Date.now();
let delta;
let interval = 1000 / fps;
// let lastMouseMoveTime = Date.now();

const anglesPointsRadius = 3.5;
let vector = new Vector(0, 0);
let canvas;
const gridStep = 222;
let grid = [], gridCenter,
  rectangleHeight = 335,
  mouseCoordinates = [{ x: null, y: null }, { x: null, y: null }];
document.addEventListener('sectionchange', function (e) {
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

  draw() {
    let ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);
    ctx.beginPath();
    ctx.lineWidth = 1;

    grid.forEach(x => {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
    });
    rectanglesArray.forEach(rectangle => {
      ctx.moveTo(rectangle.points[0][0].x, rectangle.points[0][0].y);
      for (let i = 0; i < rectangle.points.length; i++) {
        let next = i + 1;
        if (next === rectangle.points.length) next = 0;
        ctx.bezierCurveTo(rectangle.points[i][1].x, rectangle.points[i][1].y, rectangle.points[i][2].x, rectangle.points[i][2].y, rectangle.points[next][0].x, rectangle.points[next][0].y);
      }
    });
    ctx.strokeStyle = linesColor;
    ctx.fillStyle = color;
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = linesColor;
    rectanglesArray.forEach(rectangle => {
      for (let i = 0; i < 4; i++) {
        let angle = rectangle.points[i][0];
        ctx.moveTo(angle.x, angle.y);
        ctx.arc(angle.x, angle.y, anglesPointsRadius, 0, 2 * Math.PI, false);
      }

    });
    ctx.fill();
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

  generateMovePath(vector) {
    // let firstPoint;
    let points = [];
    let oscillationCount;
    let getLastPoint = () => {
      return points.length > 0 ? points[points.length - 1] : this;
    };

    // if (vector) {
    //   firstPoint = {x: this.x + vector.x, y: this.y + vector.y};
    //   points.push(firstPoint);
    //
    // } else {
    // }

    oscillationCount = Math.round(distantFromConst(getLastPoint()) / 10);

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

    this.x += (this.movePath[0].x - this.x) * this.speed;
    this.y += (this.movePath[0].y - this.y) * this.speed;
    if (pointDistance(this, this.movePath[0]) < 1) {
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
      { x: config.x + config.width, y: config.y + rectangleHeight }, //bottom right
      { x: config.x, y: config.y + rectangleHeight } //bottom left
    ];
    this.startX = config.x;
    this.startY = config.y;
    this.speed = config.speed || 1;
    this.gridPosition = config.gridPosition;
    this.points = [];
    this.gridWidth = config.gridWidth;
    this.isWaiting = false;
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

    if (config.index % 1 === 0) {
      this.index = config.index;
      rectanglesArray[this.index] = this;
    } else {
      this.index = rectanglesArray.length;
      rectanglesArray.push(this);
    }

  }

  move() {
    this.points.forEach(line => {
      let speed = this.speed;
      for (let i = 0; i < 3; i++) {
        let point = line[i];
        point.x += this.direction.x * speed;
        point.y += this.direction.y * speed;
        point.constX += this.direction.x * speed;
        point.constY += this.direction.y * speed;
        if (point.movePath) {
          point.movePath.forEach(point=> {
            point.x += this.direction.x * speed;
            point.y += this.direction.y * speed;
          })
        }
      }
    })

  }

}

let animationStep;
function animate() {
  now = Date.now();
  delta = now - then;
  animationStep = requestAnimationFrame(animate);

  if (delta > interval) {

    const curveCoef = 1;
    const sensitivity = 40;
    let cursorPosition = mouseCoordinates;
    rectanglesArray.forEach(rectangle => {
      if (checkRectangleVisible(rectangle)) {
        generateRectangle(rectangle.index);
        return;
      }
      checkPass(rectangle);
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
        if (distantFromConst(closestPoint) < sensitivity) {
          closestPoint.x += curveCoef * cursorMoveVector.x;
          closestPoint.y += curveCoef * cursorMoveVector.y;
        }

        closestPoint.timeout = setTimeout(function () {
          closestPoint.animationLock = false;
        }, 50);
      }
      canvas.draw();
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

    if (!canvas) {
      canvas = new Canvas('canvas.rectangles');

    }
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    canvas.element.width = window.innerWidth;
    canvas.element.height = window.innerHeight;

    canvas.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    gridInit(canvas);
    generateRectangle(0);
    generateRectangle(1);
    generateRectangle(2);

    start();
  },
  start: start,
  stop: stop
};

function generateRectangle(index) {
  if (rectanglesArray[index] && rectanglesArray[index].isWaiting) return;
  let gridWidth = getRandomInt(1, 2),
    width = gridWidth * gridStep,
    direction,
    speed = Math.round(100 * (1 + 2 * Math.random())) / 100,
    x, y,
    gridPosition = getRandomInt(0, grid.length - 2),
    availableGridPositions = getAvailableGridPositions(index, gridWidth),
    availableYPositions = getAvailableYPosition(index);
  const directions = [{ x: 1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 1 }, { x: 0, y: -1 }];

  direction = getRandomDirection();
  function getRandomDirection() {
    return directions[getRandomInt(0, directions.length - 1)];
  }

  if (direction.y && availableGridPositions.length) {
    gridPosition = availableGridPositions[getRandomInt(0, availableGridPositions.length - 1)];
    x = grid[gridPosition];
    if (direction.y === 1) {
      y = -rectangleHeight;
    } else {
      y = canvas.height;
    }
  } else if (direction.y) {
    while (direction.y) {
      direction = getRandomDirection();
    }
  }
  if (direction.x && availableYPositions.length) {
    let segment = availableYPositions[getRandomInt(0, availableYPositions.length - 1)];
    y = getRandomArbitrary(segment[0], segment[1]);
    if (direction.x === 1) {
      x = -width;
    } else {
      x = canvas.width;
    }
  }
  if (!x || !y) {
    if (rectanglesArray[index]) {
      rectanglesArray[index].isWaiting = true;
    }
    setTimeout(()=> {
      if (rectanglesArray[index]) {
        rectanglesArray[index].isWaiting = false;
      }
      generateRectangle(index);
    }, 200);
    return;
  }
  new Rectangle({
    x: x,
    y: y,
    width: width,
    gridWidth: gridWidth,
    canvas: canvas,
    direction: direction,
    index: index,
    speed: speed,
    gridPosition: gridPosition
  });
}

function mouseMove(e) {
  // lastMouseMoveTime = Date.now();
  mouseCoordinates[0] = mouseCoordinates[1];
  mouseCoordinates[1] = {
    x: e.clientX,
    y: e.clientY
  };
}
function checkPass(rectangle) {
  let direction = rectangle.direction,
    lineToCheck, otherRectangleLineIndex, pass = null, distances = {}, distanceToPass = 50;

  if (direction.x) {
    if (direction.x === 1) {
      lineToCheck = rectangle.points[1];
      otherRectangleLineIndex = 3;
    } else {
      lineToCheck = rectangle.points[3];
      otherRectangleLineIndex = 1;
    }
  } else if (direction.y) {
    if (direction.y === 1) {
      lineToCheck = rectangle.points[2];
      otherRectangleLineIndex = 0;
    } else {
      lineToCheck = rectangle.points[0];
      otherRectangleLineIndex = 2;
    }
  }

  rectanglesArray.forEach(otherRectangle => {
    if (otherRectangle.pass === rectangle) return;
    let otherLine = otherRectangle.points[otherRectangleLineIndex];
    if (direction.x) {
      if (Math.abs(lineToCheck[0].constX - otherLine[0].constX) < distanceToPass) {
        lineToCheck.forEach(point => {
          if ((point.constY > otherLine[0].constY && point.constY < otherLine[3].constY) || (point.constY > otherLine[3].constY && point.constY < otherLine[0].constY)) {
            pass = otherRectangle;
          }
        });
      }
    } else {
      if (Math.abs(lineToCheck[0].constY - otherLine[0].constY) < distanceToPass) {
        lineToCheck.forEach(point => {
          if ((point.constX > otherLine[0].constX && point.constX < otherLine[3].constX) || (point.constX > otherLine[3].constX && point.constX < otherLine[0].constX)) {
            pass = otherRectangle;
          }
        });
      }
    }
  });

  rectangle.pass = pass;
}
function getAvailableGridPositions(index, gridWidth) {
  let lockedGridPositions = [],
    availableGridPositions = [],
    lockedGridPositionsTemp = [];
  rectanglesArray.forEach((rectangle, i) => {
    if (i === index) return;
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
function getAvailableYPosition(index) {
  let ordinates = [];
  rectanglesArray.forEach((rectangle, i) => {
    if (i === index) return;
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
  const sensitivity = 40;
  let closestLine = false;
  for (let i = 0; i < rectangle.points.length; i++) {
    let line = rectangle.points[i];
    let next = i + 1 === 4 ? rectangle.points[0] : rectangle.points[i + 1];

    if (line[0].constY === line[1].constY) {
      if (point.y > line[0].constY - sensitivity && point.y < line[0].constY + sensitivity) {
        if (point.x > line[0].constX - sensitivity && point.x < next[0].constX + sensitivity) {
          closestLine = line;
          break;
        } else if (point.x < line[0].constX - sensitivity && point.x > next[0].constX + sensitivity) {
          closestLine = line;
          break;
        }

      }

    } else if (point.x > line[0].constX - sensitivity && point.x < line[0].constX + sensitivity) {
      if (point.y > line[0].constY - sensitivity && point.y < next[0].constY + sensitivity) {
        closestLine = line;
        break;
      } else if (point.y < line[0].constY - sensitivity && point.y > next[0].constY + sensitivity) {
        closestLine = line;
        break;
      }
    }
  }
  return closestLine;

}
function checkRectangleVisible(rectangle) {
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
function intersection(segment1, segment2) {
  let x1 = segment1[0].x,
    x2 = segment1[1].x,
    x3 = segment2[0].x,
    x4 = segment2[1].x,
    y1 = segment1[0].y,
    y2 = segment1[1].y,
    y3 = segment2[0].y,
    y4 = segment2[1].y,
    ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1)),
    ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1)),
    x = x1 + ua * (x2 - x1),
    y = y1 + ua * (y2 - y1);

  if (ua >= 0 && ua <= 1 && ub >= 0 && ub <= 1) {
    return { x: x, y: y }
  } else {
    return null;
  }
}
function pointDistance(point1, point2) {
  return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
}
function distantFromConst(point) {
  return pointDistance(point, { x: point.constX, y: point.constY });
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
