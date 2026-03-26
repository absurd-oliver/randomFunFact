
// API: https://uselessfacts.jsph.pl/api/v2/facts/random?language=en

// return-object fields: text, source, source_url, language


async function getUselessFact() {
  try {
    
    const response = await fetch('https://uselessfacts.jsph.pl');
    
    const data = await response.json();
    
    
    
  } catch (error) {
    console.error('Error fetching fact:', error);
  }
}

function displayFact(obj){
  
  const newSpan = document.createElement('p');
  newSpan.id = 'funFactSpan';
  
  const newText = document.createElement('p');
  newText.id = 'funFactText';
  newText.innerText = `${obj.text}\n`;
  
  const newAnchor = document.createElement('a');
  newAnchor.id = 'funFactSource';
  newAnchor.innerText = `${obj.source}`;
  newAnchor.href = `${obj.source_url}`;

  
  document.body.appendChild(newSpan);
  document.getElementById('funFactSpan').appendChild(newText);
  document.getElementById('funFactSpan').appendChild(newAnchor);
  
}


const text = {
  'text': 'testing',
  'source': 'i made it tf up',
  'source_url': 'i_made_it_tf_up.com',
  'language': 'en'
}













