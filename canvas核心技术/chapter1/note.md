
- ### 推荐使用属性为canvas加宽高，避免用css设置宽高把canvas默认的300*150拉伸

|  属性    |参数      |  解释    |
| ---- | ---- | ---- |
|    toDataURL  |type,quality | image/png,0~1.0      |
| toBlob     |callback,type,args  |回调函数,同上   |
|      |      |      |

- ## 2D绘画API
|属性|简介|
|----|----|
|fillStyle|填充|
|globalAlpha|0~1.0;全局透明度|
|globalCompsiteOperation|某物体绘制在其他物体的方式|
|lineCap|绘制线段的端点(butt,round,quare)|
|lineJoin|两条线段相交如何绘制焦点(level,round,miter)|
|miterLimit|miter形式的焦点|
|shadowBlur|延伸阴影效果|
|shadowColor|阴影颜色|
|shadowOffsetX|阴影水平偏移量|
|shadowOffsetY|阴影垂直偏移量|
|strokeStyle|路径的绘制|
|textAlign|文本水平对齐|
|textBaseline|文本垂直对齐|

- ## 常用方法

|方法名|简介|
|---|---|
|save()|当前的canvas状态保存到堆栈顶端|
|restore()|canvas状态堆栈顶端条目弹出|