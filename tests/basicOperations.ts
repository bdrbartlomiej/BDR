// console.log('Hello world')

// Stała
const number1: number = 10.5

// Zmienna
let number2: number = 20

console.log('numer: ' + number2)
number2 = 30
console.log('numer2: ' + number2)
let text1: string = '30'

// Dodawanie
let sum = number2 + number1
console.log('suma: ' + sum)

// Odejmowanie
let odejmowanie = number2 - number1
console.log('odejmowanie: ' + odejmowanie)

// Mnozenie
let mnozenie = number2 * number1
console.log('mnozenie: ' + mnozenie)

// Dzielenie
let dzielenie = number2 / number1
console.log('dzielenie: ' + dzielenie)

// Modulo
let modulo = number2 % number1
console.log('modulo: ' + modulo)

// Dodawanie stringów
let textTest:string = "Testy "
let textAuto:string = "Automatyczne"
const sumaText = textTest + textAuto
console.log(sumaText)

// Tablica
let arr = [1, 2, 3, 4]
console.log("tablica: " + arr[1])

// Słownik
let car = {
    "Kolor": "czerwony",
    "Marka": "fiat"
}
car.Marka = "bmw"
console.log(car.Marka)

// Funkcja
function add(a: number, b: number): number {
    return a + b
}

let suma = add(4, 5)
console.log(suma)