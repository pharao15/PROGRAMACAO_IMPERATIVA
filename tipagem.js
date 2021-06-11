teste=5
 console.log(typeof teste)
teste='alfanumerico'
 console.log(typeof teste)
teste=true
 console.log(typeof teste)
 function juntarNomes (texto1,texto2){
     return (texto1 + " " + texto2).toUpperCase()
    
 }
 juntos=juntarNomes ("fabio", "rahal")
 console.log(juntos)
 function juntarNomes2 (texto1,texto2){
     console.log (texto1 + " " + texto2)
 }
 juntarNomes2 ("gomide", "rahal")
 function media (n1,n2,n3){
     let resultado= (n1+n2+n3)/3
     return (Math.sqrt(resultado)).toFixed(2)

 }
  mean= media(10,100,900)
 console.log(mean)
