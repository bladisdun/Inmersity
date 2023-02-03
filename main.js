
const frase = "The universe \n is amazing";

const targetEl = document.getElementById("bubble");

frase.split("").map((char, idx) => {
    const el = document.createElement("span");

    el.innerText = char;
    el.setAttribute("data-index", idx.toString());
    el.classList.add("hover-char");

    targetEl.appendChild(el);
});

const hoverChars = [...document.getElementsByClassName("hover-char")];

const removeClasses = () => {
    hoverChars.map((char) => {
        char.classList.remove("hovered");
        char.classList.remove("hovered-adjacent");
    });
};

hoverChars.map((char) => {
    char.addEventListener("mouseover", (e) => {
        removeClasses();

        const currentElement = e.target;
        const index = parseInt(currentElement.getAttribute("data-index"), 10);

        const prevIndex = index === 0 ? null : index - 1;
        const nextIndex = index === frase.length - 1 ? null : index + 1;

        const prevEl = 
            prevIndex !== null &&
            document.querySelector(`[data-index="${prevIndex}"]`);

        const nextEl = 
            nextIndex !== null &&
            document.querySelector(`[data-index="${nextIndex}"]`);

        e.target.classList.add("hovered");

        prevEl && prevEl.classList.add("hovered-adjacent");
        nextEl && nextEl.classList.add("hovered-adjacent");
    });
});

document
    .getElementById("bubble")
    .addEventListener('mouseleave', () => {
        removeClasses();
    });

/* ScrollReveal */

ScrollReveal().reveal('.pop', {
  delay: 300,
  duration: 700,
  opacity: 0,
  easing: 'ease-in-out'
});

ScrollReveal().reveal('.pop2', {
  delay: 500,
  duration: 700,
  opacity: 0,
  easing: 'ease-in-out'
});

ScrollReveal().reveal('.pop3', {
  delay: 700,
  duration: 700,
  opacity: 0,
  easing: 'ease-in-out'
});

ScrollReveal().reveal('.text-uni', {
  delay: 300,
  duration: 1000,
  distance: '100px',
  opacity: 0,
  origin: 'right',
  easing: 'ease-in-out'
});

/* Milky */

ScrollReveal().reveal('.text-milk', {
  delay: 400,
  duration: 1000,
  distance: '100px',
  opacity: 0,
  origin: 'left',
  easing: 'ease-in-out'
});

ScrollReveal().reveal('.photo-left', {
  delay: 400,
  duration: 1000,
  distance: '100px',
  opacity: 0,
  origin: 'top',
  easing: 'ease-in-out'
});

ScrollReveal().reveal('.photo-right', {
  delay: 400,
  duration: 1000,
  distance: '100px',
  opacity: 0,
  origin: 'bottom',
  easing: 'ease-in-out'
});

/* Solarsys */

ScrollReveal().reveal('.meteor', {
  delay: 600,
  duration: 2000,
  distance: '1400px',
  origin: 'right',
  easing: 'ease-in-out'
});

ScrollReveal().reveal('.solarsys-text', {
  delay: 400,
  duration: 1000,
  distance: '100px',
  opacity: 0,
  origin: 'bottom',
  easing: 'ease-in-out'
});

ScrollReveal().reveal('.nav', {
  delay: 200,
  duration: 1000,
  distance: '100px',
  opacity: 0,
  origin: 'top',
  easing: 'ease-in-out'
});

/* Tilt js */

VanillaTilt.init(document.querySelectorAll(".plan"), {
  max: 25,
  speed: 400,
  scale: 1.3,
  glare: true,
  "max-glare": 1
});

/* Query */

var mq = window.matchMedia("(max-width: 360)");

if (mq.matches) {
  ScrollReveal().reveal('.meteor', {
    delay: 600,
    duration: 10000,
    distance: '1400px',
    origin: 'right',
    easing: 'ease-in-out'
  });
}