// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo(){
    const inputAmigo = document.getElementById('Amigo')
    const nombre = inputAmigo.ariaValueMax.trim();

    if(nombreAmigo === ""){
        alert('Por favor, ingrese un nombre')
        return
    }

    amigos.push(nombreAmigo)

    actualizarLista();
    
}