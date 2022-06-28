var campoFiltro = document.querySelector("#nome");

campoFiltro.addEventListener("input", function() {
    var jogadores = document.querySelectorAll(".jogador");

    if (this.value.length > 0) {
        for (var i = 0; i < jogadores.length; i++) {
            var jogador = jogadores[i];
            var tdNome = jogador.querySelector(".jogador--nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(nome)) {
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
