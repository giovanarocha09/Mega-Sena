//Armazenar os numeros que o usuario escolher

const numerosapostados = []

const aposta =document.getElementById('aposta');
aposta.disabled = true;


function selecionarnumeros(numero){

    if(numerosapostados.length >= 0 && numerosapostados.length < 15){

         //adiciona o numero na lista
        numerosapostados.push(numero)

        //desabilita o numeros que o usuario escolher
        desabilitarnumeroescolhido(numero);
    }
}

function desabilitarnumeroescolhido(numero){
    document.getElementById('num_' + numero).disabled = true;
    document.getElementById('num_' + numero).style.background = "#1ca445";
    document.getElementById('num_' + numero).style.color = "#fff";
    
}



