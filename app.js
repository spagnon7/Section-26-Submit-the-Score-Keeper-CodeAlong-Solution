const p1Score = document.querySelector('.p1-score');
const p2Score = document.querySelector('.p2-score');

const p1Plus = document.querySelector('.p1-plus');
const p2Plus = document.querySelector('.p2-plus');
const reset = document.querySelector('.reset');

const h1 = document.querySelector('h1');

//Setting reset button to reset score/colors

reset.addEventListener('click', () => {
    p1Score.innerText = 0;
    p2Score.innerText = 0;

    p1Score.style.color = '#6930c3';
    p2Score.style.color = '#6930c3';
    h1.style.color = '#6930c3';

    p1Plus.disabled = false;
    p2Plus.disabled = false;
})

//Setting P1/P2 button scoring logic

const select = document.querySelector('#win-score');

p1Plus.addEventListener('click', function() {
    let winScore = select.value;
    
    let currentScore = parseInt(p1Score.innerText);
    let newScoreNum = currentScore + 1;
    let newScoreStr = newScoreNum.toString();
    p1Score.innerText = newScoreStr;

    console.log(newScoreStr);
    console.log(winScore);

    if (newScoreStr === winScore) {
        p1Score.style.color = 'green';
        p2Score.style.color = 'red';
        h1.style.color = 'black';

        p1Plus.disabled = true;
        p2Plus.disabled = true;
    }
})

p2Plus.addEventListener('click', function() {
    let winScore = select.value;
    
    let currentScore = parseInt(p2Score.innerText);
    let newScoreNum = currentScore + 1;
    let newScoreStr = newScoreNum.toString();
    p2Score.innerText = newScoreStr;

    if (newScoreStr === winScore) {
        p2Score.style.color = 'green';
        p1Score.style.color = 'red';
        h1.style.color = 'black';

        p1Plus.disabled = true;
        p2Plus.disabled = true;
    }
})