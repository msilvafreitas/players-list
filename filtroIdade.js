
var filtroIdadeMin = document.querySelector("#idade--min");
var filtroIdadeMax = document.querySelector("#idade--max");

filtroIdadeMin.addEventListener("input", function() {
    var jogadores = document.querySelectorAll(".jogador");

    if (this.value > 15) {
        for (var i = 0; i < jogadores.length; i++) {
            var jogador = jogadores[i];
            var tdIdade = jogador.querySelector(".jogador--idade");
            var idade = parseInt(tdIdade.textContent);
            var expressao = parseInt(this.value);

            if (expressao > idade) {
                jogador.classList.add("invisivel");
            } else {
                jogador.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < jogadores.length; i++) {
            var jogador = jogadores[i];
            jogador.classList.remove("invisivel");
        }
    }
});

filtroIdadeMax.addEventListener("input", function() {
    var jogadores = document.querySelectorAll(".jogador");

    if (this.value < 45) {
        for (var i = 0; i < jogadores.length; i++) {
            var jogador = jogadores[i];
            var tdIdade = jogador.querySelector(".jogador--idade");
            var idade = parseInt(tdIdade.textContent);
            var expressao = parseInt(this.value);

            if (expressao < idade) {
                jogador.classList.add("invisivel");
            } else {
                jogador.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < jogadores.length; i++) {
            var jogador = jogadores[i];
            jogador.classList.remove("invisivel");
        }
    }
});