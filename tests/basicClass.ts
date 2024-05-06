class Calculator {
    protected firstNumber: number
    protected secondNumber: number
    protected results: number

    constructor(number1: number, number2: number){
        this.firstNumber = number1
        this.secondNumber = number2
        this.results = 0
    }

    sum(){
        this.results = this.firstNumber + this.secondNumber
    }
    showResults() {
        return this.results
    }
}

const calc = new Calculator(3, 12)
calc.sum()
console.log(calc.showResults())