const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']


//creo una variabile dove andrò a salvare il valore del nuovo array creato con map

const authorNames = posts.map(element => {

  return element.author;
})

console.log(authorNames);

//versione ridotta

// const authorNames = posts.map(element => element.author);

// console.log(authorNames);

console.log('-----');

//versione con il ciclo for

let newArray = [];
for (let i = 0; i < posts.length; i++){

  const post = posts[i];
  newArray.push(post.author);

}
console.log(newArray);