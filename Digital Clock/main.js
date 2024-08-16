function clock() {
    let hr = document.getElementById('hr');
    let min = document.getElementById('min');
    let sec = document.getElementById('sec');
    let ampm =document.getElementById('ampm');

    let now = new Date().toLocaleString("en-US", { timeZone: "Europe/Helsinki" });
    let currentTime = new Date(now);

    let h = currentTime.getHours();
    let m = currentTime.getMinutes();
    let s = currentTime.getSeconds();

    var am = 'AM';

    if(h > 12) {
        h = h - 12;
        var am = 'PM'; 
    }

    hr.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;
    ampm.innerHTML = am;
};

let interval = setInterval(clock, 1000)