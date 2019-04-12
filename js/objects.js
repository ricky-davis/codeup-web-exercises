(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {
        "firstName":"Rick",
        "lastName":"Sanchez"
    };
    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function(){
        return "Hello from "+this.firstName+" "+this.lastName;
    };
    console.log(person.sayHello());
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    function needToPay(customer){
        if(customer.amount > 200){
            customer.afterDiscount=customer.amount*.88;
            console.log(customer.name + " will get a 12% discount. From "+customer.amount + " to $" + customer.afterDiscount);
        }else{
            console.log(customer.name + " will not get a discount, and will have to pay full price at $"+customer.amount);

        }
    }
    shoppers.forEach(function(shopper){
       needToPay(shopper);
    });
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    // var books=[
    //     {"title":"The Salmon of Doubt","author":{"firstName":"Douglas","lastName":"Adams"}},
    //     {"title":"Ender's Game","author":{"firstName":"Orson","lastName":"Card"}},
    //     {"title":"Ender's Shadow","author":{"firstName":"Orson","lastName":"Card"}},
    //     {"title":"Speaker For The Dead","author":{"firstName":"Orson","lastName":"Card"}},
    //     {"title":"The Martian","author":{"firstName":"Andy","lastName":"Weir"}}
    //     ];

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    var books=[];
    books.push(createBook("The Salmon of Doubt","Douglas Adams"));
    books.push(createBook("Ender's Game","Orson Card"));
    books.push(createBook("Ender's Shadow","Orson Card"));
    books.push(createBook("Speaker For The Dead","Orson Card"));
    books.push(createBook("The Martian","Andy Weir"));

    books.forEach(function(book){
        console.log("Book #"+(books.indexOf(book)+1));
        console.log("Title: " + book.title);
        // console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        console.log("Author: " + Object.values(book.author).join(" "));
    });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    function createBook(title,authorName){
        var an =authorName.split(" ");
        return {"title":title,"author":{"firstName":an[0],"lastName":an[1]}}
    }

})();
