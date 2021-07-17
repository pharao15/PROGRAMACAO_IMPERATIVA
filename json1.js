// devolvendo em JavaScript

let dadosJson = '{"cidade":"São Paulo","bairro":"Morumbi"}';
let dadosConvert = JSON.parse(dadosJson);
console.table(dadosConvert);


// devolvendo em JSON

let objLit = { nome:'Carla',pais:'Brasil', vero:true, ddi:55, estadoSul: ['RS','SC','PR'], misc: {a:'portugues',b:'latino',c:'BR'}};
let dadosConv = JSON.stringify(objLit);
console.log(dadosConv);
console.log(objLit);
console.log(objLit.nome," ",objLit.vero, "  ", objLit.estadoSul[0]);