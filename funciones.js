'use strict';
/**
 * Archivo js que contiene las funciones que trabajan con el array de discos por fuera de las clases Disco y Pista.
*/

/**
 * Encuentra el disco con la mayor duración entre todos los discos cargados a aDiscos.
 *
 * @returns {Disco|null} -> El disco con la mayor duración o null si no hay discos cargados.
*/
function DiscoMayorDuracion() {
    if (aDiscos.length === 0) {
      return null;
    }
    let discoMayorDuracion = aDiscos[0];
    for (let i = 1; i < aDiscos.length; i++) {
      let disco = aDiscos[i];
      if (disco.duracionDisco() > discoMayorDuracion.duracionDisco()) {
        discoMayorDuracion = disco;
      }
    }
    return discoMayorDuracion;
  }