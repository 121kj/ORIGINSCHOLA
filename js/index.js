// Animation
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.5
};
const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions)

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// show more
const btn = document.querySelector('.button');
// const text = document.querySelector('.text');
const i4 = document.getElementById('l4');
const i5 = document.getElementById('l5');
const i6 = document.getElementById('l6');
let isOpen = false;

btn.addEventListener('click', e => {
    if (isOpen == false) {
        isOpen = true;
        i4.classList.remove('no-tablet');
        i5.classList.remove('no-phone');
        i6.classList.remove('no-phone');
        btn.innerHTML = "감추기";
    } else {
        isOpen = false;
        i4.classList.add('no-tablet');
        i5.classList.add('no-phone');
        i6.classList.add('no-phone');
        btn.innerHTML = "더보기";
    }
});