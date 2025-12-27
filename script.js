let carrito = [];
const listaCarrito = document.querySelector('#lista-carrito');
const totalPago = document.querySelector('#total-pago');
const botonesAgregar = document.querySelectorAll('.btn-add');

// 1. Escuchar clics en los botones
botonesAgregar.forEach(boton => {
    boton.addEventListener('click', (e) => {
        const producto = {
            id: e.target.getAttribute('data-id'),
            nombre: e.target.getAttribute('data-nombre'),
            precio: parseFloat(e.target.getAttribute('data-precio'))
        };
        agregarAlCarrito(producto);
    });
});

// 2. Añadir al array y actualizar
function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarHTML();
}

// 3. Mostrar en pantalla
function actualizarHTML() {
    listaCarrito.innerHTML = ''; // Limpiar antes de redibujar
    let total = 0;

    carrito.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio}`;
        listaCarrito.appendChild(li);
        total += item.precio;
    });

    totalPago.textContent = total.toFixed(2);
}