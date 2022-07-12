window.addEventListener('scroll',()=>{
   let scrolled = window.scrollY
   let navi = document.getElementById('navi')

   if(scrolled > 50){
    navi.classList.add('nav-fixed');
   }else{
    navi.classList.remove('nav-fixed');
   }
})



function mobileMenu() {
   var x = document.querySelector(".navMenu");
   
   if (x.style.display === "block") {
      x.style.display = "none";   
    } else {
      x.style.display = "block";
    } 
}


const ovo = document.querySelectorAll('.product-item ');
const screenPosition= window.innerHeight ;
const cars = document.querySelectorAll('.learn-item')


window.addEventListener("scroll", function(){
   
   if(cars[0].getBoundingClientRect().top < screenPosition){
      cars[0].classList.add('animate__animated', 'animate__fadeInLeftBig')
   }
   if(cars[1].getBoundingClientRect().top < screenPosition){
      cars[1].classList.add('animate__animated', 'animate__fadeInUpBig')
   }
   if(cars[2].getBoundingClientRect().top < screenPosition){
      cars[2].classList.add('animate__animated', 'animate__fadeInRightBig')
   }
})


window.addEventListener("scroll", function(){
   
   if(ovo[0].getBoundingClientRect().top < screenPosition){
      ovo[0].classList.add('animate__animated', 'animate__slideInLeft')
   }
   if(ovo[1].getBoundingClientRect().top < screenPosition){
      ovo[1].classList.add('animate__animated', 'animate__slideInRight')
   }
})

