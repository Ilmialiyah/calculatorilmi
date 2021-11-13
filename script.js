let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const inputPercent = (percentage) => {
    currentNumber /= 100
}

const percentageSign = document.querySelector('.percentage')

percentageSign.addEventListener('click', (event) => {
    checkPersen = true
    inputPercent(event.target.value)
    updateScreen(calculationOperator)
})

const inputOperator = (operator) => {
    if (currentNumber === '0') {
        return false
    } else {
        currentNumber += operator
    }
    calculationOperator = operator
    prevNumber = currentNumber
    currentNumber = ''
}
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
        updateScreen(calculationOperator)
    })
})

const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+":
            result = partseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = perseFloat(prevNumber) - perseFloat(currentNumber)
            break
        case "*":
            result = perseFloat(prevNumber) * perseFloat(currentNumber)
            break
        case "/":
            result = perseFloat(prevNumber) / perseFloat(currentNumber)
            break
        case "%":
            result = perseFloat(currentNumber) /100
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = ''
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
    checkResult = true
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})