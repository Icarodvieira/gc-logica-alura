const numeroLimite = 4;
let numerosUsados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial();

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do numero secreto');
    exibirTextoNaTela('p','Chute um numero entre 1 e 100');
}


function verificarChute() {
    console.log(numerosUsados);
    
    let chute = document.querySelector('input').value;
    if(chute != numeroSecreto){
        tentativas++;
        limparCampo();
        if(chute > numeroSecreto){
            exibirTextoNaTela('p',`Você errou, o número é menor`);
        }else{
            exibirTextoNaTela('p',`Você errou, o número é maior`);
        }
        return;
    }
    textoTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    exibirTextoNaTela('h1',`Parabéns você acertou!`);
    exibirTextoNaTela('p',`(${tentativas} ${textoTentativa})`);
    document.getElementById('reiniciar').removeAttribute('disabled');
}

function gerarNumeroAleatorio(){
    numeroSorteado = parseInt(Math.random() * numeroLimite + 1);
    if(numerosUsados.includes(numeroSorteado)){
        if(numerosUsados.length >= numeroLimite){
            console.log("todos numeros sorteados, array limpo!");
            numerosUsados = [];
            console.log(numerosUsados);
            return gerarNumeroAleatorio();
        }
        return gerarNumeroAleatorio();
    }else{
        numerosUsados.push(numeroSorteado);
        return numeroSorteado;
    }
}

function limparCampo(){
    document.querySelector('input').value ='';
}

function reiniciar (){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled',true);
}