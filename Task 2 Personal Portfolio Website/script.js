const text = "I'M A WEB DESIGNER!";
let index = 0;
const typingElement = document.getElementById("typing");

function typeWriter() {
    typingElement.innerHTML += text.charAt(index);
    index++;

    if (index <= text.length) {
        setTimeout(typeWriter, 270); // typing speed
    } else {
        index = 0;
        typingElement.innerHTML = ""; // clear and start again
        setTimeout(typeWriter, 500); // delay before typing again
    }
}

typeWriter();
const techSection = document.querySelector('.tech');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            techSection.classList.add('show');
        }
    });
}, { threshold: 0.6 }); // start animation when 40% visible

observer.observe(techSection);
