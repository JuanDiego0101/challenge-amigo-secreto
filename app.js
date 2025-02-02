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

    inputAmigo.value = "";
    inputAmigo.focus();


}

function actualizarLista(){
    const listaAmigosUl = document.getElementById('listaAmigos')
    listaAmigosUl.innerHTML = "";
    
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigosUl.appendChild(li);
    });
}    