function contar(){
    //pegando os ids dos inputs
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    //condição caso a pessoa não digite nada
    if(num.value.length == 0){
        window.alert('[ERRO] Digite um número')
    }else {
        //transformando o valor da variável num em número
        let n = Number(num.value)

        //comando para limpar quando for solicitado um novo número
        tab.innerHTML = ''
        
        for(let c = 1; c <=10; c++){
            //criando um elemento option no select
            let item = document.createElement('option')

            //texto que vai aparecer com uma operação de vezes
            item.text = `${n} x ${c} = ${n * c}`

            //adicionando um value para o option
            item.value = `tab${c}`
            
            //adicionando o item ao tab
            tab.appendChild(item)
        }
    }

}