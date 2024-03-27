"use strict";
//storing a person name in a variable
let personName = "faiza farooq";
//printing a person name in  lowercase
console.log("lowercase:", personName.tolowerCase());
//printing a person name in uppercase
console.log("uppercase:", personName.toUpperCase());
//printing person name in titlecase
let person_Name = "i am learning typescript";
//1st step 01 
let word = personName.split(" ");
//step 02
let titleCaseName = "";
//step 03
//for loop 1-10
for (let i = 0; i < word.length; i++) {
    titleCaseName = +word[i].chartAt(0).toUpperCase;
}
