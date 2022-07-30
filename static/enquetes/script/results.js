var votos = new Array();
var total = 0;
var parcial = 0;


for(var i = 1; i < 5; i++){
    votos.push(JSON.parse(document.getElementById(i).value))
}

for(var i = 0; i < votos.length; i++){
       total += votos[i]
}

function porcentagem(votos,questao) {
    parcial = votos*100/total
    document.getElementById("p"+questao).innerHTML = Math.round(parcial);
}



function drop1() {
    if(document.getElementById('1').checked == false){
        document.getElementById('lb1').className= "labeldrop";
        document.getElementById('dados1').style.display = 'flex'
        document.getElementById('dados2').style.display = 'none'
        document.getElementById('dados3').style.display = 'none'
        document.getElementById('dados4').style.display = 'none'
        document.getElementById('lb2').className= "label";
        document.getElementById('lb3').className= "label";
        document.getElementById('lb4').className= "label";
    }
}

function drop2() {
    if(document.getElementById('2').checked == false){
        document.getElementById('lb2').className= "labeldrop";
        document.getElementById('dados2').style.display = 'flex'
        document.getElementById('dados1').style.display = 'none'
        document.getElementById('dados3').style.display = 'none'
        document.getElementById('dados4').style.display = 'none'
        document.getElementById('lb1').className= "label";
        document.getElementById('lb3').className= "label";
        document.getElementById('lb4').className= "label";
    }
}

function drop3() {
    if(document.getElementById('3').checked == false){
        document.getElementById('lb3').className= "labeldrop";
        document.getElementById('dados3').style.display = 'flex'
        document.getElementById('dados1').style.display = 'none'
        document.getElementById('dados2').style.display = 'none'
        document.getElementById('dados4').style.display = 'none'
        document.getElementById('lb1').className= "label";
        document.getElementById('lb2').className= "label";
        document.getElementById('lb4').className= "label";
    }
}

function drop4() {
if(document.getElementById('4').checked == false){
        document.getElementById('lb4').className= "labeldrop";
        document.getElementById('dados4').style.display = 'flex'
        document.getElementById('dados1').style.display = 'none'
        document.getElementById('dados2').style.display = 'none'
        document.getElementById('dados3').style.display = 'none'
        document.getElementById('lb1').className= "label";
        document.getElementById('lb2').className= "label";
        document.getElementById('lb3').className= "label";
    }
}

function teste() {
    console.log('asdasd')
}