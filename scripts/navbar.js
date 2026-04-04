var nav = document.querySelector('nav');
if (document.URL.indexOf("projects") > -1) {
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 600) {
            nav.classList.add('bg-dark', 'shadow');
        } else {
            nav.classList.remove('bg-dark', 'shadow');
        }
    });
} else {
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 600) {
            nav.classList.add('bg-dark', 'shadow');

        } else {
            nav.classList.remove('bg-dark', 'shadow');
        }
    });
}