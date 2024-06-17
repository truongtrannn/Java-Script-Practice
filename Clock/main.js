const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

const deg = 6; // Each minute/second is 6 degrees (360 degrees / 60 units)
setInterval(() => {
    let day = new Date();
    let ms = day.getMilliseconds();
    let hh = day.getHours() * 30 + day.getMinutes() * 0.5; // Correct hour calculation
    let mm = day.getMinutes() * deg + day.getSeconds() * 0.1; // Correct minute calculation
    let ss = day.getSeconds() * deg + (ms * deg) / 1000; // Correct second calculation

    hr.style.transform = `rotateZ(${hh}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
}, 10); // Set interval to 10ms for smoother animation
