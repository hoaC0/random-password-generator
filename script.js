function generatePassword(length, addLowercase, addUppercase, addNumbers, addSymbols) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+';

    let allowedChars = '';
    let password = '';

    allowedChars += addLowercase ? lowercase : '';
    allowedChars += addUppercase ? uppercase : '';
    allowedChars += addNumbers ? numbers : '';
    allowedChars += addSymbols ? symbols : '';

    if (length <= 0) {
        return '(Password length must be greater than 0)';
    }
    if (allowedChars.length === 0) {
        return '(No characters selected)';
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const pwLength = 15;
const addLowercase = true;
const addUppercase = true;
const addNumbers = true;
const addSymbols = true;

const password = generatePassword(pwLength, 
                                  addLowercase, 
                                  addUppercase, 
                                  addNumbers, 
                                  addSymbols);

console.log("Generated password:" + ` ${password}`);

