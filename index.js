import fs from 'fs';

const contenido1 = fs.readFileSync('./productos.json', 'utf-8');

const productos = JSON.parse(contenido1);

console.log(productos);