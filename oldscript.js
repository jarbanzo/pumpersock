const imageElement = document.getElementById('random');
const pickBtn = document.getElementById('pickBtn');

const localImages = [
  'images/jurassic-keena.jpg',
  'images/keenacopter2.jpg',];

function setRandomLocalImage() {
  const randomIndex = Math.floor(Math.random() * localImages.length);
  imageElement.src = localImages[randomIndex];}

pickBtn.addEventListener('click', setRandomLocalImage);

