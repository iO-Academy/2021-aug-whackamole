// Function to hide zombies on click.

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