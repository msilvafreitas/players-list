
function esconder(posicao) {	
    [].forEach.call(document.getElementsByClassName(posicao), function (el) {
        el.hidden = true;
      });  
  }
  

  function mostrar(posicao) {	
    [].forEach.call(document.getElementsByClassName(posicao), function (el) {
        el.hidden = false;
      });  
  }
  
  
  
  
  document.getElementById('goleiro').onchange = function() {
      if (this.checked) mostrar('goleiro'); else esconder('goleiro');
}
  document.getElementById('zagueiro').onchange = function() {
    if (this.checked) mostrar('zagueiro'); else esconder('zagueiro');
}
  document.getElementById('latdir').onchange = function() {
    if (this.checked) mostrar('latdir'); else esconder('latdir');
}
document.getElementById('latesq').onchange = function() {
    if (this.checked) mostrar('latesq'); else esconder('latesq');
}
document.getElementById('meia').onchange = function() {
    if (this.checked) mostrar('meia'); else esconder('meia');
}
document.getElementById('pontadir').onchange = function() {
    if (this.checked) mostrar('pontadir'); else esconder('pontadir');
}
document.getElementById('pontaesq').onchange = function() {
    if (this.checked) mostrar('pontaesq'); else esconder('pontaesq');
}
document.getElementById('atacante').onchange = function() {
    if (this.checked) mostrar('atacante'); else esconder('atacante');
}
  


