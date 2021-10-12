// hideZombie = (ev) => {
//     const allZombies = document.querySelector('#z1');
//     allZombies.setAttribute('display', 'none');
// }
//
// clickHandle = () => {
//     const allZombies = document.querySelectorAll('#z1');
//     allZombies.addEventListener('click', hideZombie());
// }
// const allZombies = document.querySelectorAll('.zombie-hitbox');
// $('allZombies').on('click', function(){
//     $(this).css('display', 'none');
// });

// clickHandle();
const allZombies = document.querySelectorAll('.zombie-sprite');
$('.zombie-sprite').on('click', function(){
    $(this).css('display', 'none');
});
// allZombies.forEach(zombie => {
//     zombie.addEventListener('click', handleClickMeClick());
// })