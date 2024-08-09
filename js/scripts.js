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
            setTimeout(type, 200); 
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
            setTimeout(type, 200); 
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
            setTimeout(type, 200); 
        }
    }

    type();
});

document.addEventListener("DOMContentLoaded", function() {
    const headingElement = document.getElementById('work-heading');
    const text = 'Work';
    let index = 0;

    function type() {
        if (index < text.length) {
            headingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 200); 
        }
    }

    type();
});

document.addEventListener("DOMContentLoaded", function() {
    var phoneNumber = "+48 601 355 058";
    var emailUser = "jan.glebocki2";
    var emailDomain = "gmail.com";

    var phoneElement = document.getElementById('phone-number');
    phoneElement.textContent = phoneNumber;

    var emailElement = document.getElementById('email-address');
    var emailLink = document.createElement('a');
    emailLink.href = 'mailto:' + emailUser + '@' + emailDomain;
    emailLink.textContent = emailUser + '@' + emailDomain;
    emailElement.appendChild(emailLink);
});
