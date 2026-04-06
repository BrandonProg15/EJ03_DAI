import fs from 'fs'

const contenido = fs.readFileSync('./productos.json', 'utf-8')
const productos = JSON.parse(contenido);

let csv = 'nombre,precio\n';

productos.forEach(p => {
    csv += `${p.nombre},${p.precio}\n`; 
});
fs.writeFileSync('productos.csv', csv, 'utf-8');
console.log('Archivo CSV generado con éxito.');