const inputTextarea = document.getElementById('input-textarea');
const charCount = document.getElementById('char-count');
const wordCount = document.getElementById('word-count');

inputTextarea.addEventListener('input', () => {
    charCount.textContent = inputTextarea.value.length;

    let txt = inputTextarea.value.trim();
    wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;
})