let seriesFavoritas =['Friends', 'Game of Thrones','Breaking Bad'];
console.log(seriesFavoritas[0]);
let pessoa = ['Vinicius', 22, 1.80, false, ['Musica', 'Café']];
console.log(pessoa[4]);
console.log(pessoa.length);
let cores = ['Roxo', 'Laranja', 'Azul']
cores.push('Violeta')
console.log(cores)
cores.push('Cinza', 'Ouro')
console.log(cores)
let ultimaCor = cores.pop()
console.log(cores)
console.log(ultimaCor)
let primeiraCor = cores.shift()
console.log(cores)
console.log(primeiraCor)
console.log(cores.length)
novoTamanho = cores.unshift('Vermelho')
console.log(cores)
console.log(cores.length)
let separadosPorVirgula = cores.join()
console.log(separadosPorVirgula)
let separadosPorTraco = cores.join(' - ')
console.log(separadosPorTraco)
console.log(cores.lastIndexOf('Laranja'))
console.log(cores.indexOf('Abacaxi'))
console.log(cores.includes('Abacaxi'))
console.log(cores.includes('Laranja'))