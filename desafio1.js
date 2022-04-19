let numeroUno = prompt('INGRESE UN RANGO DE 0 AL NUMERO QUE USTED DESEE Y EN LA CONSOLA LE MOSTRARA TODOS LOS NUMEROS QUE SON DIVISIBLES POR 7, Y TAMBIEN LOS QUE NO LO SON')
if (!isNaN(numeroUno)) {
    for (let contadorUno = 1; contadorUno <= numeroUno; contadorUno++) {
        if (contadorUno % 7 == 0) {
            console.log(`${contadorUno} es divisible por 7 !!!!`)
        }
        else {
            console.log(`El numero ${contadorUno} NO es divisible por 7`)
        }
    }
}
else {
    alert('El valor ingresado no es correcto, recargue su pagina')
}