//ASSIGNMENT2 PART1 - Math and Math Functions 

//STEP1
/*
var number = prompt("Pick a number?");
console.log(Math.abs(number));
*/

//STEP2
/*
var number = .60;
console.log(Math.ceil(number));
*/

//STEP3
/*
var number = .60;
console.log(Math.floor(number));
*/

//STEP4
/*
var numbers = prompt("Enter five numbers separated by commas. Example: 1,2,3,4,5");
numbers = numbers.match(/\d+/g);
console.log(Math.min(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4]));
console.log(Math.max(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4]));
*/

//STEP5
/*
var number = prompt("Enter a number?");
console.log(Math.sqrt(number));
*/

//ASSIGNMENT2 PART2 - Date and Date Functions

//STEP6
/*
var d = new Date();
console.log(d.getDate());
*/

//STEP7
/*
var getDaysInMonth = function(month,year) {
 return new Date(year, month, 0).getDate();
}
console.log(getDaysInMonth(1, 2012));
*/

//STEP8

/*
var months = new Array(12);

months[0] = "January";
months[1] = "February";
months[2] = "March";
months[3] = "April";
months[4] = "May";
months[5] = "June";
months[6] = "July";
months[7] = "August";
months[8] = "September";
months[9] = "October";
months[10] = "November";
months[11] = "December";

var current_date = new Date();
month_value = current_date.getMonth();

console.log("The current month is " + months[month_value]);
*/

//STEP9

/*
var d = new Date();
var n = d.getDay();
 if( n == 6 || n == 0){
console.log("Its weekend!!");}
else {
console.log("Its not weekend");}
*/

//STEP10
/*
var d = new Date();
var n = d.getDay();
if (n==0){n=6;}
else {n-=1;}
switch (n)
    {case 0: n="Sunday"; break;
    case 1: n="Monday"; break;
    case 2: n="Tuesday"; break;
    case 3: n="Wednesday"; break;
    case 4: n="Thursday"; break;
    case 5: n="Friday"; break;
    case 6: n="Saturday"; break;
    }
console.log(n);
*/

//STEP11

/*
var d = new Date();
var n = d.getDay();

switch (n)
    {case 0: n="Sunday"; break;
    case 1: n="Monday"; break;
    case 2: n="Tuesday"; break;
    case 3: n="Wednesday"; break;
    case 4: n="Thursday"; break;
    case 5: n="Friday"; break;
    case 6: n="Saturday"; break;
    }
console.log(n.charAt(0));
*/

//PART3 - Conditional Logic and Looping Operations 
//STEP12
/*
var integer1 = prompt("Enter a number");
var integer2 = prompt("Enter a number");
if (integer1 > integer2) {
    console.log(integer1);
}
else {console.log(integer2);
     }
*/

//STEP13
/*
var students = [];
students[0] = "Ursula";
students[1] = "Paul";
students[2] = "Henry";
students[3] = "Tabitha";
students[4] = "Lucy";

var marks = [];
marks[0] = 80;
marks[1] = 77;
marks[2] = 88;
marks[3] = 95;
marks[4] = 68;

// loop thru indexes
for (var i = 0; i < 5; i+=1){

  // get grade from mark
    // if > 100 then A
    if (marks[i] <60) {
        console.log(students[i] + " F");
    }
    else if (marks[i] <70) {
        console.log(students[i] + " D")
     }
    else if (marks[i] <80) {
        console.log(students[i] + " C")
    }
    else if (marks[i] <90) {
        console.log(students[i] + " B")
    }
    else {
        console.log(students[i] + " A")
    }
  // log name , Grade
}
*/

//STEP14

/*
for (var i = 1; i < 16; i+=1) {
    if (i%2 == 0)
        {
            console.log (i+ " is even"); 
        }
    else { console.log(i+ " is odd");}
}
*/

//STEP15
/*
for (var i = 1; i < 100; i+=1) {
    if ((i%3 == 0) && (i%5 == 0)){
        console.log(i+ " FizzBuzz");
    }
    else if (i%3 == 0) {
        console.log (i+ " Fizz"); 
    }
    else if (i%5 == 0) { 
        console.log(i+ " Buzz");
    }     
}
*/

//PART4 - The “Hitchhiker’s Guide to the Galaxy” Game 
/*
var start = confirm('Greetings! Are you ready to play The Hitchkiker\'s Guide to the Galaxy');

if (start == true) {
	alert('Awesome, our hero is waiting!');
} else {
	alert('Too bad, we\’re going to play anyway because our hero desperately needs your help!');
}

alert('You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…');
var direction = prompt('Which direction would you like to head (please enter forward, left, or right).');

switch (direction.toLowerCase()) {
	case 'forward' :
		alert('You walk about 100 yards and safely make your way out of the cave.');
		break;
	case 'left' :
		alert('Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.');
		break;
	case 'right' :
		alert('You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.');
		break;
	default :
		alert('The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.');
}

var rating = prompt('Please rate this game on a scale of 1 to 10');
if (rating < 1 || rating > 10 ) {
	rating = 10;
}  
if (rating <= 5) {
	alert('Whatever, you weren’t very good at this game anyway...Schmuck!');
} else {
	alert
('Thank you, we will continue to make improvements to the game!');
}

console.log(rating);
*/

//ASSIGNMENT2 PART5 - The “Coin Flip” Game 
//*** Ben's COIN FLIP GAME STEPS 1 thru 8***
//coinflip <= 1 Heads
//coinflip > 0 Tails

/*
var coinflip = Math.round(Math.random());
var choice = window.prompt("Heads or Tails?");
choice = choice.toLowerCase();
window.console.log(coinflip);
window.console.log(choice);
var result = "";

if (choice === "heads") {
    if (coinflip <= 1) {
        result = "The flip was heads and you chose heads...you win!";
    } else {
        result = "The flip was tails but you chose heads...you lose!";
    }
} else if (choice === "tails") {
    if (coinflip > 0) {
        result = "The flip was tails and you chose tails...you win!";
    } else {
        result = "The flip was heads but you chose tails...you lose!";
    }
} else { //CATCH-ALL ALERT
    result = "Enter Heads or Tails you SCHMUCK! [=";
}

window.alert(result);
*/

//PART6 - The “Coin Flip” Game Redux 
/*
var coinflip;
for (var i = 1; i < 10; i+=1) {
	coinflip = Math.round(Math.random());
    if (coinflip === 0){console.log("Heads");
                       }
    else {console.log("Tails");}
}
*/

//PART7 - The “Coin Flip Streak” 
/*
var coinflip;
var i =0;
do {
    coinflip = Math.round(Math.random());
    if (coinflip === 0){console.log("Heads");
     }else {console.log("Tails");}
    i+=1;
}
while (i < 10);
*/

//PART8 – Looping a Triangle 

/*
var hashtag = true;

for (var i = 1; i < 8; i+=1) {
   if (hashtag === true)
   {
       hashtag = "#";
   }
    else {
    hashtag = hashtag + "#";
     
}console.log(hashtag);}
*/

//PART9 – Odd or Even? 

/*
for (var i = 1; i < 16; i+=1) {
    if (i%2 == 0)
        {
            console.log (i+ " is even"); 
        }
    else { console.log(i+ " is odd");}
}
*/








