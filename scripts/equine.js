const images = [
    "https://raw.githubusercontent.com/Elements6007/blacktiephotography/refs/heads/main/images/515498964_122117926868894330_5275967619635924826_n.jpg",
    "https://raw.githubusercontent.com/Elements6007/blacktiephotography/refs/heads/main/images/515506930_122117926850894330_453902333349712970_n.jpg"
];

const hero = document.getElementsByClassName("lobby-equine");

let index = 0;

function changeBackground() {
    // Fade out
    hero.style.opacity = 0;

    setTimeout(() => {
        // Change image
        hero.style.backgroundImage = `url(${images[index]})`;

        // Fade in
        hero.style.opacity = 1;

        // Update index
        index = (index + 1) % images.length;
    }, 1000); // match CSS transition time
}

// Initial image
//hero.style.backgroundImage = `url(${images[0]})`;

// Change every 5 seconds
setInterval(changeBackground, 5000);