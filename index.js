let i = 0;

const slides = document.querySelectorAll('.slider .slide-item');

const iconeLeft = document.querySelector('.fa-caret-square-left');
iconeLeft.addEventListener('click', () => {
    if (i >= 0 && i < slides.length) {
        i--;
        slider(i);
    }
    if (i < 0) {
        i = slides.length - 1;
        slider(i);
    }
});

const iconeRight = document.querySelector('.fa-caret-square-right');
iconeRight.addEventListener('click', () => {
    if (i >= 0 && i < slides.length) {
        i++;
        slider(i);
    }
    if (i > slides.length - 1) {
        i = 0;
        slider(i);
    }
});

function slider(i) {
    slides.forEach((item, index) => {
        if (i !== index) {
            item.style.display = 'none';
        } else {
            item.style.display = 'flex';
            item.style.animation = 'slider 1s linear';
        }
    });
}
