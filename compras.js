let listaCompra = ['rucula', 'agrião', 'rabanete', 'tomilho', 'salsão', 'manjericão', 'salvia', 'coentro', 'azeite extra-virgem' ]
console.log('Esta é a listinha do carnívoro disfarçado de coelho...');
console.log(listaCompra)
console.log('Se voce não gostou dessa forma de apresentar a lista vou juntar tudo com uma barra')
console.log('Pra fazer isso usamos o comando join(), compras.join("/")')
let barra = listaCompra.join('/')
console.log(barra)
console.log('Já o comando compras.pop() elimina o ultimo elemento e devolve o valor removido...')
let remove = listaCompra.pop()
console.log(listaCompra)
console.log('Removi ', remove, '.')
console.log('Comando compras.push() adiciona um ou mais elementos ao final do array e retorna um numero de elementos')
console.log('Se essa lista já tava grande, agora extravasou de vez')
let elemento = listaCompra.length
let novo = listaCompra.push('salsa')
console.log(listaCompra)
console.log('Antes tinhamos ' + elemento + '. Agora temos ' + novo + '.')
console.log('O comando compras.unshift() adiciona um ou + elementos no inicio da lista, e também retorna o novo tamanho.')
elemento = listaCompra.length
novo = listaCompra.unshift('acelga')
console.log(listaCompra)
console.log('Antes tinhamos ' + elemento + '. Agora temos ' + novo + '.')