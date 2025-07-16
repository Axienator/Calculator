

const equal = document.querySelector('#equal')
const integer = document.querySelector('#integer')
const AC = document.querySelector('#AC')
const backspace = document.querySelector('#backspace')
const percentage = document.getElementById('percentage')
const digits = document.querySelectorAll('.primaryDisplay')
const operators = ['+', '-','*','/','.','%']


let calc = "";

digits.forEach(btns => {
    btns.addEventListener('click', () => {
        const value = btns.textContent
        const lastChar = calc.slice(-1)
        if (operators.includes(value) && operators.includes(lastChar)) return
        btnsprimary(value)
    })
}) 

function btnsprimary (buttons) {
    calc = calc + `${buttons}`
    display.textContent = calc
}

equal.addEventListener('click', function (){
  try {
    calc = parseFloat(eval(calc)).toString()
    display.textContent = calc
  } catch {
    display.textContent = "Error"
    calc = ""
  }
})

backspace.addEventListener('click', function () {
    calc = calc.toString().slice(0, -1)
    display.textContent = calc;
})

AC.addEventListener('click', function () {
    calc = ""
    display.textContent = calc;
})

// Understand how this percentage works
percentage.addEventListener('click', () => {
  try {
    calc = (parseFloat(calc) / 100).toString();
    display.textContent = calc;
  } catch {
    display.textContent = "Error";
    calc = "";
  }
})








