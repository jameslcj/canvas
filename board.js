var canvasObj = document.getElementById('canvas'),
canvas = canvasObj.getContext('2d');
//监听画布被按下的事件
canvasObj.onmousedown = function(ev) {
    var ev = ev || window.event,
    x = ev.clientX - canvasObj.offsetLeft,
    y = ev.clientY - canvasObj.offsetTop;
    canvas.beginPath();
    canvas.moveTo(x, y);
    document.onmousemove = function(ev) {
        var ev = ev || window.event,
        x = ev.clientX - canvasObj.offsetLeft,
        y = ev.clientY - canvasObj.offsetTop;
        canvas.lineTo(x, y);
        canvas.stroke();
    }
    document.onmouseup = function() {
        document.onmousemove = null;
        //因为绑定在document上 必须把自身事件也要取消掉 以后鼠标up都会触发此事件
        document.onmouseup = null;
    }
}
