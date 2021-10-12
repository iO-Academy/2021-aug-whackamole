
// Function to hide zombies on click.
const allZombies = document.querySelectorAll('.zombie-sprite');

$('.zombie-sprite').on('click', function(){
    $(this).css('display', 'none');
    addToScore();
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
