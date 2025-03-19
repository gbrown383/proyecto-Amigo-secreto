const listaAmigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    if (!nombre) {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    if (!soloLetras.test(nombre)) {
        alert('El nombre solo puede contener letras y espacios.');
        return;
    }

    listaAmigos.push(nombre);
    actualizarListaAmigos();
    input.value = '';
}

function actualizarListaAmigos() {
    const ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';

    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSeleccionado = listaAmigos.splice(indiceAleatorio, 1)[0];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>🎉 ¡Felicidades! Realizaste el sorteo y tu amigo es <strong>${amigoSeleccionado}</strong> 🎉</li>`;

    actualizarListaAmigos();

    alert(`🎉 ¡Felicidades! Tu amigo secreto es ${amigoSeleccionado} 🎉\n🔄 ¡Vuelve a jugar! 🔄`);
}
