/**
 * Write a loop that makes seven calls to console.log to output the following
 triangle:
 */

var str = '';

for(var i = 0; i < 7; i += 1){
    str += '#';
    console.log(str);
}

for(var i = 0; i < 7; i += 1){
    console.log(Array(i + 2).join('#'));
}



