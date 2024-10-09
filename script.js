document.addEventListener('DOMContentLoaded', (event) => {
    const typingTextElement1 = document.getElementById('typing-text1');
    const text1 = "Console.WriteLine('Hello Traveller.');\nConsole.WriteLine('Welcome to my website!');";

    function typeWriter(text, element, i, callback) {
        if (i < text.length) {
            if (text.charAt(i) === '\n') {
                element.innerHTML += '<br>';
            } else {
                element.innerHTML += text.charAt(i);
            }
            i++;
            setTimeout(() => typeWriter(text, element, i, callback), 20);
        } else {
            if (callback) {
                setTimeout(callback, 500);
            }
        }
    }

    function fadeInContent() {
        const contentElements = document.querySelectorAll('.content');
        contentElements.forEach(element => {
            element.classList.add('fade-in');
        });
    }

    typeWriter(text1, typingTextElement1, 0, fadeInContent);

    // Add hover effect for game icons
    const gameIcons = document.querySelectorAll('.game-icon img');

    gameIcons.forEach(img => {
        const staticSrc = img.src;
        const gifSrc = img.getAttribute('data-gif'); 

        img.addEventListener('mouseenter', () => {
            img.src = gifSrc;
        });

        img.addEventListener('mouseleave', () => {
            img.src = staticSrc;
        });
    });

});