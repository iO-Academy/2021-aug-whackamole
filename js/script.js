/**
 * Define vars and constants.
 */
let timer;
let timeLeft = 30; // seconds
let zombieAppear;
let score = 0;
const allZombies = document.querySelectorAll('.zombie-sprite');
const scoreBoard = document.querySelector('#scoreCount');

/**
 * Hide zombie on click.
 */
$('.zombie-sprite').on('click', function () {
    $(this).css('display', 'none');
    addToScore();
});

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

        zombie.style.display = 'initial';

        setTimeout(function () {
            zombie.style.display = 'none';
        }, 2000);
    }
}

/**
 * Instructions pop-out icon in game.html:
 */
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

/**
 * Start Game Function
 */
 function startGame() {
    resetGame();
    timer = setInterval(updateTimer, 1000);
    zombieAppear = setInterval(popupZombie, 1500);
}

/**
 * Decrements time left by one if time left is greater than zero.
 */
function updateTimer() {
    timeLeft = timeLeft - 1;
    if (timeLeft >= 0)
        $('#timer').html(timeLeft);
    else {
        endGame();
    }
}

/**
 * Clear intervals and show end modal.
 */
function endGame() {
    clearInterval(timer);
    clearInterval(zombieAppear);
    showEndModal();
}

/**
 * Show end modal with score.
 */
function showEndModal() {
    const endModal = document.querySelector('#end-modal');
    const endModalScore = document.querySelector('#end-modal-score');
    endModal.style.display = 'block';
    endModalScore.innerText = score;
}

/**
 * Triggers startGame() function on page load:
 */
$(document).ready(function() {
    startGame();
});