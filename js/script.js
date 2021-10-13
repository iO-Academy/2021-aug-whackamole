/**
 *
 * Hide zombie on click.
 */
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

//Instructions pop-out icon in game.html:
$(document).ready(function() {
    $(".instruction-content").css('display','none');
    $(".window-close").hide();
    $(".info-circle").show();

    $(".instruction-button").on('click', function () {
        $(".instruction-content").toggle({ direction: "left" });
        $(".window-close").toggle();
        $(".info-circle").toggle();
    });
});

// 30 second timer
let timer;
let timeLeft = 30; // seconds

// decrements time left by one if time left is greater than zero.

function updateTimer() {
    timeLeft = timeLeft - 1;
    if (timeLeft >= 0)
        $('#timer').html(timeLeft);
    else {
        endGame();
    }
}

function startGame() {
    timer = setInterval(updateTimer, 1000); // 1000 = 1second
}

function endGame() {
    cancelInterval(timer);
}

