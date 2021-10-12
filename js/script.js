
//Instructions pop-out icon in game.html:
$(document).ready(function() {
    $(".instruction-content").hide();
    $(".window-close").hide();
    $(".info-circle").show();


    $(".instruction-button").on('click', function () {
        $(".instruction-content").slideToggle("slow");
        $(".window-close").toggle();
        $(".info-circle").toggle();
    });
});