const subhanAllahDisplay = document.getElementById('subhanAllahDisplay');
const subhanAllahIncrementBtn = document.getElementById('subhanAllahIncrementBtn');
const subhanAllahDecrementBtn = document.getElementById('subhanAllahDecrementBtn');

const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay');
const alhamdulillahIncrementBtn = document.getElementById('alhamdulillahIncrementBtn');
const alhamdulillahDecrementBtn = document.getElementById('alhamdulillahDecrementBtn');

const allahAkberDisplay = document.getElementById('allahAkberDisplay');
const allahAkberIncrementBtn = document.getElementById('allahAkberIncrementBtn');
const allahAkberDecrementBtn = document.getElementById('allahAkberDecrementBtn');

const resetBtn = document.getElementById('resetBtn');

let subhanAllahInitialValue = 0;
let alhamdulillahInitialValue = 0;
let allahAkberInitialValue = 0;


subhanAllahIncrementBtn.addEventListener('click', function () {
    if (subhanAllahInitialValue === 33) {
        return alert('Subhan Allah Complete. Please Fill up another one');
    }
    subhanAllahInitialValue += 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue;
})

subhanAllahDecrementBtn.addEventListener('click', function () {

    if (subhanAllahInitialValue === 0) {
        return alert('You cant added negative value');
    }

    subhanAllahInitialValue -= 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue;

})


alhamdulillahIncrementBtn.addEventListener('click', function () {
    if (alhamdulillahInitialValue === 33) {
        return alert('Alhamdulillah Complete. Please Fill up another one');
    }
    alhamdulillahInitialValue += 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
})

alhamdulillahDecrementBtn.addEventListener('click', function () {
    if (alhamdulillahInitialValue === 0) {
        return alert('You cant added negative value');
    }
    alhamdulillahInitialValue -= 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
})


allahAkberIncrementBtn.addEventListener('click', function () {
    if (allahAkberInitialValue === 34) {
        return alert('Allahu-Akber Complete. Please Fill up another one');
    }
    allahAkberInitialValue += 1;
    allahAkberDisplay.innerText = allahAkberInitialValue;
})

allahAkberDecrementBtn.addEventListener('click', function () {
    if (allahAkberInitialValue === 0) {
        return alert('You cant added negative value');
    }
    allahAkberInitialValue -= 1;
    allahAkberDisplay.innerText = allahAkberInitialValue;
})



resetBtn.addEventListener('click', function () {
    subhanAllahDisplay.innerText = 0;
    alhamdulillahDisplay.innerText = 0;
    allahAkberDisplay.innerText = 0;

    subhanAllahInitialValue = 0;
    alhamdulillahInitialValue = 0;
    allahAkberInitialValue = 0;
})