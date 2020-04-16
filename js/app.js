var buttons = {
    btnOn: {
        element: document.getElementById("on"),
        value: "on"
    },
    btnSign: {
        element: document.getElementById("sign"),
        value: "sign"
    },
    btnSqrt: {
        element: document.getElementById("sqrt"),
        value: "sqrt"
    },
    btnDivide: {
        element: document.getElementById("divide"),
        value: "divide"
    },
    btnMultiply: {
        element: document.getElementById("multiply"),
        value: "multiply"
    },
    btnSubstract: {
        element: document.getElementById("substract"),
        value: "substract"
    },
    btnAdd: {
        element: document.getElementById("add"),
        value: "add"
    },
    btnEquals: {
        element: document.getElementById("equals"),
        value: "equals"
    },
    btnPoint: {
        element: document.getElementById("point"),
        value: "point"
    },
    Btn0: {
        element: document.getElementById("0"),
        value: 0
    },
    btn1: {
        element: document.getElementById("1"),
        value: 1
    },
    btn2: {
        element: document.getElementById("2"),
        value: 2
    },
    btn3: {
        element: document.getElementById("3"),
        value: 3
    },
    btn4: {
        element: document.getElementById("4"),
        value: 4
    },
    btn5: {
        element: document.getElementById("5"),
        value: 5
    },
    btn6: {
        element: document.getElementById("6"),
        value: 6
    },
    btn7: {
        element: document.getElementById("7"),
        value: 7
    },
    btn8: {
        element: document.getElementById("8"),
        value: 8
    },
    btn9: {
        element: document.getElementById("9"),
        value: 9
    }
}

var display = document.getElementById("display")

function removeChar(toRemove, str) {
    let reg = new RegExp(toRemove)
    return str.replace(reg, '')
}

function sendKey(key) {
    if (((display.innerHTML != "ERR") && (display.innerHTML != "DIV0")) || key == "on") {
        if (isNumber(key)) {
            if (display.innerHTML.length < 8) {
                if (display.innerHTML == 0) {
                    display.innerHTML = key;
                } else {
                    display.innerHTML += key;
                }
            }
        } else {
            if (key == "on") {
                display.innerHTML = 0;
            } else if (key == "sign") {
                if (display.innerHTML.includes("-")) {
                    display.innerHTML = removeChar("-", display.innerHTML)
                } else {
                    if ((display.innerHTML != 0) && (display.innerHTML != "")) {
                        display.innerHTML = "-" + display.innerHTML
                    }
                }
            } else if (key == "sqrt") {
                var number = parseFloat(display.innerHTML)
                if (number >= 0) {
                    var sqrt = Math.sqrt(number).toString().substring(0, 9)
                } else {
                    sqrt = "ERR"
                }
                display.innerHTML = sqrt
            } else if (key == "divide") {
                display.innerHTML = ""
            } else if (key == "multiply") {
                display.innerHTML = ""
            } else if (key == "substract") {
                display.innerHTML = ""
            } else if (key == "add") {
                display.innerHTML = ""
            } else if (key == "equals") {
                display.innerHTML = "RESULTADO"
            } else if (key == "point") {
                if (!display.innerHTML.includes(".")) {
                    display.innerHTML += "."
                }
            } else {
                console.log("You should never reach here!")
            }
        }
    }
}

function btnSmall(btn) {
    btn.style.transform = "scale(0.9)";
}

function btnNormal(btn) {
    btn.style.transform = "scale(1)";
}

function btnBig(btn) {
    btn.style.transform = "scale(1.02)";
}

for (const prop in buttons) {
    const btn = buttons[prop].element
    const val = buttons[prop].value
    btn.addEventListener(
        "mouseup",
        function() {
            btnNormal(btn);
            sendKey(val);
        });
    btn.addEventListener(
        "mouseleave",
        function() {
            btnNormal(btn)
        });
    btn.addEventListener(
        "mousedown",
        function() {
            btnSmall(btn)
        });
    btn.addEventListener(
        "mouseenter",
        function() {
            btnBig(btn)
        });
    btn.addEventListener(
        "mouseout",
        function() {
            btnNormal(btn)
        });
}