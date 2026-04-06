import fs from 'fs';


function agregarProducto(nombre, precio) {
    const contenido1 = fs.readFileSync('./productos.json', 'utf-8');

    const productos = JSON.parse(contenido1);

    productos.push({
        nombre: "choripan",
        precio: 10000
    });

    fs.writeFileSync('./productos.json', JSON.stringify(productos, null, 2));
    console.log(productos);

}

agregarProducto();

