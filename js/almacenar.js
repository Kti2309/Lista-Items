


function almacenar(){
   
    let nombre= document.getElementById('item').value;

    if(nombre.value !==''){

        let nombreLista=document.createElement('li');

        nombreLista.textContent=nombre;

        document.getElementById("contenedor").appendChild(nombreLista);

        document.getElementById("item").value ='';
       
        guardarElemento();
      
    }else{
        alert('ingrese un texto');
    }

}
function guardarElemento(){
    localStorage.setItem("Lista", JSON.stringify(nombreLista) )
   }

function limpiarLista(){
    localStorage.clear(document.getElementById("contenedor"));
}
