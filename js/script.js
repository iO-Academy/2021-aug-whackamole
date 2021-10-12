// Function to hide zombies on click.
const allZombies = document.querySelectorAll('.zombie-sprite');

$('.zombie-sprite').on('click', function(){
    $(this).css('display', 'none');
});