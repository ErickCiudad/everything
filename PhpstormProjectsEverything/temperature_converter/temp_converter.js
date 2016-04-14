// Set this variable to a starting Fahrenheit temperature...
var fahrenheit = 32;
var celsius = 0;
var kelvin = 273.15;
// Enter conversion code below...
var fahrenheitToCelsius = (fahrenheit-32)*(5/9);
var fahrenheitToKelvin = (fahrenheit-32)*(5/9)+273.15;
var celsiusToFahrenheit = (celsius * 1.8 + 32);
var celsiusToKelvin = (celsius + 273.15);
var kelvinToFahrenheit = (kelvin - 273.15);
var kelvinToCelsius = (kelvin * 1.8 - 459.67);

// Enter console.log statements below...

console.log(fahrenheitToCelsius);
console.log(fahrenheitToKelvin);
console.log(celsiusToFahrenheit);
console.log(celsiusToKelvin);
console.log(kelvinToFahrenheit);
console.log(kelvinToCelsius);

var fahrenheitTemps = [ fahrenheit, fahrenheitToCelsius, fahrenheitToKelvin];
var celsiusTemps = [celsius, celsiusToFahrenheit, celsiusToKelvin];
var kelvinTemps = [kelvin, kelvinToCelsius, kelvinToFahrenheit];