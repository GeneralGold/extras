function convertToCalculan() {
    const inputText = document.getElementById('inputText').value;
    const words = inputText.split(/\s+/); // Split input into words by spaces
    const calculanWords = words.map(word => {
        return word.split('').map(char => {
            if (/[a-zA-Z]/.test(char)) {
                let code = char.toUpperCase().charCodeAt(0) - 64; // A=1, Z=26
                return code.toString().padStart(2, '0');
            } else if (/[0-9]/.test(char)) {
                // Convert digits to their Calculan letter equivalent
                return { '1': 'A', '2': 'B', '3': 'C', '4': 'D', '5': 'E',
                         '6': 'F', '7': 'x', '8': 'y', '9': 'M', '0': 'e' }[char];
            } else if (char === ':') {
                return ':';
            } else if (char === '"') {
                return '²';
            } else if (char === ',') {
                return ',';
            } else if (char === '(' || char === ')') {
                return char;
            } else if (char === '!') {
                return '!';
            } else if (char === '?') {
                return '⁴';
            } else if (char === '%') {
                return '%';
            } else if (char === '€') {
                return 'π';
            } else if (char === '=') {
                return '051721011219.'; // "EQUALS"
            } else if (char === '+') {
                return '16122119.'; // "PLUS"
            } else if (char === '-') {
                return '1309142119.'; // "MINUS"
            } else if (char === '/') {
                return '1912011908.'; // "SLASH"
            } else {
                // Remove unrecognized symbols
                return '';
            }
        }).join('') + '.'; // Add a period after each word
    });

    const calculanText = calculanWords.join('');
    document.getElementById('outputText').value = calculanText;
}

function convertToNormal() {
    const inputText = document.getElementById('inputText').value;
    const tokens = inputText.split('.').filter(Boolean); // Split by `.` and remove empty parts
    let normalText = '';

    tokens.forEach(token => {
        if (/^\d+$/.test(token)) {
            // Convert number sequences (01, 02, ..., 26) to letters
            for (let i = 0; i < token.length; i += 2) {
                let num = token.substring(i, i + 2);
                normalText += String.fromCharCode(parseInt(num) + 64); // Convert 01-26 to A-Z
            }
        } else if (/[A-FaxyMe]+/.test(token)) {
            // Convert Calculan digits back to numbers
            const digitMap = { A: '1', B: '2', C: '3', D: '4', E: '5', F: '6', x: '7', y: '8', M: '9', e: '0' };
            token.split('').forEach(char => {
                normalText += digitMap[char];
            });
        } else {
            // Process non-letter symbols directly
            switch (token) {
                case '051721011219':
                    normalText += '=';
                    break;
                case '16122119':
                    normalText += '+';
                    break;
                case '1309142119':
                    normalText += '-';
                    break;
                case '1912011908':
                    normalText += '/';
                    break;
                case '⁴':
                    normalText += '?';
                    break;
                case '²':
                    normalText += '"';
                    break;
                case 'π':
                    normalText += '€';
                    break;
                case '%':
                    normalText += '%';
                    break;
                case '!':
                    normalText += '!';
                    break;
                case ':':
                    normalText += ':';
                    break;
                case ',':
                    normalText += ',';
                    break;
                default:
                    normalText += ''; // Remove unrecognized parts
            }
        }
    });

    document.getElementById('outputText').value = normalText;
}

function copyToClipboard() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Output copied to clipboard!');
}
