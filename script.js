// Gera um número aleatório entre 1 e 100
const numeroAleatorio = Math.floor(Math.random() * 50) + 7;
let tentativas = 5;



function verificarAdivinhacao() {
    // Obtém a tentativa do jogador
    const tentativa = document.getElementById("tentativa").value;
    tentativas++;

    

    // Compara a tentativa com o número aleatório
    if (tentativa == numeroAleatorio) {
        document.getElementById("mensagem").innerHTML = `Parabéns! O Vencedor é o número ${numeroAleatorio}.`;
        document.getElementById("mensagem").style.color = "green";
        document.getElementById("tentativa").disabled = true;
    } else if (tentativa < numeroAleatorio) {
        document.getElementById("mensagem").innerHTML = "Tente um número maior.";
        document.getElementById("mensagem").style.color = "red";

    } else {
        document.getElementById("mensagem").innerHTML = "Tente um número menor.";
        document.getElementById("mensagem").style.color = "red";
    }
}

alert("Iremos Jogar O Jogo da Adivinhação Em Dupla")
alert("Se Decidam quem será o 1 e o 2"); 
alert("Cada Jogada Serve Para Reversar entre Vocês")
alert("Boa Sorte a vocês"); 
  
 
