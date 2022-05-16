const slider = document.getElementById("slide");
const right = document.getElementById("R");
const left = document.getElementById("L");
const arr = [];
arr.push("./1.png","./2.png","./3.png","./4.png")
var b = 1;

left.onclick = () => {
    if (b >= 1)
    {
        b = b-1
        slider.style.backgroundImage = `url(${arr[b]})`
    }
    else
    {
        b = arr.length - 1 ;
        slider.style.backgroundImage = `url(${arr[b]})`
    }
}

right.onclick = () => {
    if (b == (arr.length - 1) )
    {
        b = 0
        slider.style.backgroundImage = `url(${arr[b]})`
    }
    else
    {
        b = b + 1 ;
        slider.style.backgroundImage = `url(${arr[b]})`
    }
}

function pushImage(image) {
    let k = './qualities/' + `${image}`;
    arr.push(k);
}
