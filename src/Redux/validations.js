export function formatoFecha(fecha)
{
    var fechaCorrecta = "";
    var fechaIngresada  = new Date(fecha);

    if(fechaIngresada !== "" && fechaIngresada !== undefined)
    {
        var añoF = fechaIngresada.getFullYear().toString().padStart(2, '0');
        var mesF = (fechaIngresada.getMonth() + 1).toString().padStart(2, '0');
        var diaF = fechaIngresada.getDate().toString().padStart(2, '0');
        var horaF = fechaIngresada.getHours();
        var minutoF = fechaIngresada.getMinutes();
        var segundoF = fechaIngresada.getSeconds();

        fechaCorrecta = diaF + "/" + mesF + "/" + añoF + " "+horaF+":"+minutoF + ":"+segundoF;
    }
    return fechaCorrecta;
}