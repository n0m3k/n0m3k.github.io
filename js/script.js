
function preventCaching() {
    let elements = document.querySelectorAll('link[rel="stylesheet"], script[src], img[src]');

    elements.forEach(function(element) {
        let url = element.getAttribute('href') || element.getAttribute('src');
        if (url.indexOf('?') === -1) {
            url += '?_=' + new Date().getTime(); // Append a unique timestamp as query parameter
        } else {
            url += '&_=' + new Date().getTime(); // Append a unique timestamp as query parameter
        }
        if (element.tagName.toLowerCase() === 'link') {
            element.setAttribute('href', url);
        } else {
            element.setAttribute('src', url);
        }
    });
}


function activeMenu() {
    let currentPath = window.location.pathname;

    $('.navbar .nav-link').each(function () {
        let linkPath = $(this).attr('href');

        if (currentPath === linkPath) {
            $(this).closest('.nav-item').addClass('active');
        } else {
            $(this).closest('.nav-item').removeClass('active');
        }
    });
}

$(document).ready(function() {
    activeMenu();
    preventCaching();
});