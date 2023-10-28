$(document).ready(function() {
    // Get the current page path
    let currentPath = window.location.pathname;

    // Loop through each navigation link
    $('.nav-link').each(function() {
        let linkPath = $(this).attr('href');

        // Check if the link's href matches the current page path
        if (currentPath === linkPath) {
            $(this).closest('.nav-item').addClass('active');
        }
    });
});