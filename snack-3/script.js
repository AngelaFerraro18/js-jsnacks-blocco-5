const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

//creo una variabile dove salverò il valore del nuovo array generato da map

const numbersPlusOne = numbers.map(number => {

    // console.log(number + 1);
    return number + 1;
    
})

console.log(numbersPlusOne);

console.log('----');

//versione ridotta

// const numbersPlusOne = numbers.map(number => number + 1);
    
// console.log(numbersPlusOne);

console.log('----');

//versione con il ciclo for
let newArray = [];
for ( let i = 0; i < numbers.length; i++){

    const number = numbers[i];
    let sum = number + 1;
    newArray.push(sum);
}
console.log(newArray);