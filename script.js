
let nomeNotaFiscal1 = null
let valorNotaFiscal1 = null

let nomeNotaFiscal2 = null
let valorNotaFiscal2 = null

let nomeNotaFiscal3 = null
let valorNotaFiscal3 = null

let valorTotal 


function selecionadoPrato(prato){
    const selecao1 = document.querySelector('.carrossel-prato .selecionado')
    const check = document.querySelector('.carrossel-prato .checkbox ion-icon')

    if(selecao1!== null){
        selecao1.classList.toggle('selecionado') 
        check.classList.toggle('off')        
    }
    
    prato.classList.toggle('selecionado')
    check.classList.toggle('off')    
    botaoPedidoFinalizado()

    const nomePrato = document.querySelector('.carrossel-prato .selecionado h3')
    const valorPrato = document.querySelector('.carrossel-prato .selecionado span')


     nomeNotaFiscal1 = document.querySelector('.notaFiscalPratoNome')
     valorNotaFiscal1 = document.querySelector('.notaFiscalPratoValor')

    nomeNotaFiscal1.innerHTML = nomePrato.innerHTML
    valorNotaFiscal1.innerHTML = valorPrato.innerHTML
}

function selecionadoBebida(bebida){
    const selecao2 = document.querySelector('.carrossel-bebida .selecionado')

    if(selecao2 != null){
        selecao2.classList.toggle('selecionado')        
    }

    bebida.classList.toggle('selecionado')
    botaoPedidoFinalizado()

    const nomeBebida = document.querySelector('.carrossel-bebida .selecionado h3')
    const valorBebida = document.querySelector('.carrossel-bebida .selecionado span')


     nomeNotaFiscal2 = document.querySelector('.notaFiscalBebidaNome')
     valorNotaFiscal2 = document.querySelector('.notaFiscalBebidaValor')

    nomeNotaFiscal2.innerHTML = nomeBebida.innerHTML
    valorNotaFiscal2.innerHTML = valorBebida.innerHTML

}

function selecionadoSobremesa(sobremesa){
    const selecao3 = document.querySelector('.carrossel-sobremesa .selecionado')

    if(selecao3 != null){
        selecao3.classList.toggle('selecionado')        
    }

    sobremesa.classList.toggle('selecionado')
    botaoPedidoFinalizado()

    const nomeSobremesa = document.querySelector('.carrossel-sobremesa .selecionado h3')
    const valorSobremesa = document.querySelector('.carrossel-sobremesa .selecionado span')


     nomeNotaFiscal3 = document.querySelector('.notaFiscalSobremesaNome')
     valorNotaFiscal3 = document.querySelector('.notaFiscalSobremesaValor')

    nomeNotaFiscal3.innerHTML = nomeSobremesa.innerHTML
    valorNotaFiscal3.innerHTML = valorSobremesa.innerHTML
}
let tokenFinalizado = false

function botaoPedidoFinalizado(){
    const selecao1 = document.querySelector('.carrossel-prato .selecionado')
    const selecao2 = document.querySelector('.carrossel-bebida .selecionado')
    const selecao3 = document.querySelector('.carrossel-sobremesa .selecionado')


    const botao = document.querySelector('.botao')
    const texto = document.querySelector('.botao p')
    

    if ( ( selecao1 !==null ) && (selecao2 !==null) && (selecao3 !==null) ){

        texto.innerHTML = "Fechar pedido"
        botao.classList.remove('botao-inativo')
        botao.classList.add('botao-selecionado')
        tokenFinalizado = true
    }

}

function confirmarPedido(){
    if (tokenFinalizado ===true){
        const tela = document.querySelector('.transparencia')
        valorTotal = document.querySelector('.valorTotal')
    
        tela.classList.remove('off')
        
        let v1 = parseFloat(valorNotaFiscal1.innerHTML.replace(',','.').replace('R$',''))
        let v2 = parseFloat(valorNotaFiscal2.innerHTML.replace(',','.').replace('R$',''))
        let v3 = parseFloat(valorNotaFiscal3.innerHTML.replace(',','.').replace('R$',''))  

        valorTotal.innerHTML = "R$" + (v1+v2+v3).toFixed(2) 
    }
}

function cancelarPedido(){
    const tela = document.querySelector('.transparencia')
    tela.classList.add('off')
}

function finalizarPedido(){
    let msgPedido = encodeURIComponent(
    ` Olá, gostaria de fazer o pedido: \n
    - Prato: ${nomeNotaFiscal1.innerHTML}\n
    - Bebida: ${nomeNotaFiscal2.innerHTML}\n
    - Sobremesa: ${nomeNotaFiscal3.innerHTML}\n
    Total: ${valorTotal.innerHTML}`
    )   
    window.open(`https://wa.me/5571983601278?text=${msgPedido}`)
}