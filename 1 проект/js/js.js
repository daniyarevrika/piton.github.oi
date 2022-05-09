
const typedTextSpan = document.querySelector(".pidor3");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["keeping group sizes small, so you don't feel shy to speak.", "having a wide range of discussion topics, so you can talk about what you’re passionate about.", "valuing trust and accountability in our community, so you get to enjoy high-quality experiences.", "providing a wide range of videos and discussion questions to help you keep things on topic."];

const typingDelay = 30;
const erasingDelay = 10;
const newTextDelay = 2000;
let i = 0;
let textArrayIndex = 0;

function type() {
   if (i < textArray[textArrayIndex].length) {
      if (!cursorSpan.classList.contains("typing")) {
         cursorSpan.classList.add("typing")
      }
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(i);
      i++;
      setTimeout(type, typingDelay);
   }
   else {
      cursorSpan.classList.remove("typing");
      setTimeout(erase, newTextDelay);
   }
}


function erase() {
   if (i > 0) {
      if (!cursorSpan.classList.contains("typing")) {
         cursorSpan.classList.add("typing")
      }
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, i - 1);
      i--;
      setTimeout(erase, erasingDelay);
   }
   else {
      cursorSpan.classList.remove("typing");
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) {
         textArrayIndex = 0;
      }
      setTimeout(type, typingDelay + 300);
   }
}

document.addEventListener("DOMContentLoaded", function () {
   if (textArray.length) {
      setTimeout(type, newTextDelay + 300);
   }
})
let img = document.querySelectorAll("img");
let card = document.querySelectorAll(".slider__card ");
let slider = document.querySelector(".slider__line");
let count = 0;
let width;
function init() {
   width = document.querySelector(".buddytree__slider").offsetWidth;
   console.log(width);
   slider.style.width = width * card.length + 'px';
   //sliderWidth = document.querySelector(".slider__line").offsetWidth;//

   card.forEach(items => {
      items.style.width = width + 'px';
      items.style.height = 'auto';
   });
   rollSlider();
}
window.addEventListener('resize', init);
init();
document.querySelector(".vector__right").addEventListener('click', () => {
   count++
   if (count >= card.length) {
      count = 0;
   }
   rollSlider();
})
document.querySelector(".vector__left").addEventListener('click', () => {
   count--
   if (count < 0) {
      count = card.length - 1;
   }
   rollSlider();
})
function rollSlider() {
   slider.style.transform = 'translate(-' + count * width + 'px)';

}









