var canvasObj = document.getElementById('canvas'),
canvas = canvasObj.getContext('2d'),
obj = {
    init: function() {
        var _this = this;
        this.createClock();
        setInterval(function() {
            _this.createClock();
        }, 1000);
    },
    createClock: function() {
        var date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();
        canvas.clearRect(0, 0, canvasObj.width, canvasObj.height)
        canvas.save();
        //画小刻度
        this.drawCircle(60, 6, 200);
        this.fillWhiteCirle(195);
        //画大刻度
        this.drawCircle(12, 30, 200);
        this.fillWhiteCirle(190);
        canvas.restore();
        canvas.save();
        //时针
        this.drawNeedle(100, this.time2Arc(hours + minutes / 60, 30), 10, 'black');
        //分针
        this.drawNeedle(150, this.time2Arc(minutes + seconds / 60, 6), 5, 'black');
        //秒针
        this.drawNeedle(190, this.time2Arc(seconds, 1), 1, 'red');
        canvas.restore();
    },
    time2Arc: function() {
        var time = arguments[0],
        degree = arguments[1];
        
        return (-90 + time * degree) * Math.PI / 180;
    },
    drawNeedle: function() {
        var radius = arguments[0],
        arc = arguments[1],
        lineWidth = arguments[2],
        lineColor = arguments[3];
        canvas.beginPath();
        canvas.moveTo(200, 200);
        canvas.arc(200, 200, radius, arc, arc, false);
        canvas.lineWidth = lineWidth;
        canvas.strokeStyle = lineColor;
        canvas.stroke();
        canvas.closePath();
    },
    drawCircle: function() {
        var len = arguments[0],
        degree = arguments[1],
        radius = arguments[2];
        //画圆
        canvas.beginPath();
        for (var i = 0; i < len; i ++) {
            canvas.moveTo(200, 200);
            canvas.arc(200, 200, radius, i * degree * Math.PI / 180, (i + 1) * degree * Math.PI / 180, false);
        }
        canvas.stroke();
        canvas.closePath();
    },
    fillWhiteCirle: function() {
        var radius = arguments[0];
        canvas.beginPath();
        canvas.moveTo(200, 200);
        canvas.arc(200, 200, radius, 0, 360 * Math.PI / 180, false);
        canvas.fillStyle = 'white';
        canvas.fill();
        canvas.closePath();
    }
}
obj.init();
// 
// //画圆
// canvas.beginPath();
// for (var i = 0; i < 60; i ++) {
//     canvas.moveTo(200, 200);
//     canvas.arc(200, 200, 200, i * 6 * Math.PI / 180, (i + 1) * 6 * Math.PI / 180, false);
// }
// canvas.stroke();
// canvas.closePath();
// 
// //实现小刻度盘
// canvas.beginPath();
// canvas.moveTo(200, 200);
// canvas.arc(200, 200, 195, 0, 360 * Math.PI / 180, false);
// canvas.fillStyle = 'white';
// canvas.fill();
// canvas.closePath();
// 
// //绘制大刻度
// canvas.beginPath();
// for (var i = 0; i < 12; i ++) {
//     canvas.moveTo(200, 200);
//     canvas.arc(200, 200, 200, i * 30 * Math.PI / 180, (i + 1) * 30 * Math.PI / 180, false);
// }
// canvas.stroke();
// canvas.closePath();
// 
// canvas.beginPath();
// canvas.moveTo(200, 200);
// canvas.arc(200, 200, 190, 0, 360 * Math.PI / 180, false);
// canvas.fillStyle = 'white';
// canvas.fill();
// canvas.closePath();
// 
// //时针
// canvas.beginPath();
// canvas.moveTo(200, 200);
// canvas.arc(200, 200, 100, 0, 0, false);
// canvas.lineWidth = 10;
// // canvas.strokeStyle = 'red';
// canvas.stroke();
// canvas.closePath();
// 
// //分针
// canvas.beginPath();
// canvas.moveTo(200, 200);
// canvas.arc(200, 200, 150, 1, 1, false);
// canvas.lineWidth = 5;
// // canvas.strokeStyle = 'red';
// canvas.stroke();
// canvas.closePath();
// 
// //秒针
// canvas.beginPath();
// canvas.moveTo(200, 200);
// canvas.arc(200, 200, 180, 2, 2, false);
// canvas.lineWidth = 1;
// canvas.strokeStyle = 'red';
// canvas.stroke();
// canvas.closePath();
