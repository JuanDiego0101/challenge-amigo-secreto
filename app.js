// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//para almacenar nombres
let amigos = [];

//funcion para agregar amigos a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    if(nombreAmigo === "") {
        alert("Por favor, ingrese un nombre");
        return
    }

//agregar el nombre 
    amigos.push(nombreAmigo);

//actualizar vista visual
    actualizarLista();

//limpiar campo de entrada
    inputAmigo.value = "";
    inputAmigo.focus();


}

//funcion para actualizar la lista de amigos
function actualizarLista() {
    const listaAmigosUl = document.getElementById("listaAmigos")
    listaAmigosUl.innerHTML = "";
    
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigosUl.appendChild(li);
    });
}

//funcion para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay suficientes amigos para sortear");
        return

    }

//para obtener un nombre aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

//mostrar los resultados del sorteo
    const resultadoUl = document.getElementById("resultado");
    resultadoUl.innerHTML = `<li>${amigoSorteado}</li>`;
}   

//asignar eventos a los botones
document.addEventListener('DOMContentLoaded', () =>  {
    document.getElementById("btnAgregar").addEventListener('click', agregarAmigo)
    document.getElementById("btnSortear").addEventListener('click', sortearAmigo);
});
