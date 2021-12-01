$(document).ready(function () {
    $("#autoWidth").lightSlider({
        autoWidth: true,
        adaptiveHeight: false,
        loop: false,
        pager: false,

        onSliderLoad: function () {
            $("#autoWidth").removeClass("cS-hidden");
        },
    });
});
