export function formatoFecha(fecha)
{
    var fechaCorrecta = "";
    var fechaIngresada = String(fecha);

    if(fechaIngresada !== "" && fechaIngresada !== undefined)
    {
        var añoF = fechaIngresada.substring(0,4);
        var mesF = fechaIngresada.substring(5,7);
        var diaF = fechaIngresada.substring(8,10);
        fechaCorrecta = diaF + "/" + mesF + "/" + añoF;
    }
    return fechaCorrecta;
}