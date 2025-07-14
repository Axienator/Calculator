

const display = document.getElementById('box')
const containermode = document.getElementById('mode')
const contain = document.getElementById('contain')
const moonsym = document.getElementById('moonsym')
var colorbody = document.getElementById('contain')
const body = document.body


const equal = document.querySelector('#equal')
const integer = document.querySelector('#integer')
const AC = document.querySelector('#AC')
const backspace = document.querySelector('#backspace')
const primarybtns = document.querySelectorAll('.calcprimary')
const percentage = document.querySelector('#percentage')


let calc = "";

primarybtns.forEach(btns => {
    btns.addEventListener('click', () => {
        btnsprimary(btns.textContent);
    })
}) 


function btnsprimary (buttons) {
    calc = calc + `${buttons}`;
    display.textContent = calc;
}

equal.addEventListener('click', function (){
    calc = eval(calc)
    display.textContent = calc
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

