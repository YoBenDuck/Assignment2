//STEP1
/*
var name = prompt("Please enter your name.");
window.alert(name.length);
*/

//STEP2
/*
var name = prompt("Please enter your name.");
var number = prompt("Please enter a number.")
window.alert(name.charAt(number));
*/

//STEP3 
/*
var firstName = prompt("Please enter your firstname."), 
    lastName = prompt("Please enter your lastname.");

window.alert("Your name is " + firstName + " " + lastName);
*/

//STEP4
/*
var text = "The quick brown fox jumps over the lazy dog";
var index = text.indexOf('fox');
window.alert(index);
*/

//STEP5
/*
window.alert("The quick brown fox jumps over the lazy fox".lastIndexOf('fox'));
*/

//STEP6
/*
var text = "The quick brown fox jumps over the lazy dog";
var name = prompt("Please enter your full name.");
alert(text.replace("dog", name));
*/

//STEP7
/*
var text = "The quick brown fox jumps over the lazy dog";
var word = prompt("Please enter a word from the following text: \nThe quick brown fox jumps over the lazy dog");
alert(text.search(word));
*/

//STEP8
/*
var old_string = "The quick brown fox jumps over the lazy dog";
var new_string = old_string.slice(old_string.indexOf("the lazy dog"),old_string.length);
alert(new_string.toLocaleUpperCase());
*/

//STEP9
/*
var text = "     THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG    ";
alert(text.trim().toLocaleLowerCase());
*/

//STEP10

/*
var text = "the quick brown fox jumps over the lazy dog";
var firstChar = text.charAt(0);
var cap = firstChar.toLocaleUpperCase();
alert(text.replace(firstChar,cap));
*/












