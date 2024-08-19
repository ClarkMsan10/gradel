var slideImg = document.getElementById("slideImg");

var images = new Array(
    "image/real/agr-1.jpg",
    "image/real/elev-1.jpg",
    "image/real/form-3.jpg",
    "image/real/agr-2.jpg",
)

var len = images.length;
var i = 0;

function slider(){
    if(i> len-1){
        i=0
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()', 4000 );
}


  // window.addEventListener("scroll", function(){
  //   var header = this.document.querySelector("header");
  //   header.classList.toggle("sticky", window.scrollY > 10 );
    
  // })
 
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

var lastScrollTop = 0;
header1 = document.querySelector("header");
header2 = document.querySelector(".logo");
window.addEventListener('scroll', function(){
  var scrollTop = this.window.scrollY || this.document.documentElement.scrollTop;

  if(scrollTop > lastScrollTop){
    header1.style.top = "-120px";
  }else{
    header1.style.top = "0"
    // header2.classList.toggle("top");
  }
  lastScrollTop = scrollTop;
  header1.classList.toggle("sticky", window.scrollY > 10 );
  // header2.classList.toggle("top", this.window.scrollY > 10);
})

window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('section.show');
  for (var i = 0; i < reveals.length; i++){
    console.log(reveals[i].classList);
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 75;
    
    if(revealtop < windowheight - revealpoint){
    reveals[i].classList.add('active');
    }
    // else{
    // reveals[i].classList.remove('active');
    // }
  }
}
