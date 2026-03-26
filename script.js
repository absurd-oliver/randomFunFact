
// API: https://uselessfacts.jsph.pl/api/v2/facts/random?language=en

// return-object fields: text, source, source_url, language


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
  
  const newText = document.createElement('p');
  newText.id = 'funFactText';
  newText.innerText = `${obj.text}\n by:`;
  
  const newAnchor = document.createElement('a');
  newAnchor.id = 'funFactSource';
  newAnchor.innerText = `${obj.source}`;
  newAnchor.href = `${obj.source_url}`;

  
  document.body.appendChild(newSpan);
  document.getElementById('funFactSpan').appendChild(newText);
  document.getElementById('funFactSpan').appendChild(newAnchor);
  
}


const test = {
  'text': 'testing',
  'source': 'i made it tf up',
  'source_url': 'https://i_made_it_tf_up.com',
  'language': 'en'
};

// displayFact(test);



getUselessFact();









