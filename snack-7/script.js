const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }


//creo una variabile dove salverò il valore recuperato con il metodo find

const student = students.find(element => {

  return element.id === 2;

})
console.log(student);

console.log('---');
//versione ciclo for

for (let i = 0; i < students.length; i++){

  const student = students[i];
  
  if (student.id === 2){
    console.log(student);
  }
}