// variables
const switchBtns = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const preloader = document.querySelector(".preloader");

switchBtns.addEventListener("click", function () {
  switchBtns.classList.toggle("slide-switch");
  if (switchBtns.classList.contains("slide-switch")) {
    video.pause();
  } else {
    video.play();
  }
});

window.addEventListener("load", function () {
    setTimeout(() => {
        preloader.classList.add('hide-preloader')
    }, 1000);
});


