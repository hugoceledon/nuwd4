var Calculator = {
    init: function() {
        this.display = document.getElementById("display")
        this.resetValues()
        this.createButtons()
        this.animateButtons()
    },
    resetValues: function() {
        this.numbers = []
        this.operators = []
    },
    createButtons: function() {
        this.buttons = {}
        var Elements = document.getElementsByClassName("tecla")
        for (var i = 0; i < Elements.length; i++) {
            var id = Elements[i].id
            if (isNaN(parseFloat(id))) {
                this.buttons["btn" + capitalize(id)] = {
                    element: document.getElementById(id),
                    value: id
                }
            } else {
                this.buttons["btn" + id] = {
                    element: document.getElementById(id.toString()),
                    value: parseFloat(id)
                }
            }
        }
    },
    animateButtons: function() {
        var self = this
        for (const prop in this.buttons) {
            const btn = this.buttons[prop].element
            const val = this.buttons[prop].value
            btn.addEventListener(
                "mouseup",
                function() {
                    self.btnNormal(btn);
                    self.sendKey(val);
                });
            btn.addEventListener(
                "mouseleave",
                function() {
                    self.btnNormal(btn)
                });
            btn.addEventListener(
                "mousedown",
                function() {
                    self.btnSmall(btn)
                });
            btn.addEventListener(
                "mouseenter",
                function() {
                    self.btnBig(btn)
                });
            btn.addEventListener(
                "mouseout",
                function() {
                    self.btnNormal(btn)
                });
        }
    },
    btnSmall: function(btn) {
        btn.style.transform = "scale(0.9)";
    },
    btnNormal: function(btn) {
        btn.style.transform = "scale(1)";
    },
    btnBig: function(btn) {
        btn.style.transform = "scale(1.02)";
    },
    sendKey: function(key) {
        if (((this.display.innerHTML != "ERR") && (this.display.innerHTML != "DIV-0")) || key == "on") {
            if (isNumber(key)) {
                if (this.display.innerHTML.length < 8) {
                    if ((this.display.innerHTML === "0") && (!this.display.innerHTML.includes("0."))) {
                        this.display.innerHTML = key;
                    } else {
                        this.display.innerHTML += key;
                    }
                }
            } else {
                if (key == "on") {
                    this.display.innerHTML = 0;
                } else if (key == "sign") {
                    if (this.display.innerHTML.includes("-")) {
                        this.display.innerHTML = removeChar("-", this.display.innerHTML)
                    } else {
                        if ((this.display.innerHTML != 0) && (this.display.innerHTML != "")) {
                            this.display.innerHTML = "-" + this.display.innerHTML
                        }
                    }
                } else if (key == "sqrt") {
                    const err = false
                    if (this.display.innerHTML == "") {
                        const err = true
                    }
                    var number = parseFloat(this.display.innerHTML)
                    if ((number >= 0) && !err) {
                        var sqrt = Math.sqrt(number).toString().substring(0, 9)
                    } else {
                        sqrt = "ERR"
                    }
                    this.display.innerHTML = sqrt
                    this.resetValues()
                } else if (key == "point") {
                    if (!this.display.innerHTML.includes(".")) {
                        if (this.display.innerHTML == "") {
                            this.display.innerHTML = "0"
                        }
                        this.display.innerHTML += "."
                    }
                } else if (key == "equals") {
                    if (this.display.innerHTML != "") {
                        this.numbers.push(parseFloat(this.display.innerHTML))
                        const Result = this.calculate()
                        this.display.innerHTML = Result.toString().substring(0, 9)
                        this.resetValues()
                    }
                } else {
                    if (this.display.innerHTML != "") {
                        this.operators.push(key)
                        this.numbers.push(parseFloat(this.display.innerHTML))
                        this.display.innerHTML = ""
                    } else {
                        this.operators.pop()
                        this.operators.push(key)
                    }
                }
            }
        }
    },
    calculate: function() {
        var self = this
        var a = this.numbers[0]
        for (var i = 1; i < this.numbers.length; i++) {
            var b = this.numbers[i]
            var a = self.operate(this.operators[i - 1], a, b)
            if (!isFinite(a)) {
                return "DIV-0"
            }
        }
        return a
    },
    operate: function(operator, a, b) {
        switch (operator) {
            case "multiply":
                return a * b
            case "divide":
                return a / b
            case "add":
                return a + b
            case "substract":
                return a - b
            default:
                return "ERR"
        }
    }
}

Calculator.init()