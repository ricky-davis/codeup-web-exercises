
"use strict";
function showMultiplicationTable(inputNum){
    for(var i=1;i<=10;i++){
        console.log(inputNum + " x " + i + " = " +(inputNum*i))
    }
}
showMultiplicationTable(7);

for(var i=0;i<10;i++) {
    var randNum = Math.floor(Math.random() * 50) + 50;
    console.log(randNum + " is " + (randNum%2?"odd":"even"));
}

for(var i=1;i<10;i++){
    console.log(String(i).repeat(i));
}
for(var i=100;i>0;i-=5){
    console.log(i);
}