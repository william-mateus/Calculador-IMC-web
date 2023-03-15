// Busca os elementos do .html para o .js
const elementoAltura = document.getElementById("altura");
const elementoPeso = document.getElementById("peso");
const elementoMensagem = document.getElementById("mensagem");

function mostrarMensagem(mensagem) {
elementoMensagem.innerText = mensagem;// InnerText -> Define o texto dentro de um elemento
    elementoMensagem.classList.remove("escondido");// ClassList -> Possui todas as classes de um elemento. .remove -> Remove a classe de um elemento
    
    // Adiciona a class 'paraAnimacao' no elemento mensage, isso inicia a animção
    elementoMensagem.classList.add("paraAnimacao");
    // Espera 1 segundo e remove a classe, parando a animação. Esperamos 1 segundo porquê é o tempo de duração da animação, se a animação durar 2 segundos, mudamos para esperar 2 segundos
    // O setTimeout recebe em milisegundos, então pegue o tempo da animação e multiplique por 1000!
    setTimeout(() => {
        elementoMensagem.classList.remove("paraAnimacao");
    }, 1000);
}

function onButtonClick() {
    // Pega os valores digitados pelo usuário
    const altura = elementoAltura.value;
    const peso = elementoPeso.value;

    // Calcula o ImC
    const imc = peso / (altura * altura);
    console.log(imc);

    // Determina a mensagem para mostrar ao usuário
    let mensagem = "";
    if (imc < 18.5) {
        mensagem = "Abaixo do peso normal";
    } else if (imc < 24.9) {
        mensagem = "Peso normal";
    } else if (imc < 29.9) {
        mensagem = "Excesso de peso";
    } else if (imc < 34.9) {
        mensagem = "Obesidade classe 1";
    } else if (imc < 39.9) {
        mensagem = "Obesidade classe 2";
    } else {
        mensagem = "Obesidade classe 3";
    }

    // Mostra a mensagem
    mostrarMensagem(mensagem);
}
