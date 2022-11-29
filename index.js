//Variáveis 

const numerosapostados = []

const aposta =document.getElementById('aposta');
aposta.disabled = true;

let valoraposta = 0




function selecionarnumeros(numero){

    if(numerosapostados.length >= 0 && numerosapostados.length < 15){

        //adiciona o numero na lista
        numerosapostados.push(numero)

        //desabilita o numeros que o usuario escolher
        desabilitarnumeroescolhido(numero);

        //Habilitar o botão apostar
        if (numerosapostados.length > 5){
            aposta.disabled = false;

            //Mostrar o valor da aposta
            valordaaposta()
        }

        //Mostrar quant de num apostados 
        const qtdaposta = document.getElementById("quant");
        qtdaposta.innerHTML = "<p>Quant numeros</p><p class='destac'>" + numerosapostados.length + "</p>";
        
    }


}

//Funcao para o numeros que o usuario escolher
function desabilitarnumeroescolhido(numero){
    document.getElementById('num_' + numero).disabled = true;
    document.getElementById('num_' + numero).style.background = "#1ca445";
    document.getElementById('num_' + numero).style.color = "#fff";
    
}

// Funcao para Mostrar o valor da aposta

function valordaaposta(){
    switch(numerosapostados.length){

        case 6: 
            valoraposta =  "R$ 4,50 "
            break;

        case 7: 
            valoraposta =  "R$ 31,50 "
            break;

        case 8: 
            valoraposta =  "R$ 126,00 "
            break;

        case 9: 
            valoraposta =  "R$ 378,00 "
            break;

        case 10: 
            valoraposta =  "R$ 945,00 "
            break;

        case 11: 
            valoraposta =  "R$ 2.079,00"
            break;

        case 12: 
            valoraposta =  "R$ 4.158,00 "
            break;

        case 13: 
            valoraposta =  "R$ 6.006,00 "
            break;

        case 14: 
            valoraposta =  "R$ 10.510,50 "
            break;

        case 15: 
            valoraposta =  "R$ 17.517,50 "
            break;

        default:
            valoraposta =  "R$ 00,00"
            break;


    }
    const divvaloraposta = document.getElementById("valor");
    divvaloraposta.innerHTML = "<p>Valor da Aposta</p> <p class='destac'>" + valoraposta + "</p>"
}
