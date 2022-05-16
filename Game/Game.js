var time = "day"
function ChangeDay()
{
    let w = document.getElementById("weather");
    let Bg = document.getElementById("Bg");
    if(time == "day")
    {
        time = "night";
        w.style.background = "url('Night.png')";
        Bg.style.background = "url('BgNight.png')";
    }
    else
    {
        time = "day";
        w.style.background = "url('Day.png')";
        Bg.style.background = "url('BgDay.png')";
    }
}
var uak = 0;
function timer() {setInterval
(
    function ()
    {
        if(uak == 48)
        {   ChangeDay();}
        if(uak == 60)
        {
            ChangeDay();
            uak = 0;
        }
        uak = uak + 1  
    },
    1000
);}

timer()

var a = [];
a[0] = {r1, p11, p12, p13, p14};
a[1] = {r2, p21, p22, p23, p24};
a[2] = {r3, p31, p32, p33, p34};
a[3] = {r4, p41, p42, p43, p44};
    

for(let i = 1; i <11; i++ )
{
document.getElementById("slot" + `${i}`).textContent = 0;
}

