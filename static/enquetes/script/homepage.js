

function drop() {
    document.getElementById('sub-menu').style.animation = 'dropdown 0.2s '
    document.getElementById('menu').className = 'menudrop'
    document.getElementById('sub-menu').style.display = 'flex';
    if(document.getElementById('check').checked){
        document.getElementById('sub-menu').style.animation = 'dropup 0.3s '
        document.getElementById('menu').className = 'menu';
        setTimeout(() => {
            document.getElementById('sub-menu').style.display = 'none';
        }, 235)

    }
}

function drop2() {
    document.getElementById('sub-menu-dois').style.animation = 'dropdown 0.2s '
    document.getElementById('menu-dois').className = 'menudrop-dois'
    document.getElementById('sub-menu-dois').style.display = 'flex';
    if(document.getElementById('check-dois').checked){
        document.getElementById('sub-menu-dois').style.animation = 'dropup 0.3s '
        document.getElementById('menu-dois').className = 'menu-dois';
        setTimeout(() => {
            document.getElementById('sub-menu-dois').style.display = 'none';
        }, 235)


    }
}
