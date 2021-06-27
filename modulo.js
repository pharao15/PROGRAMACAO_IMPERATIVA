const tipoVariavel=(v)=>
 { 
     if(typeof(v)=='string') {console.log('Variável é string')}
     if(typeof (v)=='number') {console.log('Variável é numero')}
     if(typeof (v)=='boolean') {console.log('Variavel é do tipo true/false')}
 }
 
 module.exports=tipoVariavel