const username = 'jarbanzo';
const repo = 'pumpersock';
const folder = 'images';

const imageElement = document.getElementById('random');
const pickBtn = document.getElementById('pickBtn');

let localImages = [];
let lastIndex = -1;

fetch(`https://api.github.com/repos/${username}/${repo}/contents/${folder}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`GitHub API error (${response.status}): Make sure the repo is public and the folder name matches.`);
    }
    return response.json();
  })
  .then(files => {
    localImages = files
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file.name))
      .map(file => file.path);

    setRandomLocalImage();
  })
  .catch(error => console.error('Error loading images:', error));

function setRandomLocalImage() {
  if (localImages.length === 0) return;
  if (localImages.length === 1) {
    imageElement.src = localImages[0];
    return;
  }

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * localImages.length);
  } while (randomIndex === lastIndex);

  lastIndex = randomIndex;
  imageElement.src = localImages[randomIndex];
}

pickBtn.addEventListener('click', setRandomLocalImage);
