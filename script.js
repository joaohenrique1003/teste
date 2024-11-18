const opcoes = document.querySelectorAll(".opcao");
const resultado = document.getElementById("resultado");

// Resposta correta
const respostaCorreta = "2";

// Evento de clique nas opções
opcoes.forEach(opcao => {
    opcao.addEventListener("click", () => {
        if (opcao.textContent === respostaCorreta) {
            resultado.textContent = "Correto! A equação balanceada é: 2H₂ + O₂ → 2H₂O.";
            resultado.style.color = "green";
        } else {
            resultado.textContent = "Errado! Tente novamente.";
            resultado.style.color = "red";
        }
    });
});
