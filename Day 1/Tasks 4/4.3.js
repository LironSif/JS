
let johnsScores = [89, 120, 103];
let mikesScores = [116, 94, 123];

let johnsAverageScore = (johnsScores[0] + johnsScores[1] + johnsScores[2]) / johnsScores.length;
let mikesAverageScore = (mikesScores[0] + mikesScores[1] + mikesScores[2]) / mikesScores.length;

console.log(`John's average score: ${johnsAverageScore}`);
console.log(`Mike's average score: ${mikesAverageScore}`);

if (johnsAverageScore > mikesAverageScore) {
    console.log(`John's team wins with an average score of ${johnsAverageScore}`);
} else if (johnsAverageScore < mikesAverageScore) {
    console.log(`Mike's team wins with an average score of ${mikesAverageScore}`);
}