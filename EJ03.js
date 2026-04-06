import dayjs from 'dayjs';


function mostrarFechaYHora() {
    const ahora = dayjs();

    const fecha = ahora.format('DD/MM/YYYY');
    const hora = ahora.format('HH:mm');

    console.log("Fecha actual:", fecha);
    console.log("Hora actual:", hora);
}

mostrarFechaYHora();