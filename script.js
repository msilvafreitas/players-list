const players = require('./data.json');

function filtro(parametro, valor) {

var output =  players.filter(player => player.parametro == valor);
for(var i=0;i<output.length;i++){
   document.write("<h2>", output[i].name, "</h2>", "<br/>")
};
}

