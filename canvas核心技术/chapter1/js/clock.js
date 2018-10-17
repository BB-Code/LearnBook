var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    fontHight = 15,
    margin = 35,
    hand_truncation = canvas.width/25,
    hour_hand_truncation = canvas.width/10,
    numeral_spacing = 20,//时间间隔
    radius = canvas.width/2 - margin,
    hand_radius = radius + numeral_spacing;
//画外框
function drawCircle(){
    ctx.beginPath();
    ctx.arc(canvas.width/2,canvas.height/2,radius,0,Math.PI*2,true);
    ctx.stroke();
}
//绘画数字
function drawNumerals(){
    var numerals =[1,2,3,4,5,6,7,8,9,10,11,12],
        angle = 0,
        numeralWidth = 0;
    numerals.forEach(function(numeral){
        angle = Math.PI/6*(numeral-3);
        numeralWidth = ctx.measureText(numeral).width;
        ctx.fillText(numeral,canvas.width/2+Math.cos(angle)* (hand_radius)- numeralWidth/2,
        canvas.height/2+Math.sin(angle)* (hand_radius)+ fontHight/3);
    });
}
//画中心点
function drawCenter(){
    ctx.beginPath();
    ctx.arc(canvas.width/2,canvas.height/2,5,0,Math.PI*2,true);
    ctx.fill();
}
//画钟单个柄
function drawHand(loc,isHour) {
    var angle = (Math.PI*2) * (loc/60)-Math.PI/2,
        hand_radius = isHour ? radius - hand_truncation - hour_hand_truncation : radius- hand_truncation;
    ctx.moveTo(canvas.width/2,canvas.height/2);
    ctx.lineTo(canvas.width/2+Math.cos(angle)*hand_radius,
        canvas.height/2 + Math.sin(angle)* hand_radius);
    ctx.stroke();
}
//画钟柄
function drawHands(){
    var date = new Date,
        hour = date.getHours();
        hour = hour > 12 ? hour-12 : hour;
        drawHand(hour*5+(date.getMinutes()/60)*5,false,0.5);
        drawHand(date.getMinutes(),false,0.5);
        drawHand(date.getSeconds(),false,0,2);
}
//画钟表
function drawClock(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawCircle();
    drawCenter();
    drawHands();
    drawNumerals();
}
//设置数字样式
ctx.font = fontHight +'px Arial';
loop = setInterval(drawClock,1000);