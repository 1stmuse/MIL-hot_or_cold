const submitBtn = document.querySelector('.submit')
const reStart = document.querySelector('.restart')
const displayMessage = document.querySelector('.text')
const form = document.querySelector('.input')
let inputValue = document.querySelector('.input-field')
let randomNumber = Math.round(Math.random() * 101)
const range = document.querySelector('.tempRange')
let temStatus = document.querySelector('.tempStatus')

const submit =() =>{
    if(!Number(inputValue.value) && inputValue.value !==''){
        displayMessage.textContent= 'input only numbers'
        displayMessage.style.display ='block'
        inputValue.value = ''
        return
    }
    if(inputValue.value === ''){
        displayMessage.textContent= 'input field must not be empty'
        displayMessage.style.display ='block'
        return
    }
    let difference = Math.abs(randomNumber - inputValue.value)
    if(difference >=80 && difference <=99){
        range.style.width = `${10}%`
        range.style.backgroundColor = 'darkgrey'
        temStatus.textContent = 'you are getting colder'
    }
    if(difference >50 && difference < 80){
        range.style.width = `${30}%`
        range.style.backgroundColor = 'grey'
        temStatus.textContent = 'you are getting cold'
        
    }
    if(difference >30 && difference <=50){
        range.style.width = `${50}%`
        range.style.backgroundColor = 'orange'
        temStatus.textContent = 'you are cool'
    }
    if(difference >10 && difference <=30){
        range.style.width = `${70}%`
        range.style.backgroundColor = 'orangered'
        temStatus.textContent = 'you are getting hot'
    }
    if(difference >= 1 && difference <=10){
        range.style.width = `${90}%`
        range.style.backgroundColor = 'red'
        temStatus.textContent = 'you are getting hotter'
    }
    if(difference === 0){
        range.style.width = `${100}%`
        temStatus.textContent = 'congratulations you guessed'
    }
    inputValue.value = ''
    displayMessage.style.display = 'none'

}

submitBtn.addEventListener('click', submit)
reStart.addEventListener('click', ()=>{
    randomNumber = Math.round(Math.random() * 101)
    inputValue.value = ''
    range.style.width = `${0}%`
    temStatus.textContent = ''
})