//Temperature app
//When someone types a number in one of the respective fields it will relay and convert to all temperatures.

const celciusInput = document.querySelector('#celcius > input');
const fahrenhietInput = document.querySelector('#fahrenhiet > input');
const kelvinInput = document.querySelector('#kelvin > input');

function roundNum(num) {
  return Math.round(num * 100)/100;
}

function celciusToFahrenhietAndKeliv(){
  const cTemp = parseFloat(celciusInput.value);
  const fTemp = (cTemp * (9/5)) + 32;
  const kTemp = cTemp + 273.15;
  fahrenhietInput.value = roundNum(fTemp);
  kelvinInput.value = roundNum(kTemp);
}

function fahrenhietToCelciusAndKelvin(){
  const fTemp = parseFloat(fahrenhietInput.value);
  const cTemp = (fTemp-32) * (5/9);
  const kTemp = (fTemp + 459.67) * 5/9;
  celciusInput.value = roundNumm(cTemp);
  kelvinInput.value = roundNum(kTemp);
}

function kelvinToCelciusAndFahrenhiet(){
  const kTemp = parseFloat(kelvinInput.value);
  const cTemp = kTemp - 273.15;
  const fTemp = 9/5 * (kTemp - 273) +32;
  celciusInput.value = roundNum(cTemp);
  fahrenhietInput.value = roundNum(fTemp);
}

function main() {
  celciusInput.addEventListener('input', celciusToFahrenhietAndKeliv);
  fahrenhietInput.addEventListener('input', fahrenhietToCelciusAndKelvin);
  kelvinInput.addEventListener('input', kelvinToCelciusAndFahrenhiet);
}

main();

