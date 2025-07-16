// Calculator container
const display = document.getElementById('box')
const containermode = document.getElementById('mode')
const contain = document.getElementById('contain')
const moonsym = document.getElementById('moonsym')
const colorbody = document.getElementById('contain')
//contents
const equal = document.querySelector('#equal')
const integer = document.querySelector('#integer')
const AC = document.querySelector('#AC')
const backspace = document.querySelector('#backspace')
const percentage = document.querySelector('#percentage')
const operators = ['+', '-','*','/']
const digits = document.querySelectorAll('.primaryDisplay')

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
    display.textContent = "Syntax Error"
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
    display.style.backgroundColor='white'
    display.style.color='black'
    
    allbuttons.forEach(button => {
    button.style.backgroundColor='antiquewhite'
    button.style.color='black'
  })
    
 }

})

