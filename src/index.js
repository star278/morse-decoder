const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    var step = 10,
        stepMorse = 2,
        obj = {
            '10':'.',
            '11':'-',
            '**':' ',
            '00':''
        },
    codeMorse = parseCode(expr, step).map(
        function(item) {
            return parseCode(item, stepMorse).
            map(
                function(item) {
                    return obj[item];
                }
            ).join('');
        }
    );

    return codeMorse.map(
        function(item) {
            if (item === '     ') return ' ';
            return MORSE_TABLE[item];
        }
    ).join('');
}

function parseCode(str, step) {
    var result = [],
        index = 0;
    while (index < str.length) {
        result.push(str.slice(index, index += step));
    }
    return result;
}

module.exports = {
    decode
}