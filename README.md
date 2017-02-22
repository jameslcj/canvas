# canvas 学习
## 重新开始学习canvas, 陆续更新中...
### 创建canvas
```
//创建canvas对象
var canvasObj = document.getElementById('canvas');
//获取画笔
var canvas = canvasObj.getContext('2d');
    
```

### fillRect(left, top, width, height) 填充的矩形
```
canvas.fillStyle = 'blue';
canvas.fillRect(50, 50, 100, 100);

//等价于
canvas.rect(50, 50, 100, 100)
canvas.fill();
```
- fillStyle 填充颜色

### strokeRect(l, t, w, h) 只有边框的矩形
```
canvas.lineJoin = 'round';
canvas.lineWidth = 10
canvas.strokeStyle = 'red'
canvas.strokeRect(150.5,150.5, 100, 100);
```
- lineJoin 边框弧度 round(圆角) bevel(斜角)
- lineCap 线条边框弧度
- lineWidth 线宽
- strokeStyle 线条颜色
- 建议left和top尽量使用0.5, 不然会多一个像素

### clearRect(l, t, w, h) 清除画布
```
canvas.clearRect(0, 0, 300, 300);
```
### 画直线
- moveTo(x, y) 移动画笔到抹点
- lineTo(x, y) 定一个点
- stroke() 连接线
- fill 填充颜色
```
canvas.moveTo(100, 100);
canvas.lineWidth = 5;
canvas.lineTo(150, 200);
canvas.lineTo(200, 200);
canvas.closePath();
canvas.stroke();
canvas.beginPath();
canvas.moveTo(200, 100);
canvas.lineTo(300, 200);
canvas.lineTo(300, 400);
canvas.stroke();
canvas.fillStyle = 'green';
canvas.fill()
canvas.closePath();
```

### 画圆
- arc(x, y, r, 起始弧度, 结束弧度, 旋转方向)
    + 弧度 = 角度 * Math.PI / 180
    + 旋转方向: true为逆时针, false为瞬时间
    + stroke fill closePath等 这些和画直线功能一样
```
canvas.arc(200, 200, 100, 0, 90 * Math.PI / 180, true);
    canvas.stroke();
```

### 画弧线
- arcTo(x1, y1, x2, y2, r)
```
canvas.moveTo(100, 200)
    canvas.arcTo(100, 100, 200, 100, 50)
    canvas.stroke()
```
- quadraticCurveTo(x1, y1, x2, y2, r)
    + 弧度会趋向moveTo那个点
```
//趋向点
canvas.moveTo(100, 200)
canvas.quadraticCurveTo(100, 100, 200, 200, 100)
canvas.stroke()
```

- bezierCurveTo(趋向点x1, 趋向点y1, 趋向点x2, 趋向点y2, 终点x, 终点y);
```
    //起始点
    canvas.moveTo(100, 200)
    canvas.bezierCurveTo(100, 100, 200, 200, 200, 100)
    canvas.stroke()

```
### beginPath 与 endPath
- beginPath() 开始画新线
- closePath() 闭合线
- beginPath和closePath是相对应 相应的作用就会在这闭合区间里生效

### save 与 restore
- 声明的fill填充颜色, lineWidth线条宽度等其他属性 只会在这个范围内生效
```
var canvasObj = document.getElementById('canvas');
    var canvas = canvasObj.getContext('2d');
    canvas.save();
    canvas.fillStyle = 'blue';
    canvas.fillRect(50,50, 100, 100);
    canvas.lineJoin = 'round';
    canvas.lineWidth = 10;
    canvas.strokeStyle = 'red';
    canvas.strokeRect(150.5,150.5, 100, 100);
    
    canvas.moveTo(100, 100);
    canvas.lineWidth = 5;
    canvas.lineTo(150, 200);
    canvas.lineTo(200, 200);
    canvas.closePath();
    canvas.stroke();
    canvas.restore()
    canvas.beginPath();
    canvas.moveTo(200, 100);
    canvas.lineTo(300, 200);
    canvas.lineTo(300, 400);
    canvas.stroke();
    canvas.fill()
```
### 变形
- traslate(x, y)
    + 改变变化相对位置(默认是0,0 点)
    + 如果需要按图形中心点旋转, 需要使用save, restore, translate, rotate配合使用
```
canvas.save()
canvas.clearRect(0, 0, canvasObj.width, canvasObj.height);
canvas.rotate(num * Math.PI / 180);
// canvas.scale(start / 50, start / 50);
canvas.translate(-50, -50)
canvas.fillRect(0, 0, 100, 100);
canvas.restore()
```
- rotate(arc)
    + 以弧度为单位旋转
    + 以左上角基准旋转
    + 数值会累加 速度会越来越快 所以用 save和restroe抱起来就可以解决这个问题
- scale(x, y)
    + 等比缩放
### 默认样式
- 默认宽300, 高150
