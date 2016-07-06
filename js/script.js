'use strict';


/* JavaScript will go here */

console.log("Hello world!"); //System.out.println


var message = "Hello World!";

message = "haha";

console.log(message);

//Make a new string variable for the value "The iSchool is my school"
var school = "The iSchool is my school";


//Log out the string
console.log(school);

//Convert the string to upper case, replacing the previous string
//Log out the changed variable
school = school.toUpperCase();
console.log(school);


//Use the substring method to extract chars 2 through 10 (inclusive) 
//into a new variable, and log that variable
var sub = school.substring(2, 11);
console.log(sub);


//Use the indexOf method to see if the word "cool" is in your string
var index = school.indexOf("cool");
console.log(index >= 0);


//Declare a new variable `rect` that represents a rectangle
//This should be an Object with properties:
//  x-coordinate of 30, y-coordinate of 50
//  width of 100, height of 50
var rect = {
    x:30, y:50, width:100, height:50
};

//Log out the rectangle's starting position (as "30, 50")
console.log(rect.x + ", " + rect.y);

//Log out the rectangle's area
console.log(rect.width * rect.height);

//"Move" the rectangle to the right by 20 and up by 10
//by changing its properties
rect.x = rect.x + 20;
rect.y = rect.y - 10;

//Log out the rectangle's new position
console.log(rect.x + ", " + rect.y);
console.log(rect);

//Declare a variable `circle` that represents a circle
//This should be an Object with properties:
//  center-x-coord of 50, center-y-coord of 50
//  radius of 35
var circle = {centerX:50, centerY:50, r:35};

//Declare a variable `shapes` that represents a list of shapes
//The list should contain the rectangle and the circle
var shapes = [rect, circle];
console.log(shapes);

//Implement a function `getArea()` that takes as a 
//parameter an object representing a circle (like 
//from the last exercise) and returns the area of 
//that circle. 
//  Area calculated as is π*(radius^2)
function getArea(cir) {
    return cir.r * cir.r * Math.PI
};

console.log(getArea(circle));

//HINTS: 
// 1. Pi is defined in the Math class
// 2. ^ is not an exponential operator!

//The area of your circle should be 3848.451

var numbers = [2,0,6,6,8,5,1,6,2,2];

//Use a forEach loop to sum up the numbers 
//in the array. Log out this sum.

var sum = 0;
var sumUp = function(nums) {
    sum += nums;
}
numbers.forEach(sumUp);
console.log(sum);


//Use a forEach loop to find the biggest 
//number in the array. Log out this number.

var big = numbers[0];
var biggest = function(nums) {
    if (big < nums) {
        big = nums;
    }
}

numbers.forEach(biggest);
console.log(big);

var max = numbers[0];
numbers.forEach(
    function(nums) {
        if (nums > max) {
            max = nums;
        }
    }
);
console.log(max);

