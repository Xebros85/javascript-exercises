const fibonacci = function(num) {
    const num1 = Math.floor(num)    
    if (num1 < 0) return 'OOPS';
    if (num1 === 0) return 0;
    
    let a = 0;
    let b = 1;
    
    for (let i = 1; i < num1; i++) {
        let temp = b;

        b = a + b;
        a = temp;
    }
    return b;

};

// Do not edit below this line
module.exports = fibonacci;
