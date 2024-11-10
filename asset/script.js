
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,

  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      // progressContent.textContent = `${Math.ceil(time / 1000)}`;
    }

  }
});


const swiperSlide = document.querySelectorAll('.swiper-slide')
swiperSlide[0].children[0].innerHTML = 'rollsroyce phantom'
swiperSlide[1].children[0].innerHTML = 'bentley Continental GT'
swiperSlide[2].children[0].innerHTML = 'lamborghini autentica'
swiperSlide[3].children[0].innerHTML = 'bmw m4'
swiperSlide[4].children[0].innerHTML = 'landrover defender'
swiperSlide[5].children[0].innerHTML = 'toyota Gt86'
swiperSlide[6].children[0].innerHTML = 'ferrari 458'
swiperSlide[7].children[0].innerHTML = 'ferrari laferrari'
swiperSlide[8].children[0].innerHTML = 'lamborghini centenario'
swiperSlide[9].children[0].innerHTML = 'porsche taycan '



/////////////////////////////font deisgn//////////////////////////

 let intervalId = setInterval(() => {
  const text = document.querySelector('.fancy')
  console.log(text);
  const strText = text.textContent
  console.log(strText);
  const splitText = strText.split('');
  console.log(splitText);
  text.textContent = ''
  for (let s = 0; s < splitText.length; s++) {
    text.innerHTML += '<h5>' + splitText[s] + '</h5>';
  }

  let char = 0;
  let timer = setInterval(onTick, 50);

  function onTick() {
    const h5 = text.querySelectorAll('h5')[char];
    console.log(h5);
    h5.classList.add('fade')
    char++
    if (char === splitText.length) {
      clearInterval(timer)
      timer = null
    }
  }
  clearInterval(intervalId)

}, 5000);



