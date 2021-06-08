// 1.
"use strict";
//2.
var skaicius1 = 1;
var skaicius2 = 2;
var skaicius3 = 3;
var skaicius4 = 4;
//3.
console.log(skaicius1, skaicius2, skaicius3, skaicius4);
console.log(skaicius1+skaicius2+skaicius3+skaicius4);
console.log(skaicius1*skaicius2*skaicius3*skaicius4);
//4.
var temp = skaicius1;
skaicius1 = skaicius2;
skaicius2 = temp;

console.log(skaicius1, skaicius2);

//5 Sukeisti skaicius3 ir skaicius4 reikšmes vietomis be laikinojo kintamojo.
skaicius3 += skaicius4;  //7
skaicius4 = skaicius3 - skaicius4;  // 3
skaicius3 -= skaicius4; // 4

//6
alert('Skaicius1 = ' + skaicius1 + '; Skaicius2 = ' + skaicius2 + '; Skaicius3 = ' + skaicius3  + '; Skaicius4 = ' + skaicius4 + ';')

//7
var maxSkaicius = Number.MAX_VALUE;
console.log(maxSkaicius);

