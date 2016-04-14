# Exercise: Temperature Converter

Goal: create a program that can convert a temperature in Fahrenheit, Celsius or Kelvin to the other two units.
- Try the bonus goal if you have extra time!

## Setup

- Fork and clone this repo to your computer.
- Open `temp_converter.js`.

## PART 1

### Instructions

1. Set the `fahrenheit` variable to a starting temperature.
2. Below that, write Javascript code that converts `fahrenheit` to its equivalent Celsius and Kelvin values.
  - Conversion formulae: [http://www.csgnetwork.com/temp2conv.html](http://www.csgnetwork.com/temp2conv.html)
  - Sample temperatures: 32F = 0C = 273.15K
3. Below that, `console.log` the starting and converted temperatures.
4. Repeat steps 1-3 for starting `celsius` and `kelvin` temperatures.
5. Test your program by running `$ node temp_converter.js` in the command line.


Your program will look something like this for each starting temperature...

  ```javascript
  // Starting temperature
  var fahrenheit = 32;

  // Conversion code
  var fahrenheitToCelsius = ...;
  var fahrenheitToKelvin = ...;

  // Print to console
  console.log( "Fahrenheit: " + ... );
  console.log( "Celsius: " + ... );
  console.log( "Kelvin: " + ... );
  ```

Your command line output will look something like this...

  ```
  Fahrenheit: STARTING_TEMP F
  Celsius: CONVERTED_TEMP C
  Kelvin: CONVERTED_TEMP K
  ```

Feel free to turn to your tablemates for help!  

### Bonus

Use conditionals (e.g., `if-else` statement, `switch` statement) so that your program only prints out the converted temperatures for one starting value.  

The starting temperature should be determined by a 'whichTemp' variable that you instantiate at the beginning of the program, and will contain a value of either "f" (Fahrenheit), "c" (Celsius) or "k" (Kelvin).

## PART 2

Restructure your program from PART 1 so that when you convert a temperature, that new value is stored in an array. Your array will end up looking something like this...

  `var fahrenheitTemps = [ STARTING_TEMP, CONVERTED_TEMP_1, CONVERTED_TEMP_2 ];`

You will have similar arrays for the Celsius and Kelvin portions of your program.  

When you `console.log` the temperatures, make sure you do that by accessing the values stored in the array.  

### Bonus 1

Use a for or while loop to print out the conversion results for each temperature. It's OK if you need to simplify your `console.log` statements and remove strings.  

### Bonus 2

Implement the conditionals from the Part I bonus if you haven't already!  
