let scores = [100, 72, 83, 94, 88, 87];

let names = ['Nancy', 'Blessling', 'Jorge', 'Svetlana'];

let aScore = scores[0];

scores[0] = 0;

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
}

scores.forEach(function(score) {
    console.log(score);
});

let numScores = scores.length;

scores.push(100);
scores.pop();
scores.shift();