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
        let arr = [];
    let arr2 = [];
    let gr = [];
    let morz = [];
    for(let i = 0; i < expr.length; i += 10){
        let someUsers = expr.slice(i, i+10)
        
        arr.push(someUsers);
        
        
    }

    let sdf = arr.join('; ')
    arr2.push(sdf)
    
    for(let g = 0; g < arr2.length; g++){
       
        for(let a = 0; a < arr2[g].length; a +=2 )
       
        gr.push(arr2[g][a]+arr2[g][a+1])
        
    }
    for(let number of gr )
    if(number.includes(10)){
        morz.push('.')
    }else if(number.includes(11)){
        morz.push('-')
    }else if(number.includes('*')){
        morz.push('')
    }else if(number.includes('; ')){
        morz.push('; ')
    }
    let m = morz.join()
    let du = m.replace(/(,*)(;*)/g, '');
    let v = du.split(" ")
    
    for(let d = 0; d < v.length; d++){
       
           let ind = key.indexOf(v[d]);
       v[d] = value[ind];
       
    }
    for(let k = 0; k < v.length; k++){
      if(v[k] == undefined){
          v[k] = ' '
      }
    }
    return v.toString().replace(/(,*)/g, '')
}

module.exports = {
    decode
}
