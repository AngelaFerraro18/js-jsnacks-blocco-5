const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

names.forEach(element => {
    console.log(element);
})

console.log('----');

//versione ridotta
names.forEach(element => console.log(element));

console.log('----');

//versione con il ciclo for
for (let i = 0; i < names.length; i++){

    const name = names[i];
    console.log(name);
}