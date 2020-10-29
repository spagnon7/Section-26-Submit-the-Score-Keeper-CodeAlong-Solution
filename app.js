const p1Score = document.querySelector('.p1-score');
const p2Score = document.querySelector('.p2-score');

const p1Plus = document.querySelector('.p1-plus');
const p2Plus = document.querySelector('.p2-plus');

//Setting P1/P2 buttons to increment score

p1Plus.addEventListener('click', function() {
    let currentScore = parseInt(p1Score.innerText);
    let newScoreNum = currentScore + 1;
    let newScoreStr = newScoreNum.toString();
    p1Score.innerText = newScoreStr;
})

p2Plus.addEventListener('click', function() {
    let currentScore = parseInt(p2Score.innerText);
    let newScoreNum = currentScore + 1;
    let newScoreStr = newScoreNum.toString();
    p2Score.innerText = newScoreStr;
})