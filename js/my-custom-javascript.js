"use strict";

$(document).ready(function() {

    var h1 = $('h1');
    var li = $('li');
    var p =  $('p');
    var selectors = $('h1, p, li');
    li.css('font-size', '20px');
    alert(selectors.text());
});