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

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'


//creo una variabile dove salvo il valore trovato con find

const classStudent = students.find(element =>{
  
  return element.name === 'Marco Lanci';
})
console.log(classStudent.class);

console.log('-----');

//versione ciclo for

for (let i = 0; i < students.length; i++){

  const student = students[i];

  if (student.name === 'Marco Lanci'){
    console.log(student.class);
  }
}