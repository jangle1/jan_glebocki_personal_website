document.addEventListener('DOMContentLoaded', function() {
    console.log('Website Loaded');
});

document.addEventListener("DOMContentLoaded", function() {
    const headingElement = document.getElementById('about-me-heading');
    const text = 'About Me';
    let index = 0;

    function type() {
        if (index < text.length) {
            headingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 200); // Czas pomiędzy literami, dostosuj według potrzeb
        }
    }

    type();
});

document.addEventListener("DOMContentLoaded", function() {
    const headingElement = document.getElementById('main-name');
    const text = 'Jan Głębocki';
    let index = 0;

    function type() {
        if (index < text.length) {
            headingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 200); // Czas pomiędzy literami, dostosuj według potrzeb
        }
    }

    type();
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('Website Loaded');
});

document.addEventListener("DOMContentLoaded", function() {
    const headingElement = document.getElementById('contact-heading');
    const text = 'Contact me!';
    let index = 0;

    function type() {
        if (index < text.length) {
            headingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 200); // Czas pomiędzy literami, dostosuj według potrzeb
        }
    }

    type();
});

document.addEventListener("DOMContentLoaded", function() {
    const headingElement = document.getElementById('work-heading');
    const text = 'Work section';
    let index = 0;

    function type() {
        if (index < text.length) {
            headingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 200); // Czas pomiędzy literami, dostosuj według potrzeb
        }
    }

    type();
});