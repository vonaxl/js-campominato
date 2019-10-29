// var pc and player array list 
var pc=[];
// random pc number
function pcRandom() {
    x=1+Math.floor(Math.random() * 100);
}
// check if the x value is already on the list
function verifica() {
    var y;
    for (var i = 0 -1; i < pc.length; i++) {
        if (x==pc[i]) {
        y=1;
        }
    }
    if (y==1) {
        console.log("numero gia presente");
    }else {
        pc.push(x);
    }
}
// push number 16 times
function check16() {
    var i = 0;
    while (i<16) {
        pcRandom();
        verifica();
        i++
    }
}
// redo the function:check16 till we don't get 16 different numbers
while (pc.length<16) {
    pc=[];
    check16();
}
console.log("BOMB NUMBERS ARE : "+pc);

var y,z=0;
function winner(){
    p1 = parseInt(prompt("Inserisci un numero finche non muori"));
    for (var i = 0 -1; i < pc.length; i++) {
        if (p1==pc[i]) {
        y=1;
        }
    }
    if (y==1) {
        alert("Hai perso")
    }else {
        z++;
        winner();
    }
}

winner();
// if 1 of player value = 1 of pc random value. the game ends if not then continue asking player to put a number

console.log("Punteggio player = "+z);