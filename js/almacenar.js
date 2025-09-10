document.addEventListener('DOMContentLoaded', () => {
    const item = document.getElementById('item');
    const btnAgregar = document.getElementById('agregar');
    const contenedor= document.getElementById('contenedor');
    const btnLimpiar = document.getElementById('limpiar');

    let lista = JSON.parse(localStorage.getItem('items') || '[]');

    lista.forEach(valor => {
        const li = document.createElement('li');
        li.textContent = valor;
        contenedor.appendChild(li);
    });

    btnAgregar.addEventListener('click', () => {
        lista.push(item.value);
        localStorage.setItem('items', JSON.stringify(lista));
        const li = document.createElement('li');
        li.textContent = item.value;
        contenedor.appendChild(li);
    });

    btnLimpiar.addEventListener('click', () => {
        localStorage.removeItem('items');
        contenedor.innerHTML = '';
        lista = [];
    });
});