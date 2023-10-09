const play = document.getElementById("playbutton");
const text2 = document.querySelector(".text2");
const video=document.querySelector("video")
const bars=document.querySelector(".bars")
const mobileMenu=document.querySelector(".mobileMenu")
play.onclick = (() => {
   video.play();
   play.style.display="none"
   text2.style.display="none"
})

bars.onclick=(()=>{
   mobileMenu.classList.toggle("dFlex")
})



var swiper = new Swiper(".mySwiper", {
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   slidesPerView: 5,
   centeredSlides: true,
   loop: true,
 });


 const swiperWrapper=document.querySelector(".swiper-wrapper")
const url="http://localhost:3000/sherablar";
axios(url).then(({data})=>{
   data.forEach((sherab)=>{
const content=`
<div class="swiper-slide">
<div><img src="${sherab.src}" alt=""></div>
<h3>${sherab.title} </h3>
<p>${sherab.about}</p>
<a class="etrafli" href="Ətraflı">Ətraflı</a>
</div>

`
swiperWrapper.innerHTML+=content;
   })
})