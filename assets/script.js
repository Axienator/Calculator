// Calculator container
const display = document.getElementById('box')
const containermode = document.getElementById('mode')
const contain = document.getElementById('contain')
const moonsym = document.getElementById('moonsym')
const colorbody = document.getElementById('contain')
const body = document.body
const allbuttons = document.querySelectorAll('button')
//contents


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
    calc = eval(calc)
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
    // Get the last number in the expression
    const match = calc.match(/(\d+\.?\d*)$/)
    if (!match) return

    const number = match[0]
    const percent = parseFloat(number) / 100

    // Replace the number with its percentage value
    calc = calc.replace(/(\d+\.?\d*)$/, percent.toString())
    display.textContent = calc
  } catch {
    display.textContent = "Error"
    calc = ""
  }
})






containermode.addEventListener("click", function(){
 moonsym.classList.toggle('nightmode')

 if (moonsym.classList.contains('nightmode')) {
  moonsym.textContent = "☾"
  colorbody.style.backgroundColor='antiquewhite'
  containermode.style.backgroundColor='black'
  body.style.backgroundColor='black'
  display.style.backgroundColor='black'
  display.style.color='antiquewhite'

  allbuttons.forEach(button => {
    button.style.backgroundColor='black'
    button.style.color='antiquewhite'
  })

 } else {
    moonsym.textContent = "☀"
    containermode.style.backgroundColor='antiquewhite'
    colorbody.style.backgroundColor='black'
    body.style.backgroundColor='antiquewhite'
    display.style.backgroundColor='antiquewhite'
    display.style.color='black'
    
    allbuttons.forEach(button => {
    button.style.backgroundColor='antiquewhite'
    button.style.color='black'
  })
    
 }

})

