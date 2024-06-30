//Calcular edad

function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad;
}

document.addEventListener("DOMContentLoaded", () => {
    let fechaNacimiento = "1992-05-14";
    const edad = calcularEdad(fechaNacimiento);
    document.querySelector(".edad").innerText = `${edad} años`;
});