let score = prompt('Enter your score:');
score = Number(score); 
if (isNaN(score)) {
    console.log("Invalid input. Please enter a number.");
} else if (score >= 0 && score <= 64) {
    console.log("F");
} else if (score >= 65 && score <= 69) {
    console.log("D");
} else if (score >= 70 && score <= 79) {
    console.log("C");
} else if (score >= 80 && score <= 89) {
    console.log("B");
} else if (score >= 90 && score <= 100) { 
    console.log("A");
} else {
    console.log("Score out of range.");
}






let grade = prompt('Enter a grade');
grade = grade.toUpperCase();  

if (grade === 'A') {
    console.log(90);
} else if (grade === 'B') {
    console.log(80);
} else if (grade === 'C') {
    console.log(70);
} else if (grade === 'D') {
    console.log(60);
} else {
    console.log("Invalid input. Please enter one of the allowed characters (a, b, c, or d).");
}
