const fizzbuzz = require('./fizzbuzz')

describe('fizzbuzz', () =>{
    test('Debería imprimir mensaje de error si ingresamos un valor no numerico', () =>{
        const esperado = 'Error: El parametro ingresado no es un número';
        const resultado = fizzbuzz('19');
        expect(esperado).toBe(resultado);
    });
    test('Debería imprimir el 1 si recibo el 1',()=>{
        const esperado = 1;
        const resultado = fizzbuzz(1);
        expect(esperado).toBe(resultado);
    });
    test('Debería imprimir fizz si recibo el 3', () =>{
        const esperado = 'fizz';
        const resultado = fizzbuzz(3);
        expect(esperado).toBe(resultado);
    });
    test('Debería imprimir fizz si recibo un multiplo de  3', () =>{
        const esperado = 'fizz';
        const resultado = fizzbuzz(6);
        expect(esperado).toBe(resultado);
    });
    test('Debería imprimir buzz si recibo un multiplo de  5', () =>{
        const esperado = 'buzz';
        const resultado = fizzbuzz(5);
        expect(esperado).toBe(resultado);
    });
    test('Debería imprimir fizzbuzz si recibo un multiplo de 3 y un multiplo de 5', () =>{
        const esperado = 'fizzbuzz';
        const resultado = fizzbuzz(15);
        expect(esperado).toBe(resultado);
    })
})