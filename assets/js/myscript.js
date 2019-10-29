// var pc and player array list 
var pc=[];
var pNums=[];
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

// player value verification 
function pVerifica() {
    var y;
    for (var i = 0 -1; i < pNums.length && i<85 ; i++) {
        if (p1==pNums[i]) {
            y=1;
        }
    }
    if (y==1) {
        alert("numero gia presente , cambia numero");
    }else {
        pNums.push(p1);
    }
}

// ask the user a value from 1 to 100 till he cancelAnimationFrame, in case he go over 100 the script stops and if he put the samme number he get noticed
var y,z=0;
function winner(){
    p1 = parseInt(prompt("Inserisci un numero da 1 a 100 finche non muori"));
    pVerifica();
    if (p1>=1 && p1<=100) {
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
        
    }else{
        alert("Ti ho detto da 1 a 100, ricarica la pagina")
    }
}

winner();
// if 1 of player value = 1 of pc random value. the game ends if not then continue asking player to put a number
console.log(pNums);

console.log("BOMB NUMBERS ARE : "+pc);
console.log("Punteggio player = "+z);