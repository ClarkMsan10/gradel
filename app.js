var slideImg = document.getElementById("slideImg");

var images = new Array(
    "image/pic-1.jpg",
    "image/pic-4.jpg",
    "image/pic-3.jpg",
    "image/pic-2.jpg",
)

var len = images.length;
var i = 0;

function slider(){
    if(i> len-1){
        i=0
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()', 16000 );
}


  window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 10 );
    
  })
 
hamburger = document.querySelector(".hamburger");
navBar = document.querySelector('.nav');
hamburger.onclick = function(){
        navBar.classList.toggle("active");
        var h = document.querySelector("header");
        h.classList.toggle('bg-nav');
        hamburger.classList.toggle("active");
}

function cancelMenu(){
    hamburger.classList.remove("active");
    navBar.classList.remove("active");
    var h = document.querySelector("header");
    h.classList.remove('bg-nav');
}
