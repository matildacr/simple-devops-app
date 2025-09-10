const capitalize = require('./utils.js');

describe('Función capitalize', () => {

  // Definimos una prueba individual 
  test('debe poner en mayúscula la primera letra de una palabra', () => {
    
    expect(capitalize('hola')).toBe('Hola');
  });

  test('debe manejar un string vacío sin errores', () => {
    expect(capitalize('')).toBe('');
  });

});
