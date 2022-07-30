
function check1() {
    if(document.getElementById('choice1').checked == false)
        document.getElementById('1').className = 'labelchecked'
        document.getElementById('2').className = 'label'
        document.getElementById('3').className = 'label'
        document.getElementById('4').className = 'label'
}

function check2() {
    if (document.getElementById('choice2').checked == false){
        document.getElementById('2').className = 'labelchecked';
        document.getElementById('1').className = 'label'
        document.getElementById('3').className = 'label'
        document.getElementById('4').className = 'label'
    }    
}

function check3() {
    if (document.getElementById('choice3').checked == false){
        document.getElementById('3').className = 'labelchecked';
        document.getElementById('1').className = 'label'
        document.getElementById('2').className = 'label'
        document.getElementById('4').className = 'label'
    }    
}

function check4() {
    if (document.getElementById('choice4').checked == false){
        document.getElementById('4').className = 'labelchecked';
        document.getElementById('1').className = 'label'
        document.getElementById('2').className = 'label'
        document.getElementById('3').className = 'label'
    }    
}