const passwdInputEl = document.getElementById('password-input');
const specialChars = ["'",'`',"!","@","#","$","%","^","&","*","(",")","_","+","-","=","[","]","{","}",";","\"",":","|",".","<",">","\\","/","?","~"];

passwdInputEl.addEventListener('selectionchange', () => {
    // console.log(passwdInputEl.value)
    checkStringLength(passwdInputEl.value, 9, document.querySelector('.requirements > .no_char'));
    checkIfUpperCase(passwdInputEl.value, document.querySelector('.requirements > .uppercase'));
    checkIfNumber(passwdInputEl.value, document.querySelector('.requirements > .number'));
    checkIfSymbol(passwdInputEl.value, document.querySelector('.requirements > .special'));
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
function checkIfUpperCase(value, requirementEl){
    value = value.trim();
    let char;
    let isUpperCase = false;
    for(let i= 0; i < value.length; i++){
        char = value.charAt(i);
        if (char === char.toUpperCase() && !Number.isInteger(Number.parseInt(char, 10)) && !specialChars.includes(char)){
            isUpperCase = true;
        }
    }

    if(isUpperCase === true && !requirementEl.classList.contains('checked')){
        requirementEl.classList.add('checked');
    } else if(isUpperCase === false && requirementEl.classList.contains('checked')){
        requirementEl.classList.remove('checked');
    }

}

// --> function to check if a character is a number
/**
 * 
 * @param {*} value  the input value whose characters needs to be checked
 * @param {*} requirementEl the element that show the requirement to meet
 */
function checkIfNumber(value, requirementEl){
    value = value.trim();
    let char;
    let isNumber = false;
    for(let i= 0; i < value.length; i++){
        char = value.charAt(i);
        if (Number.isInteger(Number.parseInt(char, 10))){
            isNumber = true;
        }
    }

    if(isNumber === true && !requirementEl.classList.contains('checked')){
        requirementEl.classList.add('checked');
    } else if(isNumber === false && requirementEl.classList.contains('checked')){
        requirementEl.classList.remove('checked');
    }

}

// --> function to check if a character is a special character
/**
 * 
 * @param {*} value  the input value whose characters needs to be checked
 * @param {*} requirementEl the element that show the requirement to meet
 */
function checkIfSymbol(value, requirementEl){
    value = value.trim();
    let char;
    let isSymbol = false;
    for(let i= 0; i < value.length; i++){
        char = value.charAt(i);
        if (specialChars.includes(char)){
            isSymbol = true;
        }
    }

    if(isSymbol === true && !requirementEl.classList.contains('checked')){
        requirementEl.classList.add('checked');
    } else if(isSymbol === false && requirementEl.classList.contains('checked')){
        requirementEl.classList.remove('checked');
    }

}