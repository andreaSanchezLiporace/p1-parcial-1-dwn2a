'use strict';
/**
* Creo funciones para validar los datos que pide mi programa
*/

/**
* Valido el codigo del disco
*
* @param {Array} aDiscos -> Array de discos en el que se realiza la búsqueda.
* @param {number} codigoIngresado -> código ingresado a validar.
 * @returns {boolean} - Indica si el código es válido y no existe en otros discos.
* if: Valido que el dato que recibo sea un numero, un numero entero (usando el método number.isInteger) o que se encuentre en el rango que preciso. Si alguna de esas tres condiciones no se cumple se diapara el alert
* else: recorro el array de discos con un for of para verificar si el dato ingresado ya existe en la porpiedad disco.codigo de algun disco ya ingresado
*/
function validarCodigo(aDiscos, codigoIngresado) {
  if (isNaN(codigoIngresado) || !Number.isInteger(codigoIngresado) || codigoIngresado < 1 || codigoIngresado > 999) {
    alert('El código ingresado no es válido. Por favor, ingrese un número entre 1 y 999 (inclusive).');
    return false;
  } else {
    for (let disco of aDiscos) {
      if (disco.getCodigo() === codigoIngresado) {
        alert('El código ingresado ya existe en otro disco. Por favor, ingrese un código diferente.');
        return false;
      }
    }
  }
  return true;
}

/**
 * Valido un string
 * Se usa para nombres de: disco, banda y pista de ahi el nombre de la f()
 * Si el dato ingresado por el usuario no es un string, muestra un alert solicitando el dato correcto.
 *
 * @param {string} nombre -> nombre a validar
 * @returns {boolean} - Indica si el nombre es válido.
 */
function validarNombre(nombre) {
  if (!isNaN(nombre)) {
      alert('El dato ingresado es inválido. Por favor, reingrese el texto.');
      return false;
  }
  return true;
}

/**
 * VALIDO UN NUMERO
 * Se usa para duracion de la pista
 * Si el dato ingresado por el usuario no es un número, muestra un alert solicitando el dato correcto.
 *
 * @param {string} duracionIngresada -> número a validar
 * @returns {boolean} - Indica si el número es válido.
 */
function validarDuracion(duracionIngresada) {
  if (!Number.isInteger(duracionIngresada) || (duracionIngresada <= 0 || duracionIngresada >= 7200)) {
    alert('La duración ingresada no es válida. Por favor, ingrese un número entero mayor a 0 y menor o igual a 7200.');
    return false;
  }
  return true;
}