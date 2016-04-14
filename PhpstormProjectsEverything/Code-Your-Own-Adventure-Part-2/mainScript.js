/**
 * Created by session2 on 11/30/15.
 */
/**
 * Created by Erick on 11/25/2015.
 */

/////////////////////////////////////////////
////////////////////////

////////////////////////
function gameStart () {
    document.getElementById('startButton').hidden = true;
    /*function greetMe(name) {
        var today = new Date();
        alert("Hello " + name + ", today is " + today.toDateString());
    }

    greetMe(prompt("What's your name"));*/
///////////////////////////////////

///////////////////////////////////////////
    function checkAge() {
        var age = prompt("Enter your age");
        if (age >= 16) {
            console.log("Eligible for play")
        }
        else if (age <= 12) {
            alert("Not old enough, The window will be closed");
            window.top.close();
        }
        else {
            confirm("Please enter in a number");
            checkAge();
        }
    }

    //checkAge();
    //alert("You awake in a large grass field. It's bright and hot, and there appears to be no one around You see a dirt road ahead To the left of the road, it runs through a forest To the right, it wanders up a hill");

    firstMessage();

        function choice1() {
            var answer = prompt("Where will you turn? (L)  (R)");
            ///USER GOES LEFT///
            if (answer === "L") {
                function forestLeft() {
                    confirm("You head left into the forest");
                    console.log("/////////////////////////");
                    console.log("You walk for a long while");
                    console.log("The trees stand tall all around you");
                    console.log("The winding path into the forest eventually splits into a fork");
                    console.log("It continues straight into a hallway of arched trees, deep and silent");
                    console.log("To the right it turns sharply downhill through a tangle of trees. You can hear running water this way");
                }
                forestLeft();
                function forest1() {
                    var answer = prompt("What will you do (S) (R)");
                    if (answer === "S") {
                        confirm("You head straight");
                        console.log("///////////////////");
                        console.log("The light gets visibly darker");
                        console.log("The smell of moss and damp grass fills the air");
                        console.log("You develop the feeling of being watched");
                        console.log("A large wolf is watching from a distance, it's eyes glowing in the dark shade");
                        ///USER GOES STRAIGHT FROM WOODS///
                        function darkForest() {
                            var answer = prompt("What will you do (Run) (Fight)");
                            if (answer === "Run") {
                                confirm("You turn and run, blind with adrenaline");
                                console.log("//////////////");
                                console.log("The wolf bolts after you, you can hear the powerful steps in the leaves behind you");
                                console.log("You see but a green blur tunneling towards you, as you race for your life");
                                console.log("Your foot catches a root, and you trip forward in a tumble");
                                console.log("For a moment you lay on the forest ground");
                                console.log("The wolf pounces on you");
                                confirm("GAME OVER");
                                restart();
                            }
                            else if (answer === "Fight") {
                                confirm("You fight the wolf");
                                console.log("//////////////");
                                console.log("Without thinking, you grab a large branch by your feet");
                                console.log("You swing with maximum force as the wolf jumps towards you");
                                console.log("A crack rings through the forest, the wolf has died");
                                victory1();
                                var item = prompt("There's a chest nearby. You go check it out, you find a Sword, Slingshot, and a Torch. Which one will you choose?");
                                switch (item) {
                                    case'Sword':
                                        alert("You have chosen a Sword.");
                                        item = "Sword";
                                        break;
                                    case"Slingshot":
                                        alert("You have chosen a Slingshot.");
                                        item = "Slingshot";
                                        break;
                                    case"Torch":
                                        alert("You have chosen a Torch.");
                                        item = "Torch";
                                        break;
                                    default:
                                        alert("Please choose one, Sword, Torch, or Slingshot.");
                                }
                            }
                            else {
                                confirm("Please enter in a valid answer");
                                darkForest();
                            }
                        }

                        darkForest();
                    }
                    else if (answer === "R") {
                        function roadRight() {
                            confirm("You turn right");
                            console.log("///////////////////");
                            console.log("You descend downhill through the thick wood");
                            console.log("The trees enclose all around you, until you are finally set free in a clearing");
                            console.log("Still under the shade, you come upon a babbling stream");
                            console.log("It runs wide and deep, and gives off an azure light in the deep woods");
                            console.log("You're suddenly aware of how thirsty you are");
                        }
                        roadRight();
                        function river1() {
                            var answer = prompt("Will you drink the water? (Yes) (No)");
                            if (answer === "Yes") {
                                confirm("You drink the water");
                                console.log("It tastes refreshing");
                                console.log("It cools you off");
                                console.log("The water was safe to drink");
                                victory1();
                                var item = prompt("There's a chest nearby. You go check it out, you find a Sword, Slingshot, and a Torch. Which one will you choose?");
                                switch (item) {
                                    case'Sword':
                                        alert("You have chosen a Sword.");
                                        item = "Sword";
                                        break;
                                    case"Slingshot":
                                        alert("You have chosen a Slingshot.");
                                        item = "Slingshot";
                                        break;
                                    case"Torch":
                                        alert("You have chosen a Torch.");
                                        item = "Torch";
                                        break;
                                    default:
                                        alert("Please choose one, Sword, Torch, or Slingshot.");
                                }
                            }
                            else if (answer === "No") {
                                confirm("You refused to");
                                console.log("You wander forward into the woods");
                                console.log("You become aimless, and exhausted");
                                console.log("You eventually collapse, and dehydrate in the woods");
                                confirm("GAME OVER");
                                restart();
                            }
                            else {
                                confirm("Please enter in a valid answer");
                                river1();
                            }
                        }

                        river1();
                    }
                    else {
                        confirm("Please enter in a valid answer");
                        forest1();
                    }
                }

                forest1();
            }
            ///USER GOES RIGHT///
            else if (answer === "R") {
                confirm("You head right, up the hill");
                console.log("///////////////////");
                console.log("The climb is steep");
                console.log("You finally arrive close to the top, nearly an hour later");
                console.log("You have a great view around you");
                console.log("Down the hill, the path continues on, straight forward off into the   distance. You can see smoke blowing this way");
                console.log("To your right, you see stone pillars of ruins laying off in the distance");

                function hill1() {
                    var answer = prompt("What will you do (S) (R)");
                    if (answer === "S") {
                        confirm("You head straight");
                        console.log("///////////////////");
                        console.log("The road your walking on becomes more prominent");
                        console.log("A stone wall abruptly arises to your side, about waist high, and cobbled ");
                        console.log("You get an uneasy feeling, and concentrate about the situation you are in");
                        console.log("You hear distant thudding in the dirt. It's horse gallops");
                        function road1() {
                            var answer = prompt("What will you do (Stay) (Hide)");
                            if (answer === "Stay") {
                                confirm("You wait on the road for the horseman approaching");
                                console.log("He get's closer and reaches for his waist");
                                console.log("He pulls out a sword and cuts you down");
                                confirm("GAME OVER");
                                restart();
                            }
                            else if (answer === "Hide") {
                                confirm("You duck behind the wall");
                                console.log("The rider gallops by");
                                console.log("You observe his back in the distance");
                                console.log("He was carrying a sword");
                                victory1();
                                var item = prompt("There's a chest nearby. You go check it out, you find a Sword, Slingshot, and a Torch. Which one will you choose?");
                                switch (item) {
                                    case'Sword':
                                        alert("You have chosen a Sword.");
                                        item = "Sword";
                                        break;
                                    case"Slingshot":
                                        alert("You have chosen a Slingshot.");
                                        item = "Slingshot";
                                        break;
                                    case"Torch":
                                        alert("You have chosen a Torch.");
                                        item = "Torch";
                                        break;
                                    default:
                                        alert("Please choose one, Sword, Torch, or Slingshot.");
                                }
                            }
                            else {
                                confirm("Please enter in a valid answer");
                                road1();
                            }
                        }

                        road1();
                    }
                    else if (answer === "R") {
                        confirm("You turn right");
                        console.log("////////////////////");
                        console.log("You wade your way down the hill and into chest high grass");
                        console.log("You continue forward in the heat, and press further closer to the megalithic rocks");
                        console.log("The stones mark a small entrance, with steps leading into a cave");
                        function cave1() {
                            var answer = prompt("What will you do (Go in) (Stay out)");
                            if (answer === "Go in") {
                                confirm("You enter");
                                console.log("You slowly descend your way into the cave");
                                console.log("The light begins to fade the deeper you delve");
                                console.log("Ahead, you see a distant red glow");
                                victory1();
                                var item = prompt("There's a chest nearby. You go check it out, you find a Sword, Slingshot, and a Torch. Which one will you choose?");
                                switch (item) {
                                    case'Sword':
                                        alert("You have chosen a Sword.");
                                        item = "Sword";
                                        break;
                                    case"Slingshot":
                                        alert("You have chosen a Slingshot.");
                                        item = "Slingshot";
                                        break;
                                    case"Torch":
                                        alert("You have chosen a Torch.");
                                        item = "Torch";
                                        break;
                                    default:
                                        alert("Please choose one, Sword, Torch, or Slingshot.");
                                }
                                glow();
                            }
                            else if (answer === "Stay out") {
                                confirm("You stay outside");
                                console.log("//////////////");
                                console.log("You don't will to go inside");
                                console.log("You instead walk outside back to the weeds");
                                console.log("You step on a viper and die instantly");
                                confirm("GAME OVER");
                                restart();
                            }
                            else {
                                confirm("Please enter in a valid answer");
                                cave1();
                            }
                        }

                        cave1();
                    }
                    else {
                        confirm("Please enter in a valid answer");
                        hill1();
                    }
                }

                hill1();
            }
            else {
                confirm("Please enter in a valid answer");
                choice1();
            }
        }

        /////

        choice1();
/////////////////////////////////////////////
    }

    function victory1() {
        confirm("You have survived a day in the wild, good job");
        console.log("///////////////////////////////");
        console.log("You collapse wearily onto the ground");
        console.log("You're stomach aches, you will need food soon");
        console.log("You need, to find help as well, you have no recollection of how you got here");
        console.log("You drift into a deep sleep");
    }


    function restart() {
        var answer = prompt("Would you like to play again? (Yes) (No)");
        switch (answer) {
            case 'Yes':
                console.log("////////////////////////////////////");
                console.log("Play Again");
                console.log("////////////////////////////////////");
                gameStart();
                break;
            case 'No':
                console.log("Alright then...");
                break;
            default:
                confirm("Enter in a valid answer");
                (restart());
        }
    }

function firstMessage() {
    page++;
    var para = document.createElement("p");
    var node = document.createTextNode("You awake in a large grass field. It's bright and hot, and there appears to be no one around You see a dirt road ahead. To the left of the road, it runs through a forest To the right, it wanders up a hill. Which way will you turn?");
    para.appendChild(node);
    var element = document.getElementById("textBox");
    element.appendChild(para);
    para.id = 'special';
    document.getElementById('special').fontcolor("white");
    ///////////////////////////////////////////////


}
/*function forestLeft() {
    confirm("You head left into the forest");
    console.log("/////////////////////////");
    console.log("You walk for a long while");
    console.log("The trees stand tall all around you");
    console.log("The winding path into the forest eventually splits into a fork");
    console.log("It continues straight into a hallway of arched trees, deep and silent");
    console.log("To the right it turns sharply downhill through a tangle of trees. You can hear running water this way");
}

function roadRight() {
    confirm("You turn right");
    console.log("///////////////////");
    console.log("You descend downhill through the thick wood");
    console.log("The trees enclose all around you, until you are finally set free in a clearing");
    console.log("Still under the shade, you come upon a babbling stream");
    console.log("It runs wide and deep, and gives off an azure light in the deep woods");
    console.log("You're suddenly aware of how thirsty you are");
} */
////////////////////////////////////////////////
        function glow() {
            var answer = prompt("You decide to move towards the glow, it's your only option. You come upon a gray brick room, with lit torches lining the walls. Straight ahead is a large iron door. In the center of the room is a spiral staircase leading downward, it is very dark down there. Will you go (straight) or (down)");
            switch (answer) {
                case'straight':
                    alert("You go straight");
                    break;
                case'down':
                    alert("You go down the stairs");
                    glowDown();
                    break;
                default:
                    alert("Please choose one. (straight) or (down)");
                    glow();
            }
        }

        function glowDown() {
            confirm("As you walk downward, you slip and fall. It was a large gap, you fell for seconds before hitting the cold ground. The staircase broke at some point. You can't see anything, you need to find a light source. ");
            confirm("Did you have a torch?");
            if (item === "Torch") {
                confirm("You had one");
                confirm("You light the torch, and observe your new surroundings");
            }
            else {
                confirm("You can't see anything, the room is large, you are entirely lost. You eventually starve and die");
                alert("GAME OVER");
                restart()
            }
        }

        function confirmStart() {
            var answer = prompt("Would you like to play? (yes) or (no)");
            switch (answer) {
                case'yes':
                    document.getElementById('startButton').hidden = true;
                    gameStart();
                    break;
                case'no':
                    return;
                    break;
                default:
                    alert("Please choose one. (yes) or (no)");
            }
        }
        var page = 0;


function createText(text) {
    var para = document.createElement('p');
    var node = document.createTextNode(text);
    para.appendChild(node);
    var element = document.getElementById("textBox");
    element.appendChild(para);
    para.id = 'special';
    document.getElementById('special').fontcolor("white");
}

function clearPage() {
    special.parentNode.removeChild(special);
    picture.parentNode.removeChild(picture);
    showPage();
}

function venturePic(src) {
    var img = document.createElement("img");
    img.src = src;
    img.width = 600;
    img.height = 300;
    img.id = 'picture';
// This next line will just add it to the <body> tag
    document.getElementById('imageBox').appendChild(img);
}

function pageCount() {
    if (page === 3) {
        //forest hallway leading to darkness or water
        clearPage();
        venturePic('http://miriadna.com/desctopwalls/images/max/Dense-forest.jpg');
        createText('You head left into the forest. You walk for a long while. The trees stand tall all around you. The winding path into the forest eventually splits into a fork. It continues left into a hallway of arched trees, deep and silent. To the right it turns sharply downhill through a tangle of trees. You can hear running water this way');
        return;
    }
    if (page === 2){
    //hill leading to road or monoliths
        clearPage();
        venturePic('http://www.imagebase.net/var/albums/Nature/IMG_3038-1.JPG');
        createText("You head right, up the hill. The climb is steep. You finally arrive close to the top, nearly an hour later. You have a great view around you. Down the hill, the path continues on, straight forward off into the distance. You can see smoke blowing this way. To your right, you see stone pillars of ruins laying at the foot of the hill.");
    }
    if (page === 4) {
        //dark hallway wolf fight or run
        clearPage();
        venturePic('http://i.imgur.com/I2oc8WC.jpg');
        createText("You head straight. The light gets visibly darker. The smell of moss and damp grass fills the air. You develop the feeling of being watched. A large wolf is watching from a distance, it's eyes glowing in the dark shade.");
    }
    if (page === 5) {
        //azure stream drink water or not
        clearPage();
        venturePic('http://s0.geograph.org.uk/photos/02/32/023244_35a64f95.jpg');
        createText("You turn right. You descend downhill through the thick wood. The trees enclose all around you, until you are finally set free in a clearing. Still under the shade, you come upon a babbling stream. It runs wide and deep, and gives off an azure light in the deep woods. You're suddenly aware of how thirsty you are. Do you drink the water?");
    }
    if (page === 6) {
        clearPage();
        venturePic('http://29.media.tumblr.com/tumblr_ld2qajXa341qar0v7o1_500.jpg');
        createText('You turn right. You wade your way down the hill and into chest high grass. You continue forward in the heat, and press further closer to the megalithic rocks. The stones mark a small entrance, with steps leading into a cave.');
    }
    if (page === 7) {
        clearPage();
        venturePic('https://twinphoenix222.files.wordpress.com/2011/01/tennessee-country-dirt-road.jpg');
        createText("The road your walking on becomes more prominent. A stone wall abruptly arises to your side, about waist high, and cobbled. You get an uneasy feeling, and concentrate about the situation you are in. You hear distant thudding in the dirt.It's horse gallops");
    }
    if (page === 8) {
        clearPage();
        venturePic('https://richardwiseman.files.wordpress.com/2011/01/stick.jpg');
        createText("You fight the wolf. Without thinking, you grab a large branch by your feet. You swing with maximum force as the wolf jumps towards youA crack rings through the forest, the wolf has died");
    }
    if (page === 9) {
        clearPage();
        venturePic('http://michaeltrevino.info/wp-content/uploads/2011/04/76.jpg');
        createText("The wolf bolts after you, you can hear the powerful steps in the leaves behind you. You see but a green blur tunneling towards you, as you race for your life. Your foot catches a root, and you trip forward in a tumble. For a moment you lay on the forest ground. The wolf pounces on you");
    }
    else alert("wrong page");
}


function leftClick(){
    if (page === 1) {
        page+=2;
        pageCount();
        //page 3
        return;
    }
    if (page === 2) {
        page+=5;
        pageCount();
        //page 7
        return;
    }
    if (page === 3) {
    page++;
        pageCount();
        //page 4
    }
    if (page === 4) {
        page+=4;
        pageCount();
        //page 8
    }
}

function rightClick(){
    if (page === 1){
        page++;
        //page 2
        pageCount();
    }
    if (page === 2) {
        page+=4;
        pageCount();
        //page 6
    }
    if  (page === 3){
        page+=2;
        pageCount();
        //page 5
    }
    if (page === 4) {
        page+=5;
        pageCount();
        //page 9
    }
}

function showPage() {
    document.getElementById('pageNumber').innerHTML = page;
}
showPage();
//confirmStart();

/////Junk
/*var leftButton = document.createElement("p");
var nodeButton = document.createTextNode("Left");
leftButton.appendChild(nodeButton);
var leftElement =  document.getElementById('answerBox');
leftElement.appendChild(leftButton);
leftElement.id = 'leftKnob';
leftElement.className = 'button';
leftElement.style = 'position: relative; right: -50px; bottom: -30px';

FADE IN APPENDED THINGS
 $("#posts").fadeIn();
 $(content).appendTo("#posts");

// Create the DOM elements
$(content)
// Sets the style of the elements to "display:none"
    .hide()
// Appends the hidden elements to the "posts" element
    .appendTo('#posts')
// Fades the new content into view
    .fadeIn();

MAKE SOUND
 var snd = new Audio("file.wav"); // buffers automatically when created
 snd.play();

 */

