
"use strict";
var i=1;
while(i<65536){
    console.log(i*=2)
}

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
console.log("I have " + allCones + " cones to sell.");
// This expression will generate a random number between 1 and 5
var sold;
do{
    sold = Math.floor(Math.random() * 5) + 1;
    if (allCones-sold<0){console.log("Cannot sell you "+sold+" cones I only have "+allCones);continue}
    allCones-=sold;
    console.log(sold+" cones sold... " + allCones + " left");
}while(allCones>0);
console.log("Yay! I sold them all!");
