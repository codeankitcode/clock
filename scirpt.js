const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.minute-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate(){
    const time = new Date()

    const seconds = time.getSeconds()
    const secondDegrees = ((seconds / 60) * 360) + 90

    secondHand.style.transform = `rotate(${secondDegrees}deg)`

    const mins = time.getMinutes()
    const minDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90
    
    minHand.style.transform = `rotate(${minDegrees}deg)`

    const hour = time.getHours()
    const hourDegree = ((hour / 12) * 360) + ((mins/ 60) * 30) + 90

    hourHand.style.transform = `rotate(${hourDegree}deg)`

}

setInterval(setDate, 1000);

// console.log(secondHand)