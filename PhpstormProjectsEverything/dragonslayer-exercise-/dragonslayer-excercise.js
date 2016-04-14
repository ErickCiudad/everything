/**
 * Created by session2 on 9/28/15.
 */

function start() { //This starts the whole game up
var slaying = true;
var youHit = Math.floor(Math.random() * 3);
var damageThisRound = Math.floor(Math.random() * 4 + 1);
var totalDamage = 0;


    while (slaying) {
        if (youHit) {
            console.log("You hit the dragon and did " + damageThisRound + " damage!");
            totalDamage += damageThisRound;

            if (totalDamage >= 4) {
                console.log("You did it! You slew the dragon!");
                console.log("You won, and move on to a new dragon");
                var answer = prompt("Want to play again? (Yes) or (No)");
                switch (answer) {
                    case 'Yes':
                    console.log("Let's play again");
                        start();
                        break;
                    default:
                    console.log("Alright Then")
                }
                    slaying = false;}
             else {
                youHit = Math.floor(Math.random() * 2);
                   }
        } else {
            console.log("The dragon incinerates you! You're toast.");//burninates is a gross word
            slaying = false;
            var answer = prompt("Want to play again? (Yes) or (No)");
            switch (answer) {
                case 'Yes':
                    console.log("Let's play again");
                    start();
                    break;
                default:
                    console.log("Alright Then")
            }
        }
    }
}//whole game
start();//This calls the function to begin the game

/*function checkColors() {
    var colors = prompt("What is your favorite color, Red, Blue or Green?");
    switch (colors) {
        case 'Green':
            console.log("Leaves are green");
            break;
        case 'Blue':
            console.log("The oceans blue");
            break;
        case 'Red':
            console.log("Mars is red");
            break;
        default:
            confirm("Please enter a valid color");
            (checkColors());
    }
}
checkColors();
///////////////////////////
 function start() { //This starts the whole game up
 var slaying = true;
 var youHit = Math.floor(Math.random() * 3);
 var damageThisRound = Math.floor(Math.random() * 4 + 1);
 var totalDamage = 0;


 while (slaying) {
 if (youHit) {
 console.log("You hit the dragon and did " + damageThisRound + " damage!");
 totalDamage += damageThisRound;

 if (totalDamage >= 4) {
 console.log("You did it! You slew the dragon!");
 console.log("You won, and move on to a new dragon");
 var answer = prompt("Want to play again? (Yes) or (No)");
 if (answer = "Yes") {
 console.log("Let's go");
 start();
 }
 else {console.log("Alright then");
 slaying = false;}
 } else {
 youHit = Math.floor(Math.random() * 2);
 }
 } else {
 console.log("The dragon incinerates you! You're toast.");//burninates is a gross word
 slaying = false;
 }
 }
 }//whole game