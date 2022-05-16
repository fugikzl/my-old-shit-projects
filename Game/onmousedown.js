document.getElementById('p1').onmousedown = function()
{
    if(inventory[1].name != null)
    {
        zapas = inventory[1].obj; 
        console.log(1);
        zapas.s = 'slot1';
    }
    else
    {
        zapas = null
        console.log(0);
    }
}

document.getElementById('p2').onmousedown = function()
{
    if(inventory[2].name != null)
    {
        zapas = inventory[2].obj; 
        console.log(1);
        zapas.s = 'slot2';
    }
    else
    {
        zapas = null
        console.log(0);
    }
}

document.getElementById('p3').onmousedown = function()
{
    if(inventory[3].name != null)
    {
        zapas = inventory[3].obj; 
        console.log(1);
        zapas.s = 'slot3';
    }
    else
    {
        zapas = null
        console.log(0);
    }
}

document.getElementById('p4').onmousedown = function()
{
    if(inventory[4].name != null)
    {
        zapas = inventory[4].obj; 
        console.log(1);
        zapas.s = 'slot4';
    }
    else
    {
        zapas = null
        console.log(0);
    }
}

document.getElementById('p5').onmousedown = function()
{
    if(inventory[5].name != null)
    {
        zapas = inventory[5].obj; 
        console.log(1);
        zapas.s = 'slot5';
    }
    else
    {
        zapas = null
        console.log(0);
    }
}

document.getElementById('p6').onmousedown = function()
{
    if(inventory[6].name != null)
    {
        zapas = inventory[6].obj; 
        console.log(1);
        zapas.s = 'slot6';
    }
    else
    {
        zapas = null
        console.log(0);
    }
}

document.getElementById('p7').onmousedown = function()
{
    if(inventory[7].name != null)
    {
        zapas = inventory[7].obj; 
        console.log(1);
        zapas.s = 'slot7';
    }
    else
    {
        zapas = null
        console.log(0);
    }
}

document.getElementById('p8').onmousedown = function()
{
    if(inventory[8].name != null)
    {
        zapas = inventory[8].obj; 
        console.log(1);
        zapas.s = 'slot8';
    }
    else
    {
        zapas = null
        console.log(0);
    }
}

document.getElementById('p9').onmousedown = function()
{
    if(inventory[9].name != null)
    {
        zapas = inventory[9].obj; 
        console.log(1);
        zapas.s = 'slot9';
    }
    else
    {
        zapas = null
        console.log(0);
    }
}

document.getElementById('p10').onmousedown = function()
{
    if(inventory[10].name != null)
    {
        zapas = inventory[10].obj; 
        console.log(1);
        zapas.s = 'slot10';
    }
    else
    {
        zapas = null
        console.log(0);
    }
}



var ogorod = function(p, pn, id, ch)
{
    this.p = p;
    this.pn = pn;
    this.id = id;
    this.ch = ch;
}

var sad = [];
sad[0]= null;
var num = 1;

for(i=1; i<6; i++)
{
    for(j = 1; j < 5; j++)
    {
        sad[num] = new ogorod(i, j, document.getElementById('p'+`${i}`+`${j}`),document.getElementById('ch'+`${i}`+`${j}`));
        num = num+1;
    }
}

sad[10].ch.onmousedown = function()
{   
    console.log(1);
    if(zapas != null)
    {
        sad[10].id.style.backgroundImage = zapas.fp;
        document.getElementById(zapas.s).textContent = parseInt(document.getElementById(zapas.s).textContent, 10) - 1;
        zapas = null;
    }
}
sad[1].ch.onmousedown = function()
{   
    console.log(1);
    if(zapas != null)
    {
        sad[1].id.style.backgroundImage = zapas.fp;
        document.getElementById(zapas.s).textContent = parseInt(document.getElementById(zapas.s).textContent, 10) - 1;
        zapas = null;
    }
}
sad[2].ch.onmousedown = function()
{   
    console.log(1);
    if(zapas != null)
    {
        sad[2].id.style.backgroundImage = zapas.fp;
        document.getElementById(zapas.s).textContent = parseInt(document.getElementById(zapas.s).textContent, 10) - 1;
        zapas = null;
    }
}

sad[3].ch.onmousedown = function()
{   
    console.log(1);
    if(zapas != null)
    {
        sad[3].id.style.backgroundImage = zapas.fp;
        document.getElementById(zapas.s).textContent = parseInt(document.getElementById(zapas.s).textContent, 10) - 1;
        zapas = null;
    }
}

sad[4].ch.onmousedown = function()
{   
    console.log(1);
    if(zapas != null)
    {
        sad[4].id.style.backgroundImage = zapas.fp;
        document.getElementById(zapas.s).textContent = parseInt(document.getElementById(zapas.s).textContent, 10) - 1;
        zapas = null;
    }
}

sad[5].ch.onmousedown = function()
{   
    console.log(1);
    if(zapas != null)
    {
        sad[5].id.style.backgroundImage = zapas.fp;
        document.getElementById(zapas.s).textContent = parseInt(document.getElementById(zapas.s).textContent, 10) - 1;
        zapas = null;
    }
}

sad[6].ch.onmousedown = function()
{   
    console.log(1);
    if(zapas != null)
    {
        sad[6].id.style.backgroundImage = zapas.fp;
        document.getElementById(zapas.s).textContent = parseInt(document.getElementById(zapas.s).textContent, 10) - 1;
        zapas = null;
    }
}

sad[7].ch.onmousedown = function()
{   
    console.log(1);
    if(zapas != null)
    {
        sad[7].id.style.backgroundImage = zapas.fp;
        document.getElementById(zapas.s).textContent = parseInt(document.getElementById(zapas.s).textContent, 10) - 1;
        zapas = null;
    }
}

sad[8].ch.onmousedown = function()
{   
    console.log(1);
    if(zapas != null)
    {
        sad[8].id.style.backgroundImage = zapas.fp;
        document.getElementById(zapas.s).textContent = parseInt(document.getElementById(zapas.s).textContent, 10) - 1;
        zapas = null;
    }
}

sad[9].ch.onmousedown = function()
{   
    console.log(1);
    if(zapas != null)
    {
        sad[9].id.style.backgroundImage = zapas.fp;
        document.getElementById(zapas.s).textContent = parseInt(document.getElementById(zapas.s).textContent, 10) - 1;
        zapas = null;
    }
}

sad[11].ch.onmousedown = function()
{   
    console.log(1);
    if(zapas != null)
    {
        sad[11].id.style.backgroundImage = zapas.fp;
        document.getElementById(zapas.s).textContent = parseInt(document.getElementById(zapas.s).textContent, 10) - 1;
        zapas = null;
    }
}

sad[12].ch.onmousedown = function()
{   
    console.log(1);
    if(zapas != null)
    {
        sad[12].id.style.backgroundImage = zapas.fp;
        document.getElementById(zapas.s).textContent = parseInt(document.getElementById(zapas.s).textContent, 10) - 1;
        zapas = null;
    }
}

sad[13].ch.onmousedown = function()
{   
    console.log(1);
    if(zapas != null)
    {
        sad[13].id.style.backgroundImage = zapas.fp;
        document.getElementById(zapas.s).textContent = parseInt(document.getElementById(zapas.s).textContent, 10) - 1;
        zapas = null;
    }
}

sad[14].ch.onmousedown = function()
{   
    console.log(1);
    if(zapas != null)
    {
        sad[14].id.style.backgroundImage = zapas.fp;
        document.getElementById(zapas.s).textContent = parseInt(document.getElementById(zapas.s).textContent, 10) - 1;
        zapas = null;
    }
}

sad[15].ch.onmousedown = function()
{   
    console.log(1);
    if(zapas != null)
    {
        sad[15].id.style.backgroundImage = zapas.fp;
        document.getElementById(zapas.s).textContent = parseInt(document.getElementById(zapas.s).textContent, 10) - 1;
        zapas = null;
    }
}

sad[16].ch.onmousedown = function()
{   
    console.log(1);
    if(zapas != null)
    {
        sad[16].id.style.backgroundImage = zapas.fp;
        document.getElementById(zapas.s).textContent = parseInt(document.getElementById(zapas.s).textContent, 10) - 1;
        zapas = null;
    }
}

sad[17].ch.onmousedown = function()
{   
    console.log(1);
    if(zapas != null)
    {
        sad[17].id.style.backgroundImage = zapas.fp;
        document.getElementById(zapas.s).textContent = parseInt(document.getElementById(zapas.s).textContent, 10) - 1;
        zapas = null;
    }
}

sad[18].ch.onmousedown = function()
{   
    console.log(1);
    if(zapas != null)
    {
        sad[18].id.style.backgroundImage = zapas.fp;
        document.getElementById(zapas.s).textContent = parseInt(document.getElementById(zapas.s).textContent, 10) - 1;
        zapas = null;
    }
}

sad[19].ch.onmousedown = function()
{   
    console.log(1);
    if(zapas != null)
    {
        sad[19].id.style.backgroundImage = zapas.fp;
        document.getElementById(zapas.s).textContent = parseInt(document.getElementById(zapas.s).textContent, 10) - 1;
        zapas = null;
    }
}

sad[20].ch.onmousedown = function()
{   
    console.log(1);
    if(zapas != null)
    {
        sad[20].id.style.backgroundImage = zapas.fp;
        document.getElementById(zapas.s).textContent = parseInt(document.getElementById(zapas.s).textContent, 10) - 1;
        zapas = null;
    }
}

