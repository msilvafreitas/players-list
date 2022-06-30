
function esconder(pot) {	
    [].forEach.call(document.getElementsByClassName(pot), function (el) {
        el.hidden = true;
      });  
  }
  

  function mostrar(pot) {	
    [].forEach.call(document.getElementsByClassName(pot), function (el) {
        el.hidden = false;
      });  
  }
  
  
  
  
  document.getElementById('pleg').onchange = function() {
      if (this.checked) mostrar('pleg'); else esconder('pleg');
}
  document.getElementById('pwc').onchange = function() {
    if (this.checked) mostrar('pwc'); else esconder('pwc');
}
  document.getElementById('pstg').onchange = function() {
    if (this.checked) mostrar('pstg'); else esconder('pstg');
}
document.getElementById('pavg').onchange = function() {
    if (this.checked) mostrar('pavg'); else esconder('pavg');
}
document.getElementById('pwk').onchange = function() {
    if (this.checked) mostrar('pwk'); else esconder('pwk');
}

  


