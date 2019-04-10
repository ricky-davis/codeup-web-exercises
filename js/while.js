
"use strict";
var i=1;
while(i<65536){
    console.log(i*=2)
}

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
console.log("I have " + allCones + " cones to sell.");

do{
    // Generate the amount of cones being bought
    var boughtCones = Math.floor(Math.random() * 5) + 1;

    // Check if you have enough cones left to make the transaction
    if (allCones-boughtCones<0){
        console.log("Cannot sell you "+boughtCones+" cones I only have "+allCones);
        continue;
    }
    // If so, continue with the transaction.
    allCones-=boughtCones;
    console.log(boughtCones+" cones sold... " + allCones + " left");
}while(allCones>0);
console.log("Yay! I sold them all!");
