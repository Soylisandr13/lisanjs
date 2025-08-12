document.addEventListener('DOMContentLoaded', function() {

    const carritoFijo = document.querySelector('.carrito-fijo');

    const carritoIcono = document.querySelector('.carrito-icono');
    

    carritoIcono.addEventListener('click', function() {

        carritoFijo.classList.toggle('activo');
    });
    

    document.addEventListener('click', function(event) {

        if (!carritoFijo.contains(event.target)) {

            carritoFijo.classList.remove('activo');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
 
    const productos = [
        {
            id: 1,
            nombre: "Figura Goku 65cm",
            descripcion: "Figura de Goku de 65cm, ideal para coleccionistas.",
            precio: 500000,
            imagen: "./img/des1.jfif"
        },
        {
            id: 2,
            nombre: "Figura Majin Vegeta 68cm",
            descripcion: "Figura de Majin Vegeta de 68cm, ideal para coleccionistas.",
            precio: 550000,
            imagen: "./img/des2.png"
        },
        {
            id: 3,
            nombre: "Figura Guerreros Z 30cm",
            descripcion: "Figura de los Guerreros Z, ideal para coleccionistas.",
            precio: 150000,
            imagen: "./img/des3.jpg"
        },
        {
            id: 4,
            nombre: "Figura Goku Super Saiyan 3 30cm",
            descripcion: "Figura de Goku en su forma Super Saiyan 3, ideal para coleccionistas.",
            precio: 150000,
            imagen: "./img/des4.jpg"
        },
        {
            id: 5,
            nombre: "Figura Goku Super Saiyan God 57cm",
            descripcion: "Figura de Goku en su forma Super Saiyan God, ideal para coleccionistas.",
            precio: 480000,
            imagen: "./img/des5.jpg"
        },
        {
            id: 6,
            nombre: "Figura Vegeta Super Saiyan God 60cm",
            descripcion: "Figura de Vegeta en su forma Super Saiyan God, ideal para coleccionistas.",
            precio: 600000,
            imagen: "./img/des6.jpg"
        },
    ];

const contenedorProductos = document.querySelector('.containerdest');

contenedorProductos.innerHTML = '';

productos.forEach(producto => {

const tarjeta = document.createElement('div');

tarjeta.className = `des${producto.id}`;

const preciosigno = `$${producto.precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;

tarjeta.innerHTML = `
            <img src="${producto.imagen}" alt="">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <span>${preciosigno}</span>
            <button class="btn-agregar" data-id="${producto.id}">Agregar al carrito</button>
        `;
contenedorProductos.appendChild(tarjeta);
});
});

document.addEventListener('DOMContentLoaded', function() {
 
    const productos = [
        { 
            id: 7,
            nombre: "Figura Goku Ultra Instinct",
            descripcion: "Figura de Goku en su forma Ultra Instinct, 23cm de altura",
            precio: 120000,
            imagen: "./img/fig1.jpg"
        },
        {
            id: 8,
            nombre: "Figura Vegeta Super Saiyan Blue",
            descripcion: "Figura de Vegeta en su forma Super Saiyan Blue, 23cm de altura",
            precio: 120000,
            imagen: "./img/fig2.jpg"
        },
        {
            id: 9,
            nombre: "Figura Freezer Final Form",
            descripcion: "Figura de Freezer en su forma final, 45cm de altura",
            precio: 280000,
            imagen: "./img/fig3.jpg"
        },
        {
            id: 10,
            nombre: "Figura Bulma",
            descripcion: "Figura de Bulma, 23cm de altura.",
            precio: 70000,
            imagen: "./img/fig4.jfif"
        },
        {
            id: 11,
            nombre: "Figura Raditz",
            descripcion: "Figura de Raditz, 29cm de altura.",
            precio: 90000,
            imagen: "./img/fig5.jpg"
        },
        {
            id: 12,
            nombre: "Figura Janemba",
            descripcion: "Figura de Janemba, 30cm de altura.",
            precio: 110000,
            imagen: "./img/fig6"
        },
        {
            id: 13,
            nombre: "Figura Tapion",
            descripcion: "Figura de Tapion, 25cm de altura.",
            precio: 110000,
            imagen: "./img/fig7.jpg"
        },
        {
            id: 14,
            nombre: "Figura Cell",
            descripcion: "Figura de Cell, 30cm de altura.",
            precio: 130000,
            imagen: "./img/fig8.jpg"
        },
        {
            id: 15,
            nombre: "Figura Piccolo y Gohan",
            descripcion: "Figura de Piccolo y Gohan, 30cm de altura.",
            precio: 150000,
            imagen: "./img/fig9.jpg"
        },
        {
            id: 16,
            nombre: "Figura Kame hame ha Padre e hijo",
            descripcion: "Figura de Goku y Gohan en la técnica Kamehameha, 25cm de altura.",
            precio: 150000,
            imagen: "./img/fig10.jpg"
        },
        {
            id: 17,
            nombre: "Figura Gohan bestia",
            descripcion: "Figura de Gohan en su forma bestia, 30cm de altura.",
            precio: 150000,
            imagen: "./img/fig11.jpg"
        },
        {
            id: 18,
            nombre: "Figura Goku Black",
            descripcion: "Figura de Goku Black, 28cm de altura.",
            precio: 120000,
            imagen: "./img/fig12.jpg"
        },
    ];
    const contenedorProductos = document.querySelector('.gridcontainer');

contenedorProductos.innerHTML = '';

productos.forEach(producto => {

const tarjeta = document.createElement('div');

tarjeta.className = `panel${producto.id}`;

const preciosigno = `$${producto.precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;

tarjeta.innerHTML = `
            <img src="${producto.imagen}" alt="">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <span>${preciosigno}</span>
            <button class="btn-agregar" data-id="${producto.id}">Agregar al carrito</button>
        `;
        contenedorProductos.appendChild(tarjeta);
});
});
document.addEventListener('DOMContentLoaded', function() {

let carrito = [];
const carritoItems = document.querySelector('.carrito-items');
const totalPrecio = document.querySelector('.carrito-total span');
const botonPagar = document.getElementById('checkout');

function agregarProductoAlCarrito(idProducto) {
    let productoEncontrado = null;
    const productos1 = [
        {
            id: 1,
            nombre: "Figura Goku 65cm",
            descripcion: "Figura de Goku de 65cm, ideal para coleccionistas.",
            precio: 500000,
            imagen: "./img/des1.jfif"
        },
        {
            id: 2,
            nombre: "Figura Majin Vegeta 68cm",
            descripcion: "Figura de Majin Vegeta de 68cm, ideal para coleccionistas.",
            precio: 550000,
            imagen: "./img/des2.png"
        },
        {
            id: 3,
            nombre: "Figura Guerreros Z 30cm",
            descripcion: "Figura de los Guerreros Z, ideal para coleccionistas.",
            precio: 150000,
            imagen: "./img/des3.jpg"
        },
        {
            id: 4,
            nombre: "Figura Goku Super Saiyan 3 30cm",
            descripcion: "Figura de Goku en su forma Super Saiyan 3, ideal para coleccionistas.",
            precio: 150000,
            imagen: "./img/des4.jpg"
        },
        {
            id: 5,
            nombre: "Figura Goku Super Saiyan God 57cm",
            descripcion: "Figura de Goku en su forma Super Saiyan God, ideal para coleccionistas.",
            precio: 480000,
            imagen: "./img/des5.jpg"
        },
        {
            id: 6,
            nombre: "Figura Vegeta Super Saiyan God 60cm",
            descripcion: "Figura de Vegeta en su forma Super Saiyan God, ideal para coleccionistas.",
            precio: 600000,
            imagen: "./img/des6.jpg"
        }
    ];
    
    const productos2 = [
        { 
            id: 7,
            nombre: "Figura Goku Ultra Instinct",
            descripcion: "Figura de Goku en su forma Ultra Instinct, 23cm de altura",
            precio: 120000,
            imagen: "./img/fig1.jpg"
        },
        {
            id: 8,
            nombre: "Figura Vegeta Super Saiyan Blue",
            descripcion: "Figura de Vegeta en su forma Super Saiyan Blue, 23cm de altura",
            precio: 120000,
            imagen: "./img/fig2.jpg"
        },
        {
            id: 9,
            nombre: "Figura Freezer Final Form",
            descripcion: "Figura de Freezer en su forma final, 45cm de altura",
            precio: 280000,
            imagen: "./img/fig3.jpg"
        },
        {
            id: 10,
            nombre: "Figura Bulma",
            descripcion: "Figura de Bulma, 23cm de altura.",
            precio: 70000,
            imagen: "./img/fig4.jfif"
        },
        {
            id: 11,
            nombre: "Figura Raditz",
            descripcion: "Figura de Raditz, 29cm de altura.",
            precio: 90000,
            imagen: "./img/fig5.jpg"
        },
        {
            id: 12,
            nombre: "Figura Janemba",
            descripcion: "Figura de Janemba, 30cm de altura.",
            precio: 110000,
            imagen: "./img/fig6.jpg"
        },
        {
            id: 13,
            nombre: "Figura Tapion",
            descripcion: "Figura de Tapion, 25cm de altura.",
            precio: 110000,
            imagen: "./img/fig7.jpg"
        },
        {
            id: 14,
            nombre: "Figura Cell",
            descripcion: "Figura de Cell, 30cm de altura.",
            precio: 130000,
            imagen: "./img/fig8.jpg"
        },
        {
            id: 15,
            nombre: "Figura Piccolo y Gohan",
            descripcion: "Figura de Piccolo y Gohan, 30cm de altura.",
            precio: 150000,
            imagen: "./img/fig9.jpg"
        },
        {
            id: 16,
            nombre: "Figura Kame hame ha Padre e hijo",
            descripcion: "Figura de Goku y Gohan en la técnica Kamehameha, 25cm de altura.",
            precio: 150000,
            imagen: "./img/fig10.jpg"
        },
        {
            id: 17,
            nombre: "Figura Gohan bestia",
            descripcion: "Figura de Gohan en su forma bestia, 30cm de altura.",
            precio: 150000,
            imagen: "./img/fig11.jpg"
        },
        {
            id: 18,
            nombre: "Figura Goku Black",
            descripcion: "Figura de Goku Black, 28cm de altura.",
            precio: 120000,
            imagen: "./img/fig12.jpg"
        }
    ];
    
    productoEncontrado = productos1.find(p => p.id === idProducto) || productos2.find(p => p.id === idProducto);
    if (!productoEncontrado) return;
    
    const productoExistente = carrito.find(item => item.id === idProducto);
    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({
            ...productoEncontrado,
            cantidad: 1
        });
    }
    
    actualizarCarrito();
    mostrarMensaje(`${productoEncontrado.nombre} agregado al carrito`);
}

function actualizarCarrito() {
    if (carritoItems) {
        if (carrito.length === 0) {
            carritoItems.innerHTML = '<p>No hay productos</p>';

            if (totalPrecio) {
                totalPrecio.textContent = '$0.00';
            }
        } else {
            carritoItems.innerHTML = '';
            let total = 0;
            
            carrito.forEach(item => {
                total += item.precio * item.cantidad;
                
                const itemElement = document.createElement('div');
                itemElement.className = 'carrito-item';
                
                const precioFormateado = `$${item.precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
                const subtotalFormateado = `$${(item.precio * item.cantidad).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
                
                itemElement.innerHTML = `
                    <img src="${item.imagen}" alt="${item.nombre}">
                    <div class="item-detalles">
                        <h4>${item.nombre}</h4>
                        <p>${item.cantidad} x ${precioFormateado}</p>
                    </div>
                    <div class="item-precio">${subtotalFormateado}</div>
                    <button class="item-eliminar" data-id="${item.id}">×</button>
                `;
                
                carritoItems.appendChild(itemElement);
            });
            

            if (totalPrecio) {
                totalPrecio.textContent = `$${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
            }
        }
    }
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    actualizarCarrito(); 
}

carritoItems.addEventListener('click', function(e) {
    if (e.target.classList.contains('item-eliminar')) {
        const idProducto = parseInt(e.target.getAttribute('data-id'));
        eliminarDelCarrito(idProducto);
    }
});

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-agregar')) {
        const idProducto = parseInt(e.target.getAttribute('data-id'));
        agregarProductoAlCarrito(idProducto);
    }
});})