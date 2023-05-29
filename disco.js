'use strict';
// Creo la clase para el disco
class Disco {
    #codigo;
    #nombre;
    #banda;
    #pistas;

    constructor(codigo, nombre, banda) {
        this.#codigo = codigo;
        this.#nombre = nombre;
        this.#banda = banda;
        this.#pistas = [];
    }

    /**
     * Pide al usuario ingresar el código del disco, a través de un prompt; y lo asigna a la propiedad #codigo del objeto.
     *
     * @param {Array} aDiscos - array de discos para verificar la existencia del código.
     * @returns {void} - No devuelve ningún valor.
     * Creo una variable para guardar el codigo ingresado por el usuario (codigoIngresado)
     * En el do while, pido el dato y luego uso la funcion validarCodigo del archivo validaciones.js que verifica si el código se repite en otro disco y dispara los alerts de ser preciso.
     * Si validar codigo devuelve true, (dato es valido), se lo asigno a la propiedad #codigo de este objeto disco, sino se repite el bucle.
    */
    PedirCodigo(aDiscos) {
        let codigoIngresado;
        do {
          codigoIngresado = Number(prompt('Por favor, ingrese el código del disco'));
        } while (!validarCodigo(aDiscos, codigoIngresado));
        this.#codigo = codigoIngresado;
        console.log("Código ingresado y validado:", this.#codigo);
    }
    /**
     * Obtiene el código del disco.
     *
     * @returns {number} - El código del disco.
    */
    getCodigo() {
        return this.#codigo;
    }

    /**
     * Pide al usuario el nombre del disco, a través de un prompt; y lo asigna a la propiedad #nombre del objeto.
     * Se utiliza un bucle do-while para repetir la solicitud del dato en caso de que no sea válido.
     *
     * Si validarNombre del archivo validaciones.js, retorna true se guarda el dato en la propiedad #nombre de este objeto disco.
     * @returns {void} -> No devuelve ningún valor.
    */
    PedirNombre() {
        do {
            do {
                this.#nombre = prompt('Por favor, ingrese el nombre del disco').trim();
            } while (!validarNombre(this.#nombre));
            console.log("Nombre disco validado:", this.#nombre);
        } while (false);
    }

    /**
     * Pide al usuario el nombre de la banda, a través de un prompt; y lo asigna a la propiedad #banda del objeto.
     * Se utiliza un bucle do-while para repetir la solicitud del dato en caso de que no sea válido.
     *
     * Si validarNombre del archivo validaciones.js, retorna true se guarda el dato en la propiedad #banda de este objeto disco.
     * @returns {void} -> No devuelve ningún valor.
    */
    PedirBanda() {
        do {
            // Si validarNombre retorna false se repite el bucle, solicitando mediante un prompr el ingreso del dato correcto
            do {
                this.#banda = prompt('Por favor, ingrese el nombre de la banda').trim();
            } while (!validarNombre(this.#banda));
            console.log("Nombre banda validado:", this.#banda);
        } while (false);
    }

    /**
     * Agrega una pista al array de pistas del disco.
     *
     * @param {object} pista -> Nueva pista a agregar.
     * @returns {void} -> No devuelve ningún valor.
    */
    agregarPista(pista){
        this.#pistas.push(pista);
    }

    /**
     * Calcula la duración total del disco sumando la duración de cada pista.
     *
     * @returns {number} -> Duración total del disco en segundos.
    */
    duracionDisco() {
        let acumDuracionPistas = 0;
        for (let pista of this.#pistas) {
          acumDuracionPistas += pista.getDuracion();
        }
        return acumDuracionPistas;
    }

    /**
     * Calculo el promedio de duración de las pistas del disco
     *
     * @returns {number} - El promedio de duración de las pistas.
     * promedioPista es una variable creada para guardar el dato del promedio de las pistas y retornarlo después.
    */
    promedioDuracionPistas() {
        let promedioPista = 0;
        promedioPista = this.duracionDisco() / this.#pistas.length;
        return promedioPista;
    }


    /**
     * Identifico la pista mas larga, resguardo su duracion en a variable pistaMasLarga y me traigo el nombre de la pista con el getter getNombre de la clase pista
     *
     * @returns {number} - Duración de la pista mas larga.
     * Di no hay pistas cargadas, retorna null
    */
    pistaMasLarga() {
        if (this.#pistas.length === 0) {
          return null;
        }
        let pistaMasLarga = this.#pistas[0];
        for (let i = 1; i < this.#pistas.length; i++) {
          let pista = this.#pistas[i];
          if (pista.getDuracion() > pistaMasLarga.getDuracion()) {
            pistaMasLarga = pista;
          }
        }
        const nombrePistaMasLarga = pistaMasLarga.getNombre();
        return nombrePistaMasLarga;
      }


    /**
     * Genera la siguiente estructura HTML para mostrar la informacion del disco;
     * <article class="card">
     *   <h3>Muestro nombre disco (this.#nombre)</h3>
     *      <p>Código: this.#codigo</p>
     *      <p>Banda: this.#banda</p>
     *      <p>Duración disco: duracionDisco()</p>
     *         <h4>Canciones: this.#pistas.length</h4>
     *              <p>Promedio duración pistas: promedioDuracionPistas()</p>
     *              <ol>
     *                  <li>Estos li vienen appendeados desde el metodo mostrarPista de la clase Pista y crea un li por cada pista ingresada para el disco con su nombre y duración resaltada: for de pista.mostrarPista()</li>
     *              </ol>
     *              <p>Pista mas larga del disco</p>
     * </article>
     * 
     * @returns {HTMLElement} - Elemento HTML que representa la información del disco.
    */
    mostrarDisco() {
        const discoMayorDuracion = DiscoMayorDuracion();
        const infoDisco = document.createElement("article");
        infoDisco.classList.add("card");
        // Verifico si el disco es el de mayor duración dentro del array y le agrego una clase para resaltarlo desde css
        if (this === discoMayorDuracion) {
            infoDisco.classList.add("discoMasLargo");
        }

        const h3Nombre = document.createElement("h3");
        h3Nombre.innerText = `${this.#nombre}`;
            const pCodigo = document.createElement("p");
            pCodigo.innerText = `Código: ${this.#codigo}`;
            const pBanda = document.createElement("p");
            pBanda.innerText = `Banda: ${this.#banda}`;
            const pDuracionDisco = document.createElement("p");
            pDuracionDisco.innerText = `Duración disco: ${this.duracionDisco()} segundos`;
            const pPromedioPista = document.createElement("p");
            pPromedioPista.innerText = `Promedio duración pistas: ${this.promedioDuracionPistas()} segundos`;
            const pPistaMasLarga = document.createElement("p");
            pPistaMasLarga.innerText = `La pista mas larga del disco es: ${this.pistaMasLarga()}`;
            console.log(this.pistaMasLarga())

            // PISTAS
            const h4Pistas = document.createElement("h4");
            h4Pistas.innerText = `Canciones: ${this.#pistas.length} pistas`;
                const olPistas = document.createElement("ol");
                    for(let pista of this.#pistas) {
                        olPistas.append(pista.mostrarPista());
                    }


        // Appendedo al article toda la estructura anteriormente creada, guardandola en la variablo infoDisco que es el dato que se termina retornando
        infoDisco.append(h3Nombre, pCodigo, pBanda, pDuracionDisco, pPromedioPista, pPistaMasLarga, h4Pistas, olPistas );
        return infoDisco;
    }
}