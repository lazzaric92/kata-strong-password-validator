const passwdInputEl = document.getElementById('password-input');

passwdInputEl.addEventListener('selectionchange', () => {
    checkStringLength(passwdInputEl.value, 9, document.querySelector('.requirements > .no_char'));
    checkUpperCase(passwdInputEl.value, document.querySelector('.requirements > .uppercase'))
})

// --> function to check the input value length
/**
 * 
 * @param {*} value  the input value whose length needs to be checked
 * @param {*} minlength the minimum number of characters required
 * @param {*} requirementEl the element that show the requirement to meet
 */
function checkStringLength(value, minlength, requirementEl){
    if(value.trim().length >= minlength && !requirementEl.classList.contains('checked')){
        requirementEl.classList.add('checked');
    } else if(value.trim().length < minlength && requirementEl.classList.contains('checked')){
        requirementEl.classList.remove('checked');
    }
}

// --> function to check if a character is uppercase
/**
 * 
 * @param {*} value  the input value whose characters needs to be checked
 * @param {*} requirementEl the element that show the requirement to meet
 */
function checkUpperCase(value, requirementEl){
    value = value.trim();
    let char;
    let isUpperCase = false;
    for(let i= 0; i < value.length; i++){
        char = value.charAt(i);
        if (char === char.toUpperCase()){
            isUpperCase = true;
        }
    }

    if(isUpperCase === true && !requirementEl.classList.contains('checked')){
        requirementEl.classList.add('checked');
    } else if(isUpperCase === false && requirementEl.classList.contains('checked')){
        requirementEl.classList.remove('checked');
    }

}