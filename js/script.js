/**
 * Define score, timer and sound effect vars.
 */
let score = 0;
const scoreBoard = document.querySelector('#scoreCount');
let timer;
let timeLeft = 30; // seconds
let zombieAppear;
let countdown;
let countdownTime = 6;
let hitSound = new sound("sounds/Splat.mp3");
let zombieSound = new sound("sounds/zombie02.mp3");
let backgroundSound = new sound("sounds/Tension Loop.wav");
let timeoutSpeed = 2000;
let appearSpeed = 1500;

/**
 * Hide zombie on click.
 */
const allZombies = document.querySelectorAll('.zombie-sprite');

$('.zombie-sprite').on('click', function () {
    hitSound.play();
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

        zombieSound.play();
        zombie.style.display = 'initial';

        setTimeout(function () {
            zombie.style.display = 'none';
        }, timeoutSpeed);
    }
}

/**
 * Instructions pop-out icon in game.html
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
    backgroundSound.play();
    timer = setInterval(updateTimer, 1000);
    zombieAppear = setInterval(popupZombie, appearSpeed);
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
 * Clean up intervals and show end modal.
 */
function endGame() {
    clearInterval(timer);
    clearInterval(zombieAppear);
    showEndModal();
}

/**
 * Decrements time left by one if time left is greater than zero.
 */
function updateCountdown() {
    countdownTime = countdownTime - 1;
    if (countdownTime >= 1)
        $('#start-modal-countdown').html(countdownTime);
    else {
        clearInterval(countdown);
        const startModal = document.querySelector('#start-modal');
        startModal.style.display = 'none';
        startGame();
    }
}

/**
 * Function to show modal with game start countdown.
 */
function showStartModal() {
    const startModal = document.querySelector('#start-modal');
    startModal.style.display = 'block';
    countdown = setInterval(updateCountdown, 1000);
    resetGame();
}

/**
 * Function to show modal at game end.
 */
function showEndModal() {
    const endModal = document.querySelector('#end-modal');
    const endModalScore = document.querySelector('#end-modal-score');
    const endModalMessage = document.querySelector('#end-modal-message');
    endModal.style.display = 'block';
    if (score == 0) {
        endModalMessage.innerText = 'You died! Dare to try again? ';
    };
    endModalScore.innerText = score;
}

/**
 * Triggers showStartModal() function on page load:
 */
$(document).ready(function(ev) {
    // retrieve mode parameter from URL
    const url = new URL(window.location);
    const mode = url.searchParams.get("m");

    // adjust difficulty parameters
    timeoutSpeed = (mode == 'hard') ? 1100 : 2000;
    appearSpeed = (mode == 'hard') ? 1000 : 1500;

    showStartModal();
});

/**
 * Function to play sound effects:
 */
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}