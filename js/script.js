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
 * Resets the game to its start conditions
 */
const resetGame = () => {
    // reset score
    score = 0;

    // reset all zombies to hidden
    allZombies.forEach(function (zombie) {
        zombie.style.display = 'none';
    })
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
    resetGame();
    setInterval(popupZombie, 1500);
}

//Instructions pop-out icon in game.html:
$(document).ready(function () {
    $(".instruction-content").css('display', 'none');
    $(".window-close").hide();
    $(".info-circle").show();

    $(".instruction-button").on('click', function () {
        $(".instruction-content").toggle({direction: "left"});
        $(".window-close").toggle();
        $(".info-circle").toggle();
    });
});

// Function to start game:
const launchGame = document.querySelector('.launch');
const handleLaunchGame = (ev) => {

    // GAME BEGINS:
    window.location.href = "game.html";
    // Call game functions

}
launchGame.addEventListener('click', handleLaunchGame);
