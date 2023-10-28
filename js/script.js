$(document).ready(function() {
    let currentPath = window.location.pathname;

    $('.navbar .nav-link').each(function() {
        let linkPath = $(this).attr('href');

        if (currentPath === linkPath) {
            $(this).closest('.nav-item').addClass('active');
            console.log("active");
        } else {
            $(this).closest('.nav-item').removeClass('active');
            console.log("remove");
        }
    });
});