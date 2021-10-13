/**
 *
 * Hide zombie on click.
 */
const allZombies = document.querySelectorAll('.zombie-sprite');

$('.zombie-sprite').on('click', function () {
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

/**
 * Pops up a random zombie, with a timeout to disappear
 */
function popupZombie() {
    const randomZombie = Math.floor(Math.random() * 6);
    const zombie = allZombies[randomZombie];

    // check if not already up
    if (zombie.style.display === 'none') {

        zombie.style.display = 'block';

        setTimeout(function () {
            zombie.style.display = 'none';
        }, 2000);
    }
}

/**
 * Starting point that triggers the game
 */
const startGame = () => {
    setInterval(popupZombie, 1500);
}
