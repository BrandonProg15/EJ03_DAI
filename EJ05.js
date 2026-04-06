import fs from 'fs';


function buscarProducto(nombre) {
    const contenido1 = fs.readFileSync('./productos.json', 'utf-8');

    const productos = JSON.parse(contenido1);

    const productoEncontrado = productos.find(p => p.nombre === nombre.toLowerCase());

    if (productoEncontrado) {
        console.log("Producto encontrado:", productoEncontrado);
    } else {
        console.log("Producto no encontrado");
    }
}

buscarProducto("Choripan");

