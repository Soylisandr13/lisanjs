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

    let descuentoAplicado = 0;
    const CODIGO_DESCUENTO = "DRAGONBALLSUPER";
    const PORCENTAJE_DESCUENTO = 30;


    if (!sessionStorage.getItem('notificacionMostrada')) {
        Swal.fire({
            title: '¡Oferta especial!',
            text: 'Usando este código de descuento 30% de descuento en tu primera compra. Codigo: DRAGONBALLSUPER',
            icon: 'success',
            confirmButtonText: '¡Gracias!',
            confirmButtonColor: '#00b7ff',
            timer: 8000,
            timerProgressBar: true
        });
        sessionStorage.setItem('notificacionMostrada', 'true');
    }

    const contenedorDestacados = document.querySelector('.containerdest');
    contenedorDestacados.innerHTML = '';
    productos.slice(0, 6).forEach(producto => {
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
        contenedorDestacados.appendChild(tarjeta);
    });

    const contenedorProductos = document.querySelector('.gridcontainer');
    contenedorProductos.innerHTML = '';
    productos.slice(6).forEach(producto => {
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

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    descuentoAplicado = parseInt(localStorage.getItem('descuentoAplicado')) || 0;
    const carritoItems = document.querySelector('.carrito-items');
    const totalPrecio = document.querySelector('.carrito-total span');
    const botonPagar = document.getElementById('checkout');

    function guardarCarrito() {
        localStorage.setItem('carrito', JSON.stringify(carrito));
        localStorage.setItem('descuentoAplicado', descuentoAplicado);
    }

    function mostrarNotificacion() {
        const notificacion = document.createElement('div');
        notificacion.className = 'notificacion';
        notificacion.textContent = 'haz agregado un producto al carrito';
        
        notificacion.style.position = 'fixed';
        notificacion.style.top = '20px';
        notificacion.style.left = '50%';
        notificacion.style.transform = 'translateX(-50%)';
        notificacion.style.backgroundColor = '#4CAF50';
        notificacion.style.color = 'white';
        notificacion.style.padding = '15px 25px';
        notificacion.style.borderRadius = '5px';
        notificacion.style.zIndex = '1000';
        notificacion.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        notificacion.style.opacity = '0';
        notificacion.style.transition = 'opacity 0.5s';
        
        document.body.appendChild(notificacion);
        
        setTimeout(() => {
            notificacion.style.opacity = '1';
        }, 10);
        
        setTimeout(() => {
            notificacion.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(notificacion);
            }, 500);
        }, 3000);
    }

    function agregarProductoAlCarrito(idProducto) {
        const productoEncontrado = productos.find(p => p.id === idProducto);
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
        
        guardarCarrito();
        actualizarCarrito();
        carritoFijo.classList.add('activo');
        mostrarNotificacion();
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
                            <div class="item-cantidad">
                                <button class="btn-disminuir" data-id="${item.id}">-</button>
                                <span>${item.cantidad}</span>
                                <button class="btn-aumentar" data-id="${item.id}">+</button>
                            </div>
                            <p>${precioFormateado} c/u</p>
                        </div>
                        <div class="item-precio">${subtotalFormateado}</div>
                        <button class="item-eliminar" data-id="${item.id}">×</button>
                    `;
                    
                    carritoItems.appendChild(itemElement);
                });
                let totalConDescuento = total;
                if (descuentoAplicado > 0) {
                    totalConDescuento = total - (total * descuentoAplicado / 100);
                }

                const descuentoSection = document.createElement('div');
                descuentoSection.className = 'carrito-descuento';
                descuentoSection.innerHTML = `
                    <div class="descuento-input">
                        <input type="text" id="codigo-descuento" placeholder="Código de descuento">
                        <button id="aplicar-descuento">Aplicar</button>
                    </div>
                    <div class="descuento-info">
                        ${descuentoAplicado > 0 ? 
                            `<p>Descuento aplicado: ${descuentoAplicado}%</p>
                             <p>Total original: $${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>` : 
                            ''}
                    </div>
                `;
                
                carritoItems.appendChild(descuentoSection);
                
                if (totalPrecio) {
                    totalPrecio.textContent = `$${totalConDescuento.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
                }
                document.getElementById('aplicar-descuento').addEventListener('click', function() {
                    const codigoIngresado = document.getElementById('codigo-descuento').value.toUpperCase();
                    aplicarDescuento(codigoIngresado);
                });
            }
        }
    }

    function eliminarDelCarrito(id) {
        const producto = carrito.find(item => item.id === id);
        carrito = carrito.filter(item => item.id !== id);
        if (carrito.length === 0) {
            descuentoAplicado = 0;
            localStorage.setItem('descuentoAplicado', 0);
        }
        
        guardarCarrito();
        actualizarCarrito();
        carritoFijo.classList.add('activo');
    }

    function cambiarCantidad(id, cambio) {
        const producto = carrito.find(item => item.id === id);
        if (producto) {
            producto.cantidad += cambio;
            if (producto.cantidad <= 0) {
                eliminarDelCarrito(id);
            } else {
                guardarCarrito();
                actualizarCarrito();
                carritoFijo.classList.add('activo');
            }
        }
    }

    function aplicarDescuento(codigo) {
        if (codigo === CODIGO_DESCUENTO) {
            descuentoAplicado = PORCENTAJE_DESCUENTO;
            Swal.fire({
                title: '¡Código válido!',
                text: `Se ha aplicado un ${PORCENTAJE_DESCUENTO}% de descuento a tu compra.`,
                icon: 'success',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#00b7ff'
            });
        } else {
            Swal.fire({
                title: 'Código inválido',
                text: 'El código ingresado no es válido. Por favor, intenta de nuevo.',
                icon: 'error',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#00b7ff'
            });
        }
        localStorage.setItem('descuentoAplicado', descuentoAplicado);
        
        actualizarCarrito();
    }

    if (carritoItems) {
        carritoItems.addEventListener('click', function(e) {
            e.stopPropagation();
            if (e.target.classList.contains('item-eliminar')) {
                const idProducto = parseInt(e.target.getAttribute('data-id'));
                eliminarDelCarrito(idProducto);
            } else if (e.target.classList.contains('btn-aumentar')) {
                const idProducto = parseInt(e.target.getAttribute('data-id'));
                cambiarCantidad(idProducto, 1);
            } else if (e.target.classList.contains('btn-disminuir')) {
                const idProducto = parseInt(e.target.getAttribute('data-id'));
                cambiarCantidad(idProducto, -1);
            }
        });
    }

    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-agregar')) {
            e.stopPropagation();
            const idProducto = parseInt(e.target.getAttribute('data-id'));
            agregarProductoAlCarrito(idProducto);
        }
    });

    actualizarCarrito();
});