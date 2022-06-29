
function esconder(hab) {	
    [].forEach.call(document.getElementsByClassName(hab), function (el) {
        el.hidden = true;
      });  
  }
  

  function mostrar(hab) {	
    [].forEach.call(document.getElementsByClassName(hab), function (el) {
        el.hidden = false;
      });  
  }
  
  
  
  
  document.getElementById('leg').onchange = function() {
      if (this.checked) mostrar('leg'); else esconder('leg');
}
  document.getElementById('wc').onchange = function() {
    if (this.checked) mostrar('wc'); else esconder('wc');
}
  document.getElementById('stg').onchange = function() {
    if (this.checked) mostrar('stg'); else esconder('stg');
}
document.getElementById('avg').onchange = function() {
    if (this.checked) mostrar('avg'); else esconder('avg');
}
document.getElementById('wk').onchange = function() {
    if (this.checked) mostrar('wk'); else esconder('wk');
}

  


