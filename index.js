//Açao dos números//

var numerosmegasena = document.getElementById('divnumerosmegasena');
var numerosescolhidos = [];
var botaojogar = document.getElementById('botaojogar');
numerosmegasena.addEventListener('click',function(cordefundo){
    cordefundo.target.style.background = "#1ca480";
    cordefundo.target.style.color = "#fff";
    numerosescolhidos.push(cordefundo.target.innerHTML);

    //Mensagem caso o usuário escolha mais que 6//
    if(numerosescolhidos.length > 6){
        alert('Voce só pode escolher até 6 numeros');
        cordefundo.target.style.background = "#bbb";
        botaojogar.disabled = false;
        return;
    }
    validanumerosescolhidos();
});

function validanumerosescolhidos(){
    if (numerosescolhidos.length == 6){
        botaojogar.disabled = false;
    }
}
