$(document).ready(function() {
    var audio = $("#audio-player")[0];
    var isPlaying = false;

    $("#play-button").click(function() {
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
            $("#circle").css("animation-play-state", "paused"); // Dừng xoay khi tạm dừng phát nhạc
        } else {
            audio.play();
            isPlaying = true;
            $("#circle").css("animation-play-state", "running"); // Bắt đầu xoay khi phát nhạc
        }
    });

    $("#circle").hover(function() {
        $("#play-button").fadeIn();
    }, function() {
        $("#play-button").fadeOut();
    });
});
