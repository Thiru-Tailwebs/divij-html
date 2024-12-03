$(document).ready(function () {

  $('.home-slider').slick({
    arrows: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="assets/images/slick-left.png" alt="Previous"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="assets/images/slick-right.png" alt="Next"></button>',
    centerMode: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  // Initialize Slick Slider on page load
  $('.product-slider').slick({
    arrows: true, // Show arrows
    dots: false,  // Disable dots
    prevArrow: '<button class="slick-prev slick-arrow">←</button>',
    nextArrow: '<button class="slick-next slick-arrow">→</button>',
    slidesToShow: 1, // Show only 1 slide at a time
    slidesToScroll: 1, // Scroll only 1 slide at a time
    infinite: true, // Make the slider infinite
    adaptiveHeight: true, // Make sure height adjusts properly
  });

  // Force Slick Slider to recalculate when hover
  $('.image-wrapper').hover(function () {
    $('.product-slider').slick('setPosition'); // Recalculate layout on hover
  });


  // Apply matchHeight to all card-style-1 elements in the project
  $('.match-height-1, .match-height-2, .page-height-1').matchHeight();

  // product-show-gallery 

  

});

// header-search-icon

document.addEventListener('DOMContentLoaded', function () {
  const searchIcon = document.querySelector('.search-icon');
  const searchBox = document.querySelector('.search-box');

  searchIcon.addEventListener('click', function () {
    searchBox.classList.toggle('active');
    if (searchBox.classList.contains('active')) {
      searchBox.focus();
    }
  });

  // Close search box when clicking outside
  document.addEventListener('click', function (event) {
    if (!searchBox.contains(event.target) &&
      event.target !== searchIcon) {
      searchBox.classList.remove('active');
    }
  });
});

// search-functionality 
document.addEventListener('DOMContentLoaded', function () {
  const searchButton = document.getElementById('searchButton');
  const searchWrapper = document.querySelector('.search-wrapper');

  // Toggle search box open/close on search icon click
  searchButton.addEventListener('click', function () {
    searchWrapper.classList.toggle('active'); // Toggle class to control the input's width
  });
});

// video-section
const video = document.getElementById('background-video');
const pauseBtn = document.getElementById('pause-btn');
const muteBtn = document.getElementById('mute-btn');

// Pause/Play functionality
pauseBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    pauseBtn.classList.remove('fa-play-circle');
    pauseBtn.classList.add('fa-pause-circle');
  } else {
    video.pause();
    pauseBtn.classList.remove('fa-pause-circle');
    pauseBtn.classList.add('fa-play-circle');
  }
});

// Mute/Unmute functionality
muteBtn.addEventListener('click', () => {
  video.muted = !video.muted;
  if (video.muted) {
    muteBtn.classList.remove('fa-volume-up');
    muteBtn.classList.add('fa-volume-mute');
  } else {
    muteBtn.classList.remove('fa-volume-mute');
    muteBtn.classList.add('fa-volume-up');
  }
});

function updateImage(imageSrc) {
  document.getElementById('mainImage').src = imageSrc;
}







