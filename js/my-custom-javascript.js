"use strict";

$(document).ready(function() {
    $('h1').click(
        function() {
            $(this).css('background-color', '#FF0');
        }
    );
    $('p').dblclick(
        function() {
            $(this).css('font-size', '18px');
        }
    );
    $('li').hover(
        function() {
            $(this).css('color', 'red');
        },
        function() {
            $(this).css('color', 'black');
        }
    );
});