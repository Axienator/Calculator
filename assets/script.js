const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const zero = document.getElementById('zero')
const divide = document.getElementById('divide')
const multiply = document.getElementById('multiply')
const add = document.getElementById('add')
const equal = document.getElementById('equal')
const subtract = document.getElementById('subtract')
const display = document.getElementById('box')
const backspace = document.getElementById('backspace')
const ac = document.getElementById('AC')
const integer = document.getElementById('integer')
const percentage = document.getElementById('percentage')
const containermode = document.getElementById('mode')
const contain = document.getElementById('contain')
const moonsym = document.getElementById('moonsym')
var colorbody = document.getElementById('contain')
const body = document.body



const allbuttons = [seven,eight,nine,dot,four,five,six,one,two,three,zero,divide,multiply,add,equal,subtract,backspace,ac,integer,percentage];

let calc = "";



seven.addEventListener("click", function(){
    calc = calc + "7";
    display.textContent = calc;
})

eight.addEventListener("click", function (){
    calc = calc + "8"
    display.textContent = calc;
})

nine.addEventListener("click", function (){
    calc = calc + "9"
    display.textContent = calc;
})

four.addEventListener("click", function (){
    calc = calc + "4"
    display.textContent = calc;
})

five.addEventListener("click", function (){
    calc = calc + "5"
    display.textContent = calc;
})

six.addEventListener("click", function (){
    calc = calc + "6"
    display.textContent = calc;
})

one.addEventListener("click", function (){
    calc = calc + "1"
    display.textContent = calc;
})

two.addEventListener("click", function (){
    calc = calc + "2"
    display.textContent = calc;
})

three.addEventListener("click", function (){
    calc = calc + "3"
    display.textContent = calc;
})

zero.addEventListener("click", function (){
    calc = calc + "0"
    display.textContent = calc;
})

dot.addEventListener("click", function (){
    calc = calc + "."
    display.textContent = calc;
})


multiply.addEventListener("click", function (){
    calc = calc + "*"
    display.textContent = calc;
})

add.addEventListener("click", function (){
    calc = calc + "+"
    display.textContent = calc;
})

divide.addEventListener("click", function (){
    calc = calc + "/"
    display.textContent = calc;
})

subtract.addEventListener("click", function (){
    calc = calc + "-"
    display.textContent = calc;
})

integer.addEventListener("click", function () {
    calc = "⁻" + calc
    display.textContent = calc;
})

percentage.addEventListener("click", function (){
    calc = calc + "%"
    display.textContent = calc;
})

ac.addEventListener("click", function (){
    calc = "";
    display.textContent = calc;
})

backspace.addEventListener("click", function () {
    calc = calc.toString().slice(0, -1);
    display.textContent = calc;
})



equal.addEventListener("click", function(){
    calc = eval(calc)
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

