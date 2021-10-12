
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