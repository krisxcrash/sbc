//loads greeting based on time of day

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good Evening!';
} else if (hourNow > 12) {
    greeting = 'Good Afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good Morning!';
} else {
    greeting = 'Welcome!';
}

var el = document.getElementById('welcome');
el.textContent = greeting;

//loads new fortune when page loads 

document.addEventListener("DOMContentLoaded", function(event) { 
    var rand = fortune[Math.floor(Math.random() * fortune.length)];
    var el = document.getElementById('fortune-cookie');
        el.textContent = rand;
    });



