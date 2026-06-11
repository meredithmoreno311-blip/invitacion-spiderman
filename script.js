function entrar(){

    document.getElementById("inicio")
    .style.display = "none";

    document.getElementById("invitacion")
    .style.display = "flex";
}

function confirmar(){

    document.getElementById("mensaje")
    .innerHTML =
    "🎉 ¡Tu asistencia fue confirmada!";
}