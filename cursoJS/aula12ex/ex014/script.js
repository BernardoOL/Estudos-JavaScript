//função carregar com onload
function carregar(){
    //pegando a div mensagme
    var msg = window.document.getElementById('msg')
    //pegando a div imagem
    var img = window.document.getElementById('imagem')
    //criando variável data
    var data = new Date()
    //Criando uma variável hora, pegando a hora a partir do new DATE()
    var hora = data.getHours()
    
    //mensagem para aparecer na tela
    msg.innerHTML = `Agora são ${hora} horas.`

    //Condição para mensagem/foto e cor do mini site
    if(hora >= 0 && hora < 12){
        //bom dia
        img.src= 'fotos/fotomanha.png'
        document.body.style.background = '#e3b762'
    }else if(hora < 18){
        //Boa tarde
        img.src= 'fotos/fototarde.png'
        document.body.style.background = '#9f644b'
    }else{
        //boa noite
        img.src= 'fotos/fotonoite.png'
        document.body.style.background = '#002757'
    }
}

