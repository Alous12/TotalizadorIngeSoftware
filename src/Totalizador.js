function totalizador(cant,precio,estado)
{
    const neto = cant * precio;
    return "cantidad de items: " + cant +"<br>" +" precio por item: " + precio + "<br>" +" Estado: " + estado + "<br>" +" precio neto("+ cant + "*$"+precio+"): " + neto ;
}

export default totalizador;