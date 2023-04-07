const secondHand = document.querySelector('.second-hand')

function setDate(){
    const time = new Date()

    const seconds = time.getSeconds()
    const secondDegrees = ((seconds / 60) * 360) + 90

    secondHand.style.transform = `rotate(${secondDegrees}deg)`

}

setInterval(setDate, 1000);

console.log(secondHand)