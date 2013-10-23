function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.lineWidth=5;

//Rectangle
ctx.strokeStyle=get_random_color();
ctx.strokeRect(20,20,150,100);

//Circle
ctx.beginPath();
ctx.arc(200,200,50,0,2*Math.PI);
ctx.closePath();
ctx.strokeStyle=get_random_color();
ctx.stroke();


//Triangle
ctx.beginPath();
ctx.moveTo(20,300);
ctx.lineTo(150,300);
ctx.lineTo(20,150);
ctx.lineTo(20,300);
ctx.closePath();
ctx.strokeStyle=get_random_color();
ctx.stroke();