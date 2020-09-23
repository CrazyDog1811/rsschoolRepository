const numbers = document.querySelectorAll('.number'),
    operators = document.querySelectorAll('.operator'),
    clearBtns = document.querySelectorAll('.clear-btn'),
    decimalBtn = document.getElementById('decimal'),
    display = document.getElementById('display');

let MemoryCurrentNumber = 0,
    MemoryNewNumber = false,
    MemoryPendingOperation = '';

for (let i = 0; i < numbers.length; i++) {

    const number = numbers[i];

    number.addEventListener('click', function (e) {
        numberPress(e.target.textContent);
    });

}

for (let i = 0; i < operators.length; i++) {

    const operator = operators[i];

    operator.addEventListener('click', function (e) {
        operation(e.target.textContent);
    });

}

for (let i = 0; i < clearBtns.length; i++) {

    const clearBtn = clearBtns[i];

    clearBtn.addEventListener('click', function (e) {
        clear(e.target.textContent);
    });

}

decimalBtn.addEventListener('click', function (e) {
    decimal(e.target.textContent);
});

function numberPress(num) {

    if (MemoryNewNumber) {

        display.value = num;
        MemoryNewNumber = false;

    } else {

        if (display.value === '0') {
            display.value = num;
        } else {
            display.value += num;
        }

    }


}

function clear(id) {

    if (id === 'c') {

        display.value = '0';
        MemoryNewNumber = true;
        memoryCurrentNumber = 0;
        MemoryPendingOperation = '';

    } else if (id === 'ce') {

        display.value = '0';
        MemoryNewNumber = true;

    }

}

function operation(oper) {

    let localOperationMemory = display.value;

    if (MemoryNewNumber && MemoryPendingOperation !== '=') {
        display.value = MemoryCurrentNumber;
    } else {
        MemoryNewNumber = true;

        if (MemoryPendingOperation === '+') {
            MemoryCurrentNumber += +localOperationMemory;
        } else if (MemoryPendingOperation === '-') {
            MemoryCurrentNumber -= +localOperationMemory;
        } else if (MemoryPendingOperation === '/') {
            MemoryCurrentNumber /= +localOperationMemory;
        } else if (MemoryPendingOperation === '*') {
            MemoryCurrentNumber *= +localOperationMemory;
        } else {
            MemoryCurrentNumber = +localOperationMemory;
        }

        display.value = MemoryCurrentNumber;
        MemoryPendingOperation = oper;
    }

}

function decimal(params) {

    let localDecimalMemory = display.value;

    if (MemoryNewNumber) {

        localDecimalMemory = '0.';
        MemoryNewNumber = false;

    } else {

        if (localDecimalMemory.indexOf('.') === -1) {
            localDecimalMemory += '.';
        }
    }
    display.value = localDecimalMemory;
}
