//função de verificar do butão
function verificar(){
    //variável com data
    var data = new Date()

    //pegando o ano com a data
    var ano = data.getFullYear()

    //pegando o ano que foi digitado
    var fano = document.getElementById('txtano')

    //pegando onde está a div res
    var res = document.getElementById('res')

    //verificando se o ano de nascimento é válido
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        //pegando o sexo selecionado no programa
        var fsexo = document.getElementsByName('radsex')
        //fazendo a conta da idade para dar a idade exata
        var idade = ano - Number(fano.value)
        //iniciando uma variável genero
        var genero = ''
        //criando um elemento para idade
        var img = document.createElement('img')
        //setando um atributo com id e nome
        img.setAttribute('id', 'foto')

        //condição para mostrar as fotos
        if(fsexo[0].checked){
            genero = 'Homem'
            if(idade > 0 && idade <10){
                //criança
                img.setAttribute('src', 'fotos/foto-bebe-m.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'fotos/foto-jovem-m.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'fotos/foto-adulto-m.png')
            }else{
                //idoso
                img.setAttribute('src', 'fotos/foto-idoso-m.png')
            }
        }else if(fsexo[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <10){
                //criança
                img.setAttribute('src', 'fotos/foto-bebe-f.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'fotos/foto-jovem-f.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'fotos/foto-adulto-f.png')
            }else{
                //idoso
                img.setAttribute('src', 'fotos/foto-idoso-f.png')
            }
        }

        //style da div res
        res.style.textAlign = 'center'
        //escrevendo na tela
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        //mostrando a imagem na tela
        res.appendChild(img)

    }
}