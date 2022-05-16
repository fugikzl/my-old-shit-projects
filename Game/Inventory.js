var slot = [null, document.getElementById("slot1"),document.getElementById("slot2"),document.getElementById("slot3"),document.getElementById("slot4"),document.getElementById("slot5"),document.getElementById("slot6"),document.getElementById("slot7"),document.getElementById("slot8"),document.getElementById("slot9"),document.getElementById("slot10")];
var p = [null, document.getElementById("p1"),document.getElementById("p2"),document.getElementById("p3"),document.getElementById("p4"),document.getElementById("p5"),document.getElementById("p6"),document.getElementById("p7"),document.getElementById("p8"),document.getElementById("p9"),document.getElementById("p10")];
var zapas = null;
var inv = function(p , slot)
{
    this.p = p;
    this.slot = slot;
    this.add = function(ngng)
    {
        p.style.backgroundImage = ngng.foto;
        this.name = ngng.name;
        this.obj = ngng;
    };
    this.name = null;
    this.obj = null;
}

var inventory = [null];
var thinks=[];

for(i=1; i<11; i++)
{
    inventory[i] = new inv(p[i], slot[i]);
}

function add(ngng)
{
    if (inventory[10].name != null)
    {return "ERROR"}
    let hui = false;
    let check = 1;
    while(hui == false)
    { 
        if (inventory[check].name == ngng.name)
        {
            document.getElementById("slot" + `${check}`).textContent = parseInt(document.getElementById("slot" + `${check}`).textContent, 10) + 1;
            return null
        }
        if (inventory[check].name == null)
        {   
            inventory[check].add(ngng);
            hui = true;
            document.getElementById("slot" + `${check}`).textContent = parseInt(document.getElementById("slot" + `${check}`).textContent, 10) + 1;
        }
        else {check = check + 1;}
         
    }

}



    




