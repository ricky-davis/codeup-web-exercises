"use strict";

console.log("Hello from external JavaScript");
alert("Welcome to my Website!");
var favcolor = prompt("What is your favorite color?");

alert("Great, " + favcolor.trim().toLowerCase() + " is my favorite color too!")

// You have rented some movies for your kids: The little mermaid (for 3 days),
// Brother Bear (for 5 days, they love it),
// and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?
var littleMermaid=parseInt(prompt("How many days did you want to keep The Little Mermaid?")),
    brotherBear=parseInt(prompt("How many days did you want to keep Brother Bear?")),
    hercules=parseInt(prompt("How many days did you want to keep Hercules?"));
var pricePerDay=3;

var totalPrice = (littleMermaid+brotherBear+hercules)*pricePerDay
alert("You will have to pay $" + totalPrice + " to rent the movies")


// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
// they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
// How much will you receive in payment for this week? You worked 10 hours for Facebook,
// 6 hours for Google and 4 hours for Amazon.
var google=400,
    amazon=380,
    facebook=350;

var gHours=parseInt(prompt("How many hours did you work at Google?")),
    aHours=parseInt(prompt("How many hours did you work at Amazon?")),
    fbHours=parseInt(prompt("How many hours did you work at Facebook?"));

var paycheck = (google*gHours)+(amazon*aHours) + (facebook*fbHours)
alert("Your paycheck will be $" + paycheck + "!")


//A student can be enrolled to a class only if the class is not full and
// the class schedule does not conflict with her current schedule.
// if ((cClass.students.length < cClass.maxEnrolled) && (student.classSchedule.indexOf(cClass.startTime) == -1)){
//     cClass.enroll(student);
// }
var classSize = confirm("Is the class currently full?");
var classSchedule = confirm("Does the class conflict with current Schedule?");
var enrollmentStatus = !classSize && !classSchedule;
alert("Student enrollment status:" + enrollmentStatus);


// A product offer can be applied only if a person buys more than 2 items,
// and the offer has not expired. Premium members do not need to buy a specific amount of products.
// if ((customer.boughtItems.length > 2 && !customer.isPremium) && (offer.expiryDate > new Date().toLocaleString())){
//     offer.applyTo(customer.boughtItems)
// }
var numberOfItems = prompt("How many items did you buy?");
var offerExpiration = confirm("Is the offer valid?");
var membership = confirm("Are you a premium member?");

var couponStatus = (membership || Number(numberOfItems) > 2) && offerExpiration;

alert("Can customer use this offer? " + couponStatus);


var username = 'codeup';
var password = 'notastrongpassword';

var pwLengthAcceptable = password.length >= 5;
var pwNotIncludesUsername = Boolean(password.indexOf(username));
var unLengthAcceptable = username.length <= 20;
var noWhiteSpace = !((username.startsWith(' ') || username.endsWith(' ')) || (password.startsWith(' ') || password.endsWith(' ')));

if (pwLengthAcceptable && pwNotIncludesUsername && unLengthAcceptable && noWhiteSpace) {
    alert("Your Username and Password are good!")
}