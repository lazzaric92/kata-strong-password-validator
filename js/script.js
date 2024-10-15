const passwdInputEl = document.getElementById('password-input');

passwdInputEl.addEventListener('selectionchange', () => {
    checkStringLength(passwdInputEl.value, 9, document.querySelector('.requirements > .no_char'));
})

// --> function to check the input value length
/**
 * 
 * @param {*} value  the input value whose length needs to be checked
 * @param {*} minlength the minimum number of characters required
 * @param {*} requirementEl if passed, the element that show the requirement to meet
 */
function checkStringLength(value, minlength, requirementEl){
    if(value.trim().length >= minlength && !requirementEl.classList.contains('checked')){
        requirementEl.classList.add('checked');
    } else if(value.trim().length < minlength && requirementEl.classList.contains('checked')){
        requirementEl.classList.remove('checked');
    }
}