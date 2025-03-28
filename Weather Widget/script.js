function UpdateTime() {
    let now = new Date();

    let hours = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    hours = hours < 10 ? '0' + hours : hours; 
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

    // condition ? value_if_true : value_if_false;

    // if (min < 10) {
    //     min = '0' + min;
    // } else {
    //     min = min;
    // }

    let currentTime = `${hours}:${min}:${sec}`;
    document.getElementById('time').innerHTML = currentTime;

}

function UpdateDate() {
    let now = new Date();
    let options = { 
        day: '2-digit', 
        month: 'long',  
        year: 'numeric'
    };

    let currentDate = now.toLocaleDateString('en-GB', options);   //GB -> british english

    document.getElementById('date').innerText = currentDate;
}

function UpdateDay() {
    let now = new Date();
    let currentDay = now.toLocaleDateString('en-GB', {weekday: 'long'});   //GB -> british english
    
    document.getElementById('day').innerText = currentDay;
}

let isCelsius = true; // Flag to track the unit of the temperature
function Degree() {

        let temperatureData = 17; 
        let far = Math.round((temperatureData * 9 / 5) + 32); 
        let loww = 16;
        let highh = 17;
        let low  = Math.round((16 * 9 / 5) + 32);; 
        let high= Math.round((17 * 9 / 5) + 32);; 

        if (isCelsius) {
            document.getElementById('current').innerHTML = far; 
            document.getElementById('l').innerHTML = `L: ${low}`;
            document.getElementById('h').innerHTML = `H: ${high}`;
            document.getElementById('degree').innerHTML = '°F'; 
        } 
        else {
            document.getElementById('current').innerHTML = temperatureData; 
            document.getElementById('l').innerHTML = `L: ${loww}`;
            document.getElementById('h').innerHTML = `H: ${highh}`; 
            document.getElementById('degree').innerHTML = '°C';
        }
        isCelsius = !isCelsius;
    }
        document.getElementById('degree').addEventListener('click', Degree);
    




window.onload = function() {
    UpdateTime();
    UpdateDate();
    UpdateDay();
    setInterval(UpdateTime, 1000); 
};