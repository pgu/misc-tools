function analyzeText () {
  const resultText = document.getElementById('result-text');
  resultText.innerText = '';

  const text = document.getElementById('content-to-analyze').value;
  const parts = text.split('<ns2:ItemID>');
  parts.shift(); // remove head

  const itemIds = [];
  for (let i = 0; i < parts.length; i++) {
    const itemId = parts[ i ].split('</ns2:ItemID>')[ 0 ];
    itemIds.push(itemId);
  }
  // console.log(itemIds);

  const duplicateIds = [];
  for (let i = 0; i < itemIds.length; i++) {
    const refItemId = itemIds[ i ];

    if (i !== itemIds.length - 1) {
      for (let j = i + 1; j < itemIds.length; j++) {
        const otherItemId = itemIds[ j ];
        if (refItemId === otherItemId) {
          duplicateIds.push(refItemId);
          break;
        }
      }
    }
  }

  if (duplicateIds.length > 0) {
    console.log(`There are ${duplicateIds.length} duplicates: `, duplicateIds);
    resultText.innerText = `There are ${duplicateIds.length} duplicates:\n` + duplicateIds.join('\n');
  } else {
    console.log('Well done, no duplicates');
    resultText.innerText = 'Well done, no duplicates';
  }

}


