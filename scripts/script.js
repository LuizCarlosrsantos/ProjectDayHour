function carregar() {
    var msg = window.document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = "./src/assets/img/manha.png";
        document.body.style.background = '#8179ac'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = "./src/assets/img/tarde.png";
        document.body.style.background = '#e27d47'
    } else {
        // BOA NOITE!
        img.src = "./src/assets/img/noite.png";
        document.body.style.background = '#0f6ca5'
    }
}
