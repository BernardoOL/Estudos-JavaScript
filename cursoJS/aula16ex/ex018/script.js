//Pegando os IDs
let num = document.getElementById('txtn')
let tab = document.getElementById('tab')
let res = document.getElementById('res')
//Criação do vetor
let vetor = []

//Função para saber se é um número ou não
function isNumero(n){
    if(Number(n) >=1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}

//Função para saber se o número já contem na lista
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

//função adicionar um número a lista
function adicionar(){
    //Se for um número e não estiver na lista - adiciona
    if(isNumero(num.value) && !inLista(num.value, vetor)){
        //coloca um número novo no vetor
        vetor.push(Number(num.value))
        //criando um novo elemento option
        let item = document.createElement('option')
        //colocando texto dentro do elemento option
        item.text = `Número ${num.value} adicionado`
        //adicionando value no option
        item.value = `tab${num.value}`
        //adicionando o option no select
        tab.appendChild(item)
        //comando para limpar o campo res quando for solicitado um novo número para adicionar
        res.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }

    num.value = ''
    //comando para limpar o input do número
    num.focus()
}

function finalizar(){
    //se não digitar um número aparece um alert
    if(vetor.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        //criando as variáveis para aparecer no tela
        let totalElementos = vetor.length
        let maior = vetor[0]
        let menor = vetor[0]
        let soma = 0
        let media = 0

        //comando para fazer a soma, decidir o maior e menor
        for(let pos in vetor){
            soma += vetor[pos]

            if(vetor[pos] > maior){
                maior = vetor[pos]
            }
            if(vetor[pos] < menor){
                menor = vetor[pos]
            }
        }
        //media dos elementos do vetor
        media = soma / totalElementos
        //Resultado
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${totalElementos} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}



