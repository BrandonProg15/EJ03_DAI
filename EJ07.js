let contador = 1;

console.clear();

let intervalo = setInterval(() => {
    console.log(contador);
    contador++;

    if (contador > 10) {
        clearInterval(intervalo);

        setTimeout(() => {
            console.log("Fin del contador");
        }, 1000);
    }

}, 1000);