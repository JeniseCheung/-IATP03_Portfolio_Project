

var navItems = document.querySelectorAll(".mobile-bottom-nav__item");
navItems.forEach(function(e, i) {
	e.addEventListener("click", function(e) {
		navItems.forEach(function(e2, i2) {
			e2.classList.remove("mobile-bottom-nav__item--active");
		})
		this.classList.add("mobile-bottom-nav__item--active");
	});
});

//Active Links
const links = document.querySelectorAll('.mobile-bottom-nav__item-content');

// Add an event listener to each link
links.forEach(link => {
  link.addEventListener('click', () => {
    // Remove the active class from all links
    links.forEach(link => link.classList.remove('active'));
    // Add the active class to the clicked link
    link.classList.add('active');
  });
});


const inTextLinks = document.querySelectorAll('.in-text-link');

// Add an event listener to each link
inTextLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    inTextLinks.forEach(link => link.classList.remove('active'));
    // Add the active class to the clicked link
    link.classList.add('active');
  });
});

const navLinks = document.querySelectorAll('.button-nav');

// Add an event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    navLinks.forEach(link => link.classList.remove('active'));
    // Add the active class to the clicked link
    link.classList.add('active');
  });
});



// smooth-scrolling
$(document).ready(function(){
  $('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 500);
    }

  });
});

//Hamburger Animation
document.querySelector('.toggler').addEventListener('click', function() {
  if (this.checked) {
    // Add animation class
    document.querySelector('.animated-icon1').classList.toggle('open');
    document.querySelector('body').classList.toggle('no-scroll');
  } else {
    // Remove animation class
    document.querySelector('.animated-icon1').classList.toggle('open');
    document.querySelector('body').classList.toggle('no-scroll');
  }
});  


//Top Button Animation
var btn = $('.top-button');


$(window).scroll(function() {
  if ($(window).scrollTop() > 200) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '200');
});

//Carousel
// Variables
let prev = document.querySelector('.prev');
let next = document.querySelector('.go');
let imgs = document.querySelectorAll('.carousel-img');
let dots = document.querySelectorAll('.dot');
let captions = document.querySelectorAll('.carousel-caption')
let totalImgs = imgs.length;
let imgPosition = 0;

// Event Listeners
next.addEventListener('click', nextImg);
prev.addEventListener('click', prevImg);

// Update Position
function updatePosition (){
//   Images
  for(let img of imgs){
    img.classList.remove('visible');
    img.classList.add('hidden');
  }
  imgs[imgPosition].classList.remove('hidden');
  imgs[imgPosition].classList.add('visible')
//   Dots
  for (let dot of dots) {
     dot.className = dot.className.replace(" live", "");
  }
    dots[imgPosition].classList.add('live');
//   Captions
  for (let caption of captions) {
      caption.classList.remove('visible');
      caption.classList.add('hidden');
  }
    captions[imgPosition].classList.remove('hidden');
    captions[imgPosition].classList.add('visible')
}

// Next Img
function nextImg(){
  if (imgPosition === totalImgs -1){
        imgPosition = 0;
    } else{
        imgPosition++;
    }
    updatePosition();
}
//Previous Image
function prevImg(){
  if (imgPosition === 0){
        imgPosition = totalImgs-1;
    } else{
        imgPosition--;
    }
    updatePosition();
}

// Dot Position
dots.forEach((dot, dotPosition) => {
  dot.addEventListener("click", () => {
    imgPosition = dotPosition
    updatePosition(dotPosition)
  })
})