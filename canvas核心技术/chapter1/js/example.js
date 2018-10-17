var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');
    ctx.font = '38pt Arial';
    ctx.fillStyle='lightblue';
    ctx.strokeStyle ='blue';
    ctx.fillText('Hello Canvas',canvas.width/2-150,canvas.height/2+15);
    ctx.strokeText('Hello Canvas',canvas.width/2-150,canvas.height/2+15);
    
