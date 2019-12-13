$(document).ready(function () {
    var target = $('#target');
    // alert('load complete!');

    $('img').on('load', function () {
        target.css("height", $('#ao1').height() + $('#ao2').height());
        alert('load complete!');
    });
});