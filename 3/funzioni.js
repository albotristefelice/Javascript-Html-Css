

let x = 2;

function riconosci() {
    let bottonir = document.getElementsByName("base");
    for (let i = 0; i < bottonir.length; i++) {
        if (bottonir[i].checked) {
            let nuovab = bottonir[i].value;
            document.getElementById("titolo").textContent = nuovab;
        }
    }
    aggiornaX();
    reset();
}

function aggiornaX() {
    let titoloX = document.getElementById("titolo").textContent;
    switch (titoloX) {
        case "binario":
            x = 2; break;
        case "ottale":
            x = 8; break;
        case "esadecimale":
            x = 16; break;
    }
}

function reset() {
    document.getElementById("button1").textContent = "0";
    document.getElementById("button2").textContent = "0";
    document.getElementById("button3").textContent = "0";
    document.getElementById("button4").textContent = "0";
    document.getElementById("risultato-tradotto").textContent = "0";
}

function cambiaCifra() {
    switch (x) {
        case 2:
            switch (this.textContent) {
                case "0": this.textContent = "1"; break;
                case "1": this.textContent = "0"; break;} break;

        case 8:
            switch (this.textContent) {
                case "0": this.textContent = "1"; break;
                case "1": this.textContent = "2"; break;
                case "2": this.textContent = "3"; break;
                case "3": this.textContent = "4"; break;
                case "4": this.textContent = "5"; break;
                case "5": this.textContent = "6"; break;
                case "6": this.textContent = "7"; break;
                case "7": this.textContent = "0"; break;} break;

        case 16:
            switch (this.textContent) {
                case "0": this.textContent = "1"; break;
                case "1": this.textContent = "2"; break;
                case "2": this.textContent = "3"; break;
                case "3": this.textContent = "4"; break;
                case "4": this.textContent = "5"; break;
                case "5": this.textContent = "6"; break;
                case "6": this.textContent = "7"; break;
                case "7": this.textContent = "8"; break;
                case "8": this.textContent = "9"; break;
                case "9": this.textContent = "A"; break;
                case "A": this.textContent = "B"; break;
                case "B": this.textContent = "C"; break;
                case "C": this.textContent = "D"; break;
                case "D": this.textContent = "E"; break;
                case "E": this.textContent = "F"; break;
                case "F": this.textContent = "0"; break;}
    }
}

function calcola() {
    let b1 = document.getElementById("button1").textContent;
    let b2 = document.getElementById("button2").textContent;
    let b3 = document.getElementById("button3").textContent;
    let b4 = document.getElementById("button4").textContent;
    let base = x;

    if (base === 16) {
        if (b1 === "A") b1 = 10;
        if (b1 === "B") b1 = 11;
        if (b1 === "C") b1 = 12;
        if (b1 === "D") b1 = 13;
        if (b1 === "E") b1 = 14;
        if (b1 === "F") b1 = 15;

        if (b2 === "A") b2 = 10;
        if (b2 === "B") b2 = 11;
        if (b2 === "C") b2 = 12;
        if (b2 === "D") b2 = 13;
        if (b2 === "E") b2 = 14;
        if (b2 === "F") b2 = 15;

        if (b3 === "A") b3 = 10;
        if (b3 === "B") b3 = 11;
        if (b3 === "C") b3 = 12;
        if (b3 === "D") b3 = 13;
        if (b3 === "E") b3 = 14;
        if (b3 === "F") b3 = 15;

        if (b4 === "A") b4 = 10;
        if (b4 === "B") b4 = 11;
        if (b4 === "C") b4 = 12;
        if (b4 === "D") b4 = 13;
        if (b4 === "E") b4 = 14;
        if (b4 === "F") b4 = 15;
    }
    let decimale = (b1 * base * 3) + (b2 * base * 2) + (b3 * base * 1) + (b4 * base * 0);
    document.getElementById("risultato-tradotto").textContent = decimale;
}

document.getElementById("radio1").addEventListener('change', riconosci);
document.getElementById("radio2").addEventListener('change', riconosci);
document.getElementById("radio3").addEventListener('change', riconosci);
document.getElementById("button1").addEventListener('click', cambiaCifra);
document.getElementById("button2").addEventListener('click', cambiaCifra);
document.getElementById("button3").addEventListener('click', cambiaCifra);
document.getElementById("button4").addEventListener('click', cambiaCifra);
document.getElementById("convert-button").addEventListener('click', calcola);