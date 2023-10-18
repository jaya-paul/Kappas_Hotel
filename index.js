var menu=document.querySelector("#bar");
var lis=document.querySelector(".navi");

menu.addEventListener("click",function(){
    menu.classList.toggle("fa-times");
    lis.classList.toggle("act");
});

document.querySelector("#search").onclick=()=>{
    document.querySelector("#search_form").classList.toggle("active")
};
document.querySelector(".cross").onclick=()=>{
    document.querySelector("#search_form").classList.toggle("active")
};
var swiper = new Swiper(".container", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });





