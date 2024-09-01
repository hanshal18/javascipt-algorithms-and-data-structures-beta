const text_input = document.getElementById('text-input');
const check_btn = document.getElementById('check-btn');
const result = document.getElementById('result');

const checkForPalindrome = input => {
    const originalInput = input;
    if (input === '') {
        alert('Please input a value');
        return;
    }
    result.replaceChildren();
    const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    let resultMsg = `${originalInput} ${lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'
        } a palindrome.`;
    const result_paragraph = document.createElement('p');
    result_paragraph.className = 'user-input';
    result_paragraph.innerHTML = resultMsg;
    result.appendChild(result_paragraph);
    result.classList.remove('hidden');
};
check_btn.addEventListener('click', () => {
    checkForPalindrome(text_input.value);
    text_input.value = '';
});
text_input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        checkForPalindrome(text_input.value);
        text_input.value = '';
    }
});    