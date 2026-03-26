// API: https://cataas.com/cat

// returns object -> fields: Fact

async function getCat() {
  try {
    await fetch('https://cataas.com/cat')
    .then (response => response.blob())
    .then(blob => {
        const objectURL = URL.createObjectURL(blob);
        displayFact(objectURL);
    });
  } catch (error) {
    console.error('Error fetching fact:', error);
  }
}

function displayFact(obj){
  const newImg = document.createElement('img');
  newImg.id = 'catImg';
  newImg.src = `${obj}`;
  newImg.style = 'margin-top: 5vh;';
  document.body.appendChild(newImg);
}

window.addEventListener('DOMContentLoaded', getCat);

const footer = document.querySelector('footer');
const button = document.querySelector('button');
footer.addEventListener('click', () => {  window.location.reload(); });
button.addEventListener('click', () => {  window.location = './index.html'; });




