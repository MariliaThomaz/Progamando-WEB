
function mudar() {
   
    let mundo = document.getElementById("olaMundo");
    mundo.style.color='grern';
    mundo.innerHTML= 'Vc esta loca';
 
 }
 function recuperaTexto(){
 
     var textoRebe = document.getElementById("meuTexto").value;
     var mundo = document.getElementById("olaMundo");
     //recupando texto velho
     mundo.innerHTML = textoRebe;
     //atribuido valor novo para campo paragrafo
     
     }