// get every properties in hour,minute 
// and second and store them in these variable names

let hourHand = document.querySelector(".hour");
let minuteHand = document.querySelector(".minute");
let secondHand = document.querySelector(".second");

// function that rotates the hand

function rotate(){

    // get the current date object that contains the current hour, 
    // minute, and second and store in the currentDate variable

    const currentDate = new Date();
    //get the current hour, minute, and seconds and them in the variables

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    console.log(hours,minutes,seconds);
    // rotating fraction => how many fraction to rotate at each hand
    const secondsFraction = seconds / 60;
    const minutesFraction = (secondsFraction + minutes)/ 60;
    const hoursFraction = (minutesFraction + hours)/ 12;

    // actual deg to rotate

    const secondDeg = secondsFraction * 360;
    const minuteDeg = minutesFraction *360;
    const hourDeg = hoursFraction * 360;

    // apply the rotate style to each Element

    secondHand.style.transform = `rotate(${secondDeg} deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg} deg)`;
    hourHand.style.transform = `rotate(${hourDeg} deg)`;
}

// for every 1000 millisecond(that is 1 second), activate the rotate function

setInterval(rotate,1000);
