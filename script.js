// API: https://uselessfacts.jsph.pl/api/v2/facts/random?language=en

// returns object -> fields: text, source, source_url, language

async function getUselessFact() {
  try {
    const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en');
    const data = await response.json();
    displayFact(data);
  } catch (error) {
    console.error('Error fetching fact:', error);
  }
}

function displayFact(obj){
  const newSpan = document.createElement('p');
  newSpan.id = 'funFactSpan';
  document.body.appendChild(newSpan);
  newSpan.style = 'white-space: pre-line; margin-top: 5vh;';
  newSpan.innerHTML = `${obj.text} \n source: <a href='${obj.source_url}'>${obj.source}</a>`;
}

window.addEventListener('DOMContentLoaded', getUselessFact);

const footer = document.querySelector('footer');
const button = document.querySelector('button');
footer.addEventListener('click', () => {  window.location.reload(); });
button.addEventListener('click', () => {  window.location = 'catIndex.html'; });




