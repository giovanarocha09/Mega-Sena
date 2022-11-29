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

        //Habilitar o botão apostar
        if (numerosapostados.length > 5){
            aposta.disabled = false;
        }

        //Mostrar quant de num apostados 
        const qtdaposta = document.getElementById("quant");
        qtdaposta.innerHTML = "<p>Quant numeros</p><p class='destac'>" + numerosapostados.length + "</p>";
        
    }


}

function desabilitarnumeroescolhido(numero){
    document.getElementById('num_' + numero).disabled = true;
    document.getElementById('num_' + numero).style.background = "#1ca445";
    document.getElementById('num_' + numero).style.color = "#fff";
    
}



