const textInput = document.querySelector('#name-input');
const textForInput = document.querySelector('#name-output');

textInput.addEventListener('input', () => {
    if(textInput.value !== "") {
        textForInput.textContent = textInput.value;
    } else {
        textForInput.textContent = "Anonymous";
    }
});