

const equal = document.querySelector('#equal')
const integer = document.querySelector('#integer')
const AC = document.querySelector('#AC')
const backspace = document.querySelector('#backspace')
const percentage = document.getElementById('percentage')
const digits = document.querySelectorAll('.primaryDisplay')
const operators = ['+', '-','*','/','.','%',]
const history = document.getElementById('historybox')
const historycontainer = document.getElementById('historylogcontainer')
const historylist = []

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

integer.addEventListener('click', () => {
  calc = calc.startsWith('-') ? calc.slice(1) : '-' + calc;
  display.textContent = calc;
  })

backspace.addEventListener('click', function () {
    calc = calc.toString().slice(0, -1)
    display.textContent = calc;
})

AC.addEventListener('click', function () {
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

equal.addEventListener('click', function (){
  try {
    const result = parseFloat(eval(calc)).toString()
    historylist.push(`${calc} = ${result}`)
    calc = result
    display.textContent = calc

  } catch {
    display.textContent = "Error"
    calc = ""
  }
})

// When the history is clicked -> creates a div class -> shows the user's calculations -> clear history button -> no history

// Question : How do I make a div that shows the result of the user's calculations
 

history.addEventListener('click', () => {
  historycontainer.classList.toggle('show')
  historycontainer.innerHTML = ''


  const historycontent = document.createElement('div')
  historycontent.className='historycontent'
  historycontent.style.textAlign='end'
  historycontainer.append(historycontent)
  

  const clearButton = document.createElement('button')
  clearButton.id('clearbtn')
  clearButton.textContent = 'Clear History'
  clearButton.style.marginbottom = '10px'
  historycontainer.append(clearButton)


  if (historylist.length === 0) {
    historylist.textContent = 'No History'
  } else {
    historylist.forEach(entry => {
      const entryDiv = document.createElement('div')
      entryDiv.textContent = entry
      historycontent.append(entryDiv)
    })
  }

  clearButton.addEventListener ('click', () => {
    historylist.length = 0
    historycontent.textContent = "No History"
  })
})



