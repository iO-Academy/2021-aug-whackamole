/**
 *
 * Hide zombie on click.
 */
const allZombies = document.querySelectorAll('.zombie-sprite');

$('.zombie-sprite').on('click', function(){
    $(this).css('display', 'none');
});

let score = 0;

const scoreBoard = document.querySelector('#scoreCount');

/**
 * Adds 1 to the score
 */
const addToScore = () => {
    score++;
    updateScoreBoard();
}

/**
 * Updates the on screen scoreboard
 */
const updateScoreBoard = () => {
    scoreBoard.textContent = score.toString();
}

/**
 * Random zombie selector
 */
function pickRandom() {
    let randomArray = [

        false,
        false,
        false,
        false,
        false,
        false
    ];
    return randomArray[randomSelection] = true;
}
const randomSelection = randomNum();
function randomNum() {
    return Math.floor(Math.random() * 6);
}