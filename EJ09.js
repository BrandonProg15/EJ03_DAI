function validarPassword(password) {
    let valida = true;

    if (password.length < 8 || password.match(/[0-9]/) == null || password.match(/[A-Z]/) == null) {

        valida = false;
        console.log("Password válida");
    }

    if (valida == true) {
        console.log("Password inválida");
    }
    return valida;
}

validarPassword("sfhgiseovbfzHU3753454");



