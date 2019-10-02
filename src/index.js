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
    var a = expr;
    var b = [];
    var c = [];
    var e = [];
    var f = [];
    var z = [];
    var pre = [];
    var final = [];
    var message=[];
    for (var i = 0; i < a.length; i += 10) {
        b.push(a.substring(i, i + 10));
    }
    for (var i = 0; i < b.length;i++){
        c.push(b[i].split(''));
    }
    for(var j = 0; j < c.length; j++){
        for (var i = 0; i < 10; i++){
            if (c[j][0] == '0') {
                c[j].splice(0,1);
            }
        }
    }
    for(let j = 0; j < c.length; j++){
        for (let i = 0; i < c[j].length; i++){
            e += c[j][i];
        }
        f[j] = e;
        var e = [];
    }
    for(var j = 0; j < f.length; j++){
        for (var i = 0; i < f[j].length; i+=2){
            z.push(f[j].substring(i,i+2))
        }
        pre[j] = z;
        z= [];
    }
    for(var j = 0; j < pre.length; j++){
        for (var i = 0;  i < pre[j].length; i++){
            if (pre[j][i] == 10){
                pre[j][i] = ".";
            } else if  (pre[j][i] == 11){
                pre[j][i] = "-";
            } else {
                pre[j] = " ";
            }
        }
    }
    var b = [];
    var c = [];
    for (let j = 0; j < pre.length; j++){
        for (let i = 0; i < pre[j].length; i++){
            b += pre[j][i];
        }
        final[j] = b;
        var b = [];
    }

    console.log(final);
    for (let i = 0; i < final.length; i++){
        if (final[i] == ' ') {
            message += final[i];
        } else {
            message += (MORSE_TABLE[final[i]]);
        }
    }
    console.log(message)
    return message;
}

module.exports = {
    decode
}