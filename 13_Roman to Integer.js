var romanToInt = function(s) {
    const romanValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    
    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        const current = romanValues[s[i]];
        const next = romanValues[s[i+1]];
        
        if (next && current < next) {
            result += next - current;
            i++;
        } else {
            result += current;
        }
    }
    
    return result;
};


console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));