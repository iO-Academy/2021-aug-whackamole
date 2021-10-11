const allMoles = document.querySelectorAll('.moles');

const handleClickMeClick = (ev) => {
  alert(`You clicked a mole`);
}

let score = 0;

$(".moles").on("click", function(){
    $(this).css("display", "none");
    score++;
    console.log(score);
  });


// allMoles.forEach(mole => {
//     // mole.addEventListener('click', handleClickMeClick);

// })

// for (let i = 0; i < allMoles.length; i++) {
//     allMoles[i].addEventListener('click', handleClickMeClick);
// }
