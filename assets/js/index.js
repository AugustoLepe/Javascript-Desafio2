//Desafío Parte 1
const modificarBorde = () => {
    const foto_1 = document.querySelector("#img_guitarras");

    if (foto_1.style.border == "2px solid red") {
        foto_1.style.border = "0px";
    } else {
        foto_1.style.border = "2px solid red";
    }
}

//Desafío Parte 2
const verificar = () => {
    const cant1 = document.querySelector("#cantidad_1").value;
    const cant2 = document.querySelector("#cantidad_2").value;
    const cant3 = document.querySelector("#cantidad_3").value;

    const total = parseInt(cant1) + parseInt(cant2) + parseInt(cant3);

    if (total <= 10) {
        document.querySelector("#respuesta").innerHTML = "Llevas " + total + " stickers";
    } else {
        document.querySelector("#respuesta").innerHTML = "Llevas demasiados stickers";
    }
}

//Desafío Parte 3
const ingresar = () => {
    const digito1 = document.querySelector("#pass_1").value;
    const digito2 = document.querySelector("#pass_2").value;
    const digito3 = document.querySelector("#pass_3").value;

    const password = digito1 + digito2 + digito3;

    if (password == 911) {
        document.querySelector("#mensaje").innerHTML = "Password 1 es correcto";
    } else if (password == 714) {
        document.querySelector("#mensaje").innerHTML = "Password 2 es correcto";
    } else {
        document.querySelector("#mensaje").innerHTML = "Password incorrecto";
    }
}