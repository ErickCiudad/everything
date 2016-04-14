// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( 15 );
//type of would return "number" because it defined it's data type. 15 is an integer, making it a number.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( "hello" );
//This typeof would return "string" because hello is encoded as an entered word

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( [ "dog", "cat", "horse" ] );
//This typeof would return "object", because it's purpose is to find and select data.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( NaN );
//The value returns as a number because technically NaN is and isn't a number at the same time

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburger" + "s";
//The value returns "hamburgers" because the code instructed it to add two strings

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburgers" - "s";
//This string would return NaN because it is too complex to search for the letter in a string and remove it.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"johnny" + 5;
//It would return "johnny5" because it just paired the two data types together


// What is the return value of the below code sample? Provide a sentence or two of explanation.
99 * "luftbaloons";
//It returns a NaN because you can't multiply a number

// What will the contents of the below array be after the below code sample is executed.
var numbers = [ 2, 4, 6, 8 ];
numbers.pop();
numbers.push( 10 );
numbers.unshift( 3 );
/*The resulting array would be ordered [3, 2, 4, 6, 10] because the pop would remove the last number (8)
* Then push in a new number to the end, (10)
* Then unshift adds new items to the front end of the array, the (3)
* */


// What is the return value of the below code sample?
var morse = [ "dot", "pause", "dot" ];
var moreMorse = morse.join( " dash " );
moreMorse.split( " " );
/*The resulting code would make typing moreMorse display the morse array as a string, but is undefined
*until moreMorse.split fills in the spaces with a "dash"
*
* */

// What will the contents of the below array be after the below code sample is executed.
var bands = [];
var beatles = [ "Paul", "John", "George", "Pete" ];
var stones = [ "Brian", "Mick", "Keith", "Ronnie", "Charlie" ];
bands.push( beatles );
bands.unshift( stones );
bands[ bands.length - 1 ].pop();
bands[0].shift();
bands[1][3] = "Ringo";
/*Typing bands returns [Array[4]0: "Mick"1: "Keith"2: "Ronnie"3: "Charlie"length: 4__proto__: Array[0], Array[4]0: "Paul"1: "John"2: "George"3: "Ringo"length: 4__proto__: Array[0]]
* Which is the two different arrays that were created of the beatles and the stones.
* These arrays were pushed and unshifted into the array labled bands.
* Using an object, like bands[1] [2] we can find a specific band member from the arrays stored within the array.
* */
