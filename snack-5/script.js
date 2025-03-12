const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

//creo una variabile dove andrò a salvare l'array creato con filter

const numEven = nums.filter(element => {

    const even = element % 2 === 0;
    return even;
})

console.log(numEven);

// //versione ridotta

// const numEven = nums.filter(element => element % 2 === 0);

// console.log(numEven);

console.log('----');

//versione con il ciclo for

let newArray = [];
for ( let i = 0; i < nums.length; i++){

    const num = nums[i];

    if (num % 2 === 0){
        newArray.push(num);
    }
}
console.log(newArray);