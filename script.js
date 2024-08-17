document.addEventListener('DOMContentLoaded', (event) => {
    const typingTextElement = document.getElementById('typing-text');
    const text = 'print("Hello Internet!");';

    function typeWriter(text, element, i, callback) {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(() => typeWriter(text, element, i, callback), 100);
        } else if (callback) {
            setTimeout(callback, 1000);
        }
    }

    typeWriter(text, typingTextElement, 0);
});