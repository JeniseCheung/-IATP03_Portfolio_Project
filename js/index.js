//bottom nav index
var navItems = document.querySelectorAll(".mobile-bottom-nav-2__item");
navItems.forEach(function(e, i) {
	e.addEventListener("click", function(e) {
		navItems.forEach(function(e2, i2) {
			e2.classList.remove("mobile-bottom-nav-2__item--active");
		})
		this.classList.add("mobile-bottom-nav-2__item--active");
	});
});

//Active Links
const links = document.querySelectorAll('.mobile-bottom-nav-2__item-content');

// Add an event listener to each link
links.forEach(link => {
  link.addEventListener('click', () => {
    // Remove the active class from all links
    links.forEach(link => link.classList.remove('active'));
    // Add the active class to the clicked link
    link.classList.add('active');
  });
});

//hamburger animation
//Hamburger Animation
document.querySelector('.toggler').addEventListener('click', function() {
  if (this.checked) {
    // Add animation class
    document.querySelector('.animated-icon1-2').classList.toggle('open');
    document.querySelector('body').classList.toggle('no-scroll');
  } else {
    // Remove animation class
    document.querySelector('.animated-icon1-2').classList.toggle('open');
    document.querySelector('body').classList.toggle('no-scroll');
  }
});  
