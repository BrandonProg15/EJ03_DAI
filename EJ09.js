function validarPassword(password) {
    let valida = true;

    if (password.length < 8 || password.match(/[0-9]/) == null || password.match(/[A-Z]/) == null) {

        valida = false;
        console.log("contraseña invalida, debe tener al menos 8 caracteres, un número y una letra mayúscula");
    }

    if (valida == true) {
        console.log("La contraseña es válida");
    }
    return valida;
}

validarPassword("sfhgiseovbfzHU3753454");



