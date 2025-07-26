const display = document.getElementById('box')
const containermode = document.getElementById('mode')
const contain = document.getElementById('contain')
const moonsym = document.getElementById('moonsym')
const colorbody = document.getElementById('contain')
const body = document.body
const allbuttons = document.querySelectorAll('button')




containermode.addEventListener("click", function(){
 moonsym.classList.toggle('nightmode')

 if (moonsym.classList.contains('nightmode')) {
  moonsym.textContent = "☾"
  colorbody.style.backgroundColor='antiquewhite'
  containermode.style.backgroundColor='black'
  body.style.backgroundColor='black'
  display.style.backgroundColor='black'
  display.style.color='antiquewhite'
  historycontainer.style.backgroundColor='rgb(136, 127, 116)'
  history.style.backgroundColor='black'



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
    historycontainer.style.backgroundColor='rgb(44, 42, 39)'
    history.style.backgroundColor='antiquewhite'


    allbuttons.forEach(button => {
    button.style.backgroundColor='antiquewhite'
    button.style.color='black'

    
  })
    
 }

})