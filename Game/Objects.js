var vegetable = function(name, length, fp, sp, price, foto)
{
    this.name = name;
    this.length = length;
    this.fp = fp;
    this.sp = sp;
    this.price = price;
    this.foto = foto;
}

var potato = new vegetable("potato", 180,"url('images/fpotato.png')","url('images/spotato.png')",2, "url('images/potato.png')" );
var tomato = new vegetable("tomato", 180,"url('images/fpotato.png')","url('images/spotato.png')",2, "url('images/tomato.png')" );




//1 - 61*61 2 - 73*73 3 - 85*85 4 - 99*99 5 -115*115    
//1 - 39 | 2 - 81 | 3 - 136 | 4 -202 | 5 - 289