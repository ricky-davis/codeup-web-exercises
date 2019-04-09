"use strict";
var num;
do {
    num = prompt("Pick an odd number between 1 and 50: ");
}while(num <1 || num > 50 || num%2===0);

for(var i=1;i<50;i+=2){
    console.log(i==num?"Yikes! Skipping number :"+i:"Here is an odd number: "+i);
}
