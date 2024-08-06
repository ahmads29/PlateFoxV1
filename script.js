const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());















let currentIndex = 0;
const images = document.querySelectorAll('#slider figure img');
const totalImages = images.length;

function updateSlider() {
  const offset = -currentIndex * 100;
  document.querySelector('#slider figure').style.left = offset + '%';
}

function moveLeft() {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
  updateSlider();
}

function moveRight() {
  currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
  updateSlider();
}






document.querySelector('.menu-item-container-flex').addEventListener('wheel', function(e) {
  if (e.deltaY > 0) {
    this.scrollLeft += 100;
  } else {
    this.scrollLeft -= 100;
  }
  e.preventDefault();
});




