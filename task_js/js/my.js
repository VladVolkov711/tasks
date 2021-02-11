let i = 0;
let  images = [];
let time = 1000;

images[0] = "http://newshop.kupikupi.org/alboms/3/195/00002.jpeg";
images[1] = "http://newshop.kupikupi.org/alboms/3/193/00006.jpeg";
images[2] = "http://newshop.kupikupi.org/alboms/3/140/60-375.jpeg";

function SlideShow(){
    document.slideshoy.src = images[i];
    if (i < images.length - 1){
        i++;
    } else {
        i = 0;
    }
    setTimeout("SlideShow()", time)
}

let clik = document.getElementById("clik")

clik.onclick = function (){
    document.slideshoy.src = images[i];
    if (i < images.length - 1){
        i++;
    } else {
        i = 0;
    }
}

window.onload = SlideShow;