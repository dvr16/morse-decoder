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
  let symbols = [];
  for (let i = 0; i < expr.length; i += 10) {
    symbols.push(expr.slice(i, i + 10));
  }
  
  for (let i = 0; i < symbols.length; i++) {
    let dotsAndDashes = [];
    
    if (symbols[i] === '**********') {
      dotsAndDashes.push(' ');;
    }
    
    for (let j = 0; j < symbols[i].length; j += 2) {
      if (symbols[i].slice(j, j + 2) === '10') {
        dotsAndDashes.push('.');
      } else if (symbols[i].slice(j, j + 2) === '11') {
        dotsAndDashes.push('-');
      }
    }
    
    symbols[i] = dotsAndDashes.join('');
  }
  
  for (let key in MORSE_TABLE) {
    for (let i = 0; i < symbols.length; i++) {
      if (key === symbols[i]) {
        symbols[i] = MORSE_TABLE[key];
      }
    }
  }
  
  return symbols.join('');
}

module.exports = {
    decode
}