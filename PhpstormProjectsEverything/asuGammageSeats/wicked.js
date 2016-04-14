/**
 * Created by session2 on 9/29/15.
 */
number = 3000;
function isEven(){
    if (number % 2 === 0) {
        return("It's even")
    }
    else {
        return("It's odd")
    }
}

isEven(number);
/////////////////////////
function howManyCouples(){
    return(number / 2)
}
howManyCouples();
/////////////////////////
var seats = [18, 84, 38, 38];
console.log(seats);
//////////////////////////
function checkColors() {
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
