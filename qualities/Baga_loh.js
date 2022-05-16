var loh = 80;
var uakyt = 1000/20;

var ball = function(radius, posx, posy, sx, sy)
{
    this.r = radius;
    this.posx = posx;
    this.posy = posy;
    this.sx = sx;
    this.sy = sy;
}
var a = []; 
var b = [];
n = 0;
var colors = ["red","lightblue","black","lightgreen","gray","violet"];

function getRand(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
}

function draw(radius, posx, posy, sx, sy)
{
    b[n] = new ball(radius, posx, posy, sx, sy);
    var u  = document.createElement("div");
    u.id = "ball"+`${n}`;
    u.style.height = `${b[n].r *2}px`;
    u.style.width = `${b[n].r *2}px`;
    u.style.borderRadius = `${b[n].r}px`;
    u.style.background = colors[getRand(0,6)];
    u.style.position = "absolute"
    u.style.left = posx + "px";
    u.style.top  = posy + "px";
    document.body.appendChild(u);
    n = n+1;
}
var T = 3;

var frequency = 50

function move(index) 
{
    
    setInterval(function(ball){   
        
    T = 50 - parseInt(document.getElementById("Pol").value);
    if(T < 1){T = 1}
    if(T > 40){T = 2*T}
    if(T == 50){T = 99999}
    if(b[index].posx + b[index].sx/T < 7.5)
    { b[index].sx = -b[index].sx}
    if(b[index].posx + b[index].sx/T > 485)
    { b[index].sx = -b[index].sx}
    if(b[index].posy + b[index].sy/T < 7.5)
    { b[index].sy = -b[index].sy}
    if(b[index].posy + b[index].sy/T > 485)
    { b[index].sy = -b[index].sy}

    document.getElementById("ball"+`${index}`).style.left = (b[index].posx + b[index].sx/T) +"px";
    document.getElementById("ball"+`${index}`).style.top = (b[index].posy + b[index].sy/T) +"px";
    b[index].posx = b[index].posx + b[index].sx/T;
    b[index].posy = b[index].posy + b[index].sy/T}, uakyt);
}

function createBall(radius, posx, posy, sx, sy, ball, index)
{
    draw(radius, posx, posy, sx, sy, index);
    move(index);

}
var cor = [];
for(i = 0; i<loh; i++)
{
createBall(15, getRand(15,480), getRand(15,480), getRand(-25,25), getRand(-25,25), b, n);
    cor[i] = [b[i].posx, b[i].posy ];
}



function getDistance(in1 , in2)
{
    let huikan = (b[in2].posx - b[in1].posx)*(b[in2].posx - b[in1].posx) + (b[in2].posy - b[in1].posy)*(b[in2].posy - b[in1].posy);
    return Math.sqrt(huikan);
}

var la = 0;

function stop()
{
    if(la==0)
    {
    la = la + 1;
    for(i = 0; i < b.length; i++)
    {
        cor[i] = [b[i].sx, b[i].sy]
        b[i].sx =0;
        b[i].sy =0;
    }
    
    }

}

function play()
{
    
    if(la == 1)
    {
    la = la - 1;
    for(i = 0; i < b.length; i++)
    {
        b[i].sx =cor[i][0];
        b[i].sy =cor[i][1];
    }
    
    }
}
