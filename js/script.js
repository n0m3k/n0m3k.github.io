$(document).ready(function() {
    // Get the current page path
    let currentPath = window.location.pathname;

    // Loop through each navigation link
    $('.nav-link').each(function() {
        let linkPath = $(this).attr('href');

        $('.nav-item').removeClass('active');

        // Check if the link's href matches the current page path
        if (currentPath === linkPath) {
            $(this).closest('.nav-item').addClass('active');
        }
    });
});

$(document).ready(function() {
    $('.nav-link').click(function() {
        // Remove the active class from all navigation items
        $('.nav-item').removeClass('active');

        // Add the active class to the parent li of the clicked link
        $(this).parent().addClass('active');
    });
});