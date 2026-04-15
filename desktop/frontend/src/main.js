import { Transliterate } from '/wailsjs/go/main/App.js';

const input = document.getElementById('input');
const output = document.getElementById('output');
const copyBtn = document.getElementById('copy-btn');

input.addEventListener('input', function () {
    const text = this.value;
    if (!text.trim()) {
        output.innerText = '';
        return;
    }
    Transliterate(text).then(function (result) {
        output.innerText = result;
    });
});

function copyOutput() {
    const text = output.innerText;
    if (!text) return;
    navigator.clipboard.writeText(text).then(function () {
        copyBtn.textContent = 'Copied!';
        setTimeout(function () { copyBtn.textContent = 'Copy'; }, 1500);
    });
}

window.copyOutput = copyOutput;