
function aggiorna() {
    switch (this.textContent) {
        case '0': this.textContent = '1'; break;
        case '1': this.textContent = '2'; break;
        case '2': this.textContent = '3'; break;
        case '3': this.textContent = '4'; break;
        case '4': this.textContent = '5'; break;
        case '5': this.textContent = '6'; break;
        case '6': this.textContent = '7'; break;
        case '7': this.textContent = '8'; break;
        case '8': this.textContent = '9'; break;
        case '9': this.textContent = 'A'; break;
        case 'A': this.textContent = 'B'; break;
        case 'B': this.textContent = 'C'; break;
        case 'C': this.textContent = 'D'; break;
        case 'D': this.textContent = 'E'; break;
        case 'E': this.textContent = 'F'; break;
        case 'F': this.textContent = '0'; break;
        default: this.textContent = '0'; break;
    }
}

function calcola() {
    let h1 = document.getElementById("button1").textContent;
    let h2 = document.getElementById("button2").textContent;
    let h3 = document.getElementById("button3").textContent;
    let h4 = document.getElementById("button4").textContent;

    let hexValue = h1 + h2 + h3 + h4;

    let decimale = parseInt(hexValue, 16);

    document.getElementById("calcola").textContent = decimale;
}


document.getElementById("button1").addEventListener("click", aggiorna);
document.getElementById("button2").addEventListener("click", aggiorna);
document.getElementById("button3").addEventListener("click", aggiorna);
document.getElementById("button4").addEventListener("click", aggiorna);

document.getElementById("calcola_button").addEventListener("click", calcola);