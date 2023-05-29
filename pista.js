'use strict';
// Creo la clase para las pistas del disco
class Pista {
  #nombre;
  #duracion;

  constructor(nombre, duracion) {
    this.#nombre = nombre;
    this.#duracion = duracion;
  }

    /**
     * Pide al usuario el nombre de la pista, a través de un prompt.
     * Se utiliza un bucle do-while para repetir la solicitud del dato en caso de que no sea válido.
     * Si validarNombre del archivo validaciones.js, retorna true se guarda el dato en la propiedad #nombre de este objeto pista. Sino esa misma funcion dispara un alert.
     * @returns {void} - No devuelve ningún valor.
    */
    PedirNombre() {
      do {
          do {
              this.#nombre = prompt('Por favor, ingrese el nombre de la pista').trim();
          } while (!validarNombre(this.#nombre));
          console.log("Nombre validado pista:", this.#nombre);
      } while (false);
    }
  /**
    * Obtiene el nombre de la pista.
    *
    * @returns {string} - Nombre de la pista, se usa en la clase disco para identificar la pista más larga y mostrar el nombre.
  */
  getNombre() {
    return this.#nombre;
  }

  /**
    * Pide al usuario ingresar la duración del disco, a través de un prompt y guarda el dato en la variable duracionIngresada.
    * Dentro del bucle do-while se usa la variable duracionValida para guardar el dato que retorna validarDuracion del archivo validaciones.js. Que si retorna true, se guarda el dato en la propiedad #duracion de este objeto pista; sino esa misma funcion dispara un alert.
    * @returns {void} - No devuelve ningún valor. 
  */
  PedirDuracion() {
    let duracionIngresada;
    let duracionValida = false;
    do {
      duracionIngresada = Number(prompt('Por favor, ingrese la duración del disco en segundos'));
      duracionValida = validarDuracion(duracionIngresada);
    } while (!duracionValida);
    this.#duracion = duracionIngresada;
    console.log("Duración pista validada:", this.#duracion);
  }
  /**
    * Obtiene la duración de la pista.
    *
    * @returns {number} - Duración de la pista, se usa en la clase disco para carcular el total de duracion del disco y el promedio de duracion de las pistas.
  */
  getDuracion() {
    return this.#duracion;
  }

  /**
   * Genera un li que se va a appendear en una lista ordenada creada en la estructura HTML de la clase Disco
   * <li> Nombre: this.#nombre - <span class="pistaLarga o pistaCorta">Duración: this.#duracion</span></li>
   * La clase del span se agrega tras analizar la duración de la pista con un if
   * @returns {HTMLElement} - Elemento HTML que representa la información de la pista creada con esta clase.
  */
  mostrarPista() {
    const liPista = document.createElement("li");
    liPista.innerText = `Nombre: ${this.#nombre} - Duración: `;
    const spanDuracionPista = document.createElement("span");
    spanDuracionPista.innerText = this.#duracion;
    if (this.#duracion >= 180){
      spanDuracionPista.classList.add("pistaLarga");
    }else{
      spanDuracionPista.classList.add("pistaCorta");
    }
    // Agrego en el li de la pista el span con la duración de la canción y retorno el li
      liPista.append(spanDuracionPista)
      return liPista;
  }
}