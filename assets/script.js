// Retrieve saved calculation history from localStorage
const storedHistory = localStorage.getItem('calcHistory')

const equal = document.querySelector('#equal')
const integer = document.querySelector('#integer')
const AC = document.querySelector('#AC')
const backspace = document.querySelector('#backspace')
const percentage = document.getElementById('percentage')
const digits = document.querySelectorAll('.primaryDisplay')
const operators = ['+', '-','*','/','.','%',]
const history = document.getElementById('historybox')
const historycontainer = document.getElementById('historylogcontainer')
const historyentry = document.querySelector('#historyentry')
const clearButton = document.querySelector('.clearbtn')
const historylist = storedHistory ? JSON.parse(storedHistory) : [];
const confirm = document.querySelector('.confirm-model')
const yesbtn = document.getElementById('yes')
const nobtn = document.getElementById('no')
const okaybtn = document.getElementById('Okay')
const noContents = document.querySelector('.noContents')

let calc = ""
let digitCalculated = false

digits.forEach(btns => { // numbers and operators
    btns.addEventListener('click', () => {
      const value = btns.textContent
      const lastChar = calc.slice(-1)
    
      if (digitCalculated && !operators.includes(value)) {
        calc = ""
        digitCalculated = false
      } 
      
      if (operators.includes(value) && operators.includes(lastChar)) return
      btnsprimary(value)
    
    })
}) 

function btnsprimary (buttons) { 
    calc = calc + `${buttons}`
    display.textContent = calc
}

integer.addEventListener('click', () => {
  calc = calc.startsWith('-') ? calc.slice(1) : '-' + calc;
  display.textContent = calc;
  })

backspace.addEventListener('click', () => {
    calc = calc.toString().slice(0, -1)
    display.textContent = calc;
})

AC.addEventListener('click', () => {
    calc = ""
    display.textContent = calc;
})


percentage.addEventListener('click', () => {
  try {
    calc = (parseFloat(calc) / 100).toString(); 
    display.textContent = calc;
  } catch {
    display.textContent = "Error";
    calc = "";
  }
})

equal.addEventListener('click', () => {
  try {
    const result = parseFloat(eval(calc)).toString() 
    const entry = `${calc} = ${result}`
    historylist.push(entry)
    calc = result
    display.textContent = calc
    digitCalculated = true
    const entryDiv = document.createElement('li')
    entryDiv.textContent = entry
    historyentry.append(entryDiv)

    localStorage.setItem('calcHistory', JSON.stringify(historylist)) // convert historylist into string(calcHistory) to store it 
  } catch {
    display.textContent = "Error"
    calc = ""
  }
})

history.addEventListener('click', () => {
  historycontainer.classList.toggle('show')
  historyentry.innerHTML = ''
  
  historylist.length === 0 
    historylist.forEach(entry => {
      const entryDiv = document.createElement('li')
      entryDiv.textContent = entry
      historyentry.append(entryDiv)
    })
})

clearButton.addEventListener('click', () => {

  if (historyentry.innerHTML.trim() === '') {
    noContents.style.display = 'flex';
  } else {
    confirm.style.display='flex'
  }
}) 

okaybtn.addEventListener('click', () => {
  noContents.style.display = 'none'; // close noContents model
})



yesbtn.addEventListener('click', () => {
  historylist.length = 0
  historyentry.innerHTML = ''
  confirm.style.display ='none'
  historycontainer.classList.remove('show')
  localStorage.clear()
})

nobtn.addEventListener('click', () => {
  confirm.style.display = 'none'; // close model
})




