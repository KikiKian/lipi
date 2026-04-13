const inputElement = document.getElementById('input');
inputElement.addEventListener('input', (event) => {
    fetch('/transliterate', {
        method: 'POST',
        body: event.target.value
    })
    .then(response => response.text())
    .then(text => {
        document.getElementById("output").innerHTML = text;
    })
});