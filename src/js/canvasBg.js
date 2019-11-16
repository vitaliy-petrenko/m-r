import { isMobile } from './mobile';
const settings = {
  main: {
    mobile: {
      rectangles: [{
        x: 2,
        y: -12,
        width: 3,
        height: 150
      }, {
        x: -1,
        y: 430,
        width: 3,
        height: 150
      }]
    }
  },
  products: {
    mobile: {
      strokeStyle: '#e5df3c'
    },
    desktop: {
      strokeStyle: '#e5df3c'
    }
  },
  production: {
    mobile: {
      strokeStyle: '#e5df3c'
    },
    desktop: {
      strokeStyle: '#e5df3c'
    }
  },
  prices: {
    mobile: {
      rectangles: [{
        x: -1,
        y: 210,
        width: 3,
        height: 150
      }, {
        x: 2,
        y: 360,
        width: 1,
        height: 150
      }, {
        x: -1,
        y: 590,
        width: 3,
        height: 220
      }]
    },
    desktop: {
      gridStep: 110,
      rectangles: [{
        x: -3,
        y: 220,
        width: 1,
        height: 90
      }, {
        x: -5,
        y: 310,
        width: 2,
        height: 90
      }, {
        x: 4,
        y: 170,
        width: 1,
        height: 180
      }, {
        x: 0,
        y: 760,
        width: 5,
        height: 225
      }]
    }

  }
};

const anglesPointsRadius = 3.5;
let mobileLines = 3;
export let canvasBg = () => {
  let canvasElements = document.querySelectorAll('.canvas-bg');
  [].forEach.call(canvasElements, canvas => {
    let grid = [], gridCenter;
    let fillColor = '#fff843';
    let strokeStyle = "#cbcbcb";
    let config = canvas.getAttribute('data-config') && settings[canvas.getAttribute('data-config')][isMobile() ? 'mobile' : 'desktop'];
    let ctx = canvas.getContext('2d');
    if (config) {
      if (config.fillColor) {
        fillColor = config.fillColor;
      }
      if (config.strokeStyle) {
        strokeStyle = config.strokeStyle;
      }
    }

    let gridStep;
    if (isMobile()) {
      gridStep = window.innerWidth / mobileLines;
    } else {
      gridStep = config && config.gridStep || 222
    }

    canvas.width = canvas.parentNode.offsetWidth;
    canvas.height = canvas.parentNode.offsetHeight;
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    ctx.lineWidth = 1;
    ctx.strokeStyle = strokeStyle;
    if (isMobile()) {
      for (let i = 1; i < mobileLines; i++) {
        let x = i * gridStep;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.offsetHeight);
        ctx.stroke();
        ctx.closePath();
      }
    } else {
      let elementWidth = canvas.width,
        center = elementWidth / 2,
        x = center;

      while (x - gridStep >= 0) {
        x -= gridStep;
      }
      while (x <= elementWidth) {
        if (x === center) {
          gridCenter = x;
        }
        grid.push(x);
        x += gridStep;
      }

      for (let i = 0; i < grid.length; i++) {
        let x = grid[i];
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.offsetHeight);
        ctx.stroke();
        ctx.closePath();
      }
    }

    if (!config || (config && !config.rectangles)) return;

    config.rectangles.forEach(rectangleConfig => {
      let rectangle;

      if (isMobile()) {
        rectangle = [{
          x: rectangleConfig.x * gridStep,
          y: rectangleConfig.y
        }, {
          x: (rectangleConfig.x + rectangleConfig.width) * gridStep,
          y: rectangleConfig.y
        }, {
          x: (rectangleConfig.x + rectangleConfig.width) * gridStep,
          y: rectangleConfig.y + rectangleConfig.height
        }, {
          x: rectangleConfig.x * gridStep,
          y: rectangleConfig.y + rectangleConfig.height
        }];
      } else {
        rectangle = [{
          x: gridCenter + rectangleConfig.x * gridStep,
          y: rectangleConfig.y
        }, {
          x: gridCenter + (rectangleConfig.x + rectangleConfig.width) * gridStep,
          y: rectangleConfig.y
        }, {
          x: gridCenter + (rectangleConfig.x + rectangleConfig.width) * gridStep,
          y: rectangleConfig.y + rectangleConfig.height
        }, {
          x: gridCenter + rectangleConfig.x * gridStep,
          y: rectangleConfig.y + rectangleConfig.height
        }];
      }
      ctx.beginPath();
      ctx.fillStyle = fillColor;
      ctx.strokeStyle = strokeStyle;
      ctx.moveTo(rectangle[0].x, rectangle[0].y);
      rectangle.forEach(point => {
        ctx.lineTo(point.x, point.y);
      });
      ctx.stroke();
      ctx.fill();
      ctx.closePath();

      ctx.beginPath();
      ctx.fillStyle = strokeStyle;
      rectangle.forEach(point => {
        ctx.moveTo(point.x, point.y);
        ctx.arc(point.x, point.y, anglesPointsRadius, 0, 2 * Math.PI, false);
      });
      ctx.fill();
      ctx.closePath();
    })
  })

};