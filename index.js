let menu=document.querySelectorAll("header ul li a");


function menuactive(){
    menu.forEach(item=>{
        item.classList.remove("active");
        this.classList.add("active")
    })
}

menu.forEach(item=>{
    item.addEventListener("click",menuactive);
})

let slideshow=document.getElementById("slideshow");
let slides=slideshow.getElementsByTagName("img");
let index=0;

function nextSlide(){
    slides[index].classList.remove("active");
    index=(index+1)%slides.length;
    slides[index].classList.add("active")
}
function previewslide(){
    slides[index].classList.remove("active");
    index=(index-1+slides.length)%slides.length;
    slides[index].classList.add("active")
}
let slideshowtext=document.getElementById("slideshowtext");
let slidestext=slideshowtext.getElementsByTagName("div");
let index1=0;


function nextSlideText(){
    slidestext[index1].classList.remove("active");
    index1=(index1+1)%slidestext.length;
    slidestext[index1].classList.add("active")
}
function previewslideText(){
    slidestext[index1].classList.remove("active");
    index1=(index1-1+slidestext.length)%slidestext.length;
    slidestext[index1].classList.add("active")
}
