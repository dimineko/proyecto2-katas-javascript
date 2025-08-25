// Ejercicio 6 - Método reduce() en JavaScript

// Array de exámenes
const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5},
    {name: 'Maria Aranda Jimenez', score: 1},
    {name: 'Cristóbal Martínez Lorenzo', score: 6},
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

// 6.1 Suma de todas las notas
const totalScore = exams.reduce((sum, exam) => sum + exam.score, 0);

// Muestro el resultado
console.log('Suma total de notas:', totalScore);

// 6.2 Suma de notas aprobadas (>= 5)
const approvedScore = exams.reduce((sum, exam) => {
    // Sumo solo si está aprobado
    if (exam.score >= 5) {
        return sum + exam.score;
    }
    return sum;
}, 0);

// Muestro el resultado
console.log('Suma de notas aprobadas:', approvedScore);

// 6.3 Media de todas las notas
const averageScore = exams.reduce((sum, exam) => sum + exam.score, 0) / exams.length;

// Muestro el resultado
console.log('Media de todas las notas:', averageScore);
