function totalizador(cant,precio)
{
    const neto = cant * precio;
    return "cantidad de items: " + cant + " precio por item: " + precio + " precio neto("+ cant + "*$"+precio+"): " + neto;
}

export default totalizador;