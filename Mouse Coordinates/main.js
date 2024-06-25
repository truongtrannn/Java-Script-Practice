const output = document.getElementById('output');

window.addEventListener('mousemove', (e) => {
    let x = e.clientX;
    let y = e.clientY;
    output.innerHTML =  `<div><span>X: </span>${x}</div>
                         <div><span>Y: </span>${y}</div>`
})