var newImageUrl = Logo.src;
var urlLocation;
var nav = document.querySelector('nav');

if (document.URL.indexOf("projects") > -1) {
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 50) {
            nav.classList.add('bg-dark', 'shadow');
            newImageUrl = "images/logo_nobackground_crop.png";
            const links = nav.getElementsByClassName("nav-link");
            navAdapt(links, "#FFFFFF");

        } else {
            nav.classList.remove('bg-dark', 'shadow');
            newImageUrl = "images/logo_nobackground_crop_black.png";
            const links = nav.getElementsByClassName("nav-link");
            navAdapt(links, "#000000");

        }

        Logo.src = newImageUrl;
    });
} else {
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 50) {
            nav.classList.add('bg-dark', 'shadow');
            newImageUrl = "images/logo_nobackground_crop.png";
            const links = nav.getElementsByClassName("nav-link");
            navAdapt(links, "#FFFFFF");
            
        } else {
            nav.classList.remove('bg-dark', 'shadow');
            newImageUrl = "images/logo_nobackground_crop_black.png";
            const links = nav.getElementsByClassName("nav-link");
            navAdapt(links, "#000000");

        }

        Logo.src = newImageUrl;
    });
}

function navAdapt(links, color) {
    const link = nav.getElementsByClassName("nav-link");
    for (const link of links) {
        link.style.color = color;
    }


}