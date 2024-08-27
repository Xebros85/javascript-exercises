const palindromes = function (prompt) {
    let newPrompt = prompt.toLowerCase().replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
    const len = newPrompt.length;

    for (let i = 0; i < len / 2; i++) {
        if (newPrompt[i] !== newPrompt[len - 1 - i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
