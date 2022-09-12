let caps = 0

function Cap() {
    if (caps === 0) {
        caps = 1
        console.log("caps on")
        document.getElementById("capsLock").style.backgroundColor = "#29465B"
    } else {
        caps = 0
        document.getElementById("capsLock").style.backgroundColor = "#6B8BA4"
        console.log("caps off")
    }
}

function callBackspace() {
    let str = text.innerText
    text.innerText = str.substring(0, (str.length - 1))
}

function spacebar() {
    console.log("I was clicked")
    let a = '&nbsp'
    document.getElementById("text").innerHTML += a
}

function enter() {
    // console.log("I was clicked")
    document.getElementById("text").innerHTML += "<br>"
}

function callItQ() {
    if (caps === 1) {
        document.getElementById("text").innerText += document.getElementById("box1").innerText
    } else {
        document.getElementById("text").innerText += document.getElementById("box1").innerText.toLowerCase()
    }
}

function callItW() {
    if (caps === 1) {
        document.getElementById("text").innerText += document.getElementById("box2").innerText
    } else {
        document.getElementById("text").innerText += document.getElementById("box2").innerText.toLowerCase()
    }
}

function callItE() {
    if (caps === 1) {
        document.getElementById("text").innerText += document.getElementById("box3").innerText
    } else {
        document.getElementById("text").innerText += document.getElementById("box3").innerText.toLowerCase()
    }
}

function callItR() {
    if (caps === 1) {
        document.getElementById("text").innerText += document.getElementById("box4").innerText
    } else {
        document.getElementById("text").innerText += document.getElementById("box4").innerText.toLowerCase()
    }
}

function callItT() {
    if (caps === 1) {
        document.getElementById("text").innerText += document.getElementById("box5").innerText
    } else {
        document.getElementById("text").innerText += document.getElementById("box5").innerText.toLowerCase()
    }
}

function callItY() {
    if (caps === 1) {
        document.getElementById("text").innerText += document.getElementById("box6").innerText
    } else {
        document.getElementById("text").innerText += document.getElementById("box6").innerText.toLowerCase()
    }
}

function callItU() {
    if (caps === 1) {
        document.getElementById("text").innerText += document.getElementById("box7").innerText
    } else {
        document.getElementById("text").innerText += document.getElementById("box7").innerText.toLowerCase()
    }
}

function callItI() {
    if (caps === 1) {
        document.getElementById("text").innerText += document.getElementById("box8").innerText
    } else {
        document.getElementById("text").innerText += document.getElementById("box8").innerText.toLowerCase()
    }
}

function callItO() {
    if (caps === 1) {
        document.getElementById("text").innerText += document.getElementById("box9").innerText
    } else {
        document.getElementById("text").innerText += document.getElementById("box9").innerText.toLowerCase()
    }
}

function callItP() {
    if (caps === 1) {
        document.getElementById("text").innerText += document.getElementById("box10").innerText
    } else {
        document.getElementById("text").innerText += document.getElementById("box10").innerText.toLowerCase()
    }
}

function callItA() {
    if (caps === 1) {
        document.getElementById("text").innerText += document.getElementById("box11").innerText
    } else {
        document.getElementById("text").innerText += document.getElementById("box11").innerText.toLowerCase()
    }
}

function callItS() {
    if (caps === 1) {
        document.getElementById("text").innerText += document.getElementById("box12").innerText
    } else {
        document.getElementById("text").innerText += document.getElementById("box12").innerText.toLowerCase()
    }
}

function callItD() {
    if (caps === 1) {
        document.getElementById("text").innerText += document.getElementById("box13").innerText
    } else {
        document.getElementById("text").innerText += document.getElementById("box13").innerText.toLowerCase()
    }
}

function callItF() {
    if (caps === 1) {
        document.getElementById("text").innerText += document.getElementById("box14").innerText
    } else {
        document.getElementById("text").innerText += document.getElementById("box14").innerText.toLowerCase()
    }
}

function callItG() {
    if (caps === 1) {
        document.getElementById("text").innerText += document.getElementById("box15").innerText
    } else {
        document.getElementById("text").innerText += document.getElementById("box15").innerText.toLowerCase()
    }
}

function callItH() {
    if (caps === 1) {
        document.getElementById("text").innerText += document.getElementById("box16").innerText
    } else {
        document.getElementById("text").innerText += document.getElementById("box16").innerText.toLowerCase()
    }
}

function callItJ() {
    if (caps === 1) {
        document.getElementById("text").innerText += document.getElementById("box17").innerText
    } else {
        document.getElementById("text").innerText += document.getElementById("box17").innerText.toLowerCase()
    }
}

function callItK() {
    if (caps === 1) {
        document.getElementById("text").innerText += document.getElementById("box18").innerText
    } else {
        document.getElementById("text").innerText += document.getElementById("box18").innerText.toLowerCase()
    }
}

function callItL() {
    if (caps === 1) {
        document.getElementById("text").innerText += document.getElementById("box19").innerText
    } else {
        document.getElementById("text").innerText += document.getElementById("box19").innerText.toLowerCase()
    }
}

function callItZ() {
    if (caps === 1) {
        document.getElementById("text").innerText += document.getElementById("box20").innerText
    } else {
        document.getElementById("text").innerText += document.getElementById("box20").innerText.toLowerCase()
    }
}

function callItX() {
    if (caps === 1) {
        document.getElementById("text").innerText += document.getElementById("box21").innerText
    } else {
        document.getElementById("text").innerText += document.getElementById("box21").innerText.toLowerCase()
    }
}

function callItC() {
    if (caps === 1) {
        document.getElementById("text").innerText += document.getElementById("box22").innerText
    } else {
        document.getElementById("text").innerText += document.getElementById("box22").innerText.toLowerCase()
    }
}

function callItV() {
    if (caps === 1) {
        document.getElementById("text").innerText += document.getElementById("box23").innerText
    } else {
        document.getElementById("text").innerText += document.getElementById("box23").innerText.toLowerCase()
    }
}

function callItB() {
    if (caps === 1) {
        document.getElementById("text").innerText += document.getElementById("box24").innerText
    } else {
        document.getElementById("text").innerText += document.getElementById("box24").innerText.toLowerCase()
    }
}

function callItN() {
    if (caps === 1) {
        document.getElementById("text").innerText += document.getElementById("box25").innerText
    } else {
        document.getElementById("text").innerText += document.getElementById("box25").innerText.toLowerCase()
    }
}

function callItM() {
    if (caps === 1) {
        document.getElementById("text").innerText += document.getElementById("box26").innerText
    } else {
        document.getElementById("text").innerText += document.getElementById("box26").innerText.toLowerCase()
    }
}

function specialChar1() {
    if (caps === 1) {
        document.getElementById("text").innerText += ","
    } else {
        document.getElementById("text").innerText += "!"
    }
}

function specialChar2() {
    if (caps === 1) {
        document.getElementById("text").innerText += "?"
    } else {
        document.getElementById("text").innerText += "."
    }
}

function specialChar3() {
    if (caps === 1) {
        document.getElementById("text").innerText += "^"
    } else {
        document.getElementById("text").innerText += "`"
    }
}

function nums() {
    document.getElementById("box1").innerText = 1
    document.getElementById("box2").innerText = 2
    document.getElementById("box3").innerText = 3
    document.getElementById("box4").innerText = 4
    document.getElementById("box5").innerText = 5
    document.getElementById("box6").innerText = 6
    document.getElementById("box7").innerText = 7
    document.getElementById("box8").innerText = 8
    document.getElementById("box9").innerText = 9
    document.getElementById("box10").innerText = 0
    document.getElementById("box11").innerText = "/"
    document.getElementById("box12").innerText = "*"
    document.getElementById("box13").innerText = "+"
    document.getElementById("box14").innerText = "-"
    document.getElementById("box15").innerText = "&"
    document.getElementById("box16").innerText = "%"
    document.getElementById("box17").innerText = "#"
    document.getElementById("box18").innerText = "@"
    document.getElementById("box19").innerText = "("
    document.getElementById("box20").innerText = ")"
    document.getElementById("box21").innerText = "="
    document.getElementById("box22").innerText = "~"
    document.getElementById("box23").innerText = "<"
    document.getElementById("box24").innerText = ">"
    document.getElementById("box25").innerText = "|"
    document.getElementById("box26").innerText = "^"
    document.getElementById("box27").innerText = "! ,"
    document.getElementById("box28").innerText = ". ?"
        // document.getElementById("numm").innerText = "@gmail.com"
}

function print() {
    document.getElementById("text").innerText += "@gmail.com"
}

function normalState() {
    document.getElementById("box1").innerText = "Q"
    document.getElementById("box2").innerText = "W"
    document.getElementById("box3").innerText = "E"
    document.getElementById("box4").innerText = "R"
    document.getElementById("box5").innerText = "T"
    document.getElementById("box6").innerText = "Y"
    document.getElementById("box7").innerText = "U"
    document.getElementById("box8").innerText = "I"
    document.getElementById("box9").innerText = "O"
    document.getElementById("box10").innerText = "P"
    document.getElementById("box11").innerText = "A"
    document.getElementById("box12").innerText = "S"
    document.getElementById("box13").innerText = "D"
    document.getElementById("box14").innerText = "F"
    document.getElementById("box15").innerText = "G"
    document.getElementById("box16").innerText = "H"
    document.getElementById("box17").innerText = "J"
    document.getElementById("box18").innerText = "K"
    document.getElementById("box19").innerText = "L"
    document.getElementById("box20").innerText = "Z"
    document.getElementById("box21").innerText = "X"
    document.getElementById("box22").innerText = "C"
    document.getElementById("box23").innerText = "V"
    document.getElementById("box24").innerText = "B"
    document.getElementById("box25").innerText = "N"
    document.getElementById("box26").innerText = "M"
}
document.addEventListener("keypress", event => {
    document.getElementById("text").innerText += event.key
})
document.addEventListener("keydown", event => {
        if (event.key === "Backspace") {
            callBackspace()
        }
    })
    // document.addEventListener("keydown", event => {
    //     if (event.key == "Enter") {
    //         enter()
    //     }
    // })
document.body.onkeyup = function(e) {
    if (e.key == " " ||
        e.code == "Space" ||
        e.keyCode == 32
    ) {
        spacebar()
    }
}
document.addEventListener("keyup", event => {
    if (event.key == "Enter") {
        enter()
    }
})
