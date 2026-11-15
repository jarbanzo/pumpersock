const imageElement = document.getElementById('randomImage');
const pickBtn = document.getElementById('pickBtn');

const localImages = [
  'images/img1.jpg',
  'images/img2.jpg',
  'images/img3.jpg'
];

function setRandomLocalImage() {
  const randomIndex = Math.floor(Math.random() * localImages.length);
  imageElement.src = localImages[randomIndex];
}

// Set initial image
setRandomLocalImage();

// Pick a new random image on click
pickBtn.addEventListener('click', setRandomLocalImage);
