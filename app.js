jQuery(document).ready(function ($) {
    $('#country .nav-link.dropdown-toggle').text($('#country .dropdown-item').first().text());

    $('#country .dropdown-item').click(function () {
        $('#country .nav-link.dropdown-toggle').text($(this).text());
    })
});
