import { Transliterate } from '/wailsjs/go/main/App.js';

const input = document.getElementById('input');
const output = document.getElementById('output');
const outputLabel = document.getElementById('output-label');
const copyBtn = document.getElementById('copy-btn');
const toggleBtn = document.getElementById('toggle-btn');

let autocomplete = false;

toggleBtn.addEventListener('click', function () {
    autocomplete = !autocomplete;
    toggleBtn.textContent = autocomplete ? 'Autocomplete: on' : 'Autocomplete: off';
    toggleBtn.classList.toggle('active', autocomplete);
    output.style.display = autocomplete ? 'none' : '';
    outputLabel.style.display = autocomplete ? 'none' : '';
});

input.addEventListener('input', function () {
    if (autocomplete) return;
    const text = this.value;
    if (!text.trim()) {
        output.innerText = '';
        return;
    }
    Transliterate(text).then(function (result) {
        output.innerText = result;
    });
});

input.addEventListener('keydown', function (e) {
    if (!autocomplete || e.key !== ' ') return;
    e.preventDefault();

    const pos = this.selectionStart;
    const val = this.value;
    const wordStart = val.lastIndexOf(' ', pos - 1) + 1;
    const word = val.slice(wordStart, pos);

    if (!word) {
        this.value = val.slice(0, pos) + ' ' + val.slice(pos);
        this.selectionStart = this.selectionEnd = pos + 1;
        return;
    }

    Transliterate(word).then(function (result) {
        input.value = val.slice(0, wordStart) + result + ' ' + val.slice(pos);
        input.selectionStart = input.selectionEnd = wordStart + result.length + 1;
    });
});

function copyOutput() {
    const text = autocomplete ? input.value : output.innerText;
    if (!text) return;
    navigator.clipboard.writeText(text).then(function () {
        copyBtn.textContent = 'Copied!';
        setTimeout(function () { copyBtn.textContent = 'Copy'; }, 1500);
    });
}

window.copyOutput = copyOutput;
