const inputPX = document.getElementById('input-px');
const inputEM = document.getElementById('input-em');

const PXtoEM = () => {
    const pxVal = inputPX.value;

    if(pxVal.length != 0) {
        inputEM.value = pxVal / 16;
    } else {
        inputEM.value=""
    }
}

const EMtoPX = () => {
    const emVal = inputEM.value;

    if(emVal.length != 0) {
        inputPX.value = emVal / 16;
    } else {
        inputPX.value=""
    }
}

inputPX.oninput = PXtoEM;
inputEM.oninput = EMtoPX;