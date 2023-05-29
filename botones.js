'use strict';
/**
 * SANCHEZ LIPORACE, ANDREA
*/
/**
 * Almaceno los discos cargados por el usuario en el array aDiscos.
 * Estructura de cada elemento del array:
 * {
 *   codigo: number,         // Código del disco
 *   nombre: string,         // Nombre del disco
 *   banda: string,          // Nombre de la banda/artista
 *   pistas: Array[Pista]    // Array de pistas del disco
 * }
*/
let aDiscos = [];

/**
 * Carga los datos de un nuevo disco ingresados por el usuario y lo agrega al array aDiscos.
 * Convoco a cada getter de la clase Disco y la clase Pista para ir pidiendole al usuario cada uno de los datos mediante un prompt
 * @returns {void} - No devuelve ningún valor.
 */
function Cargar() {
    // Nueva instancia de la clase Disco
    let disco = new Disco();
    // Pido el código, nombre y banda del disco:
    disco.PedirCodigo(aDiscos);
    disco.PedirNombre();
    disco.PedirBanda();
    // Pido las pistas del disco:
    do {
      let pista = new Pista();
      // Pido nombre de la pista y su duración:
      pista.PedirNombre();
      pista.PedirDuracion();
      // Pusheo la nueva pista creada al array de pistas del disco
      disco.agregarPista(pista);
    } while (confirm('Para ingresar otra pista haga click en aceptar'))
    // Pusheo el disco creado al array de discos
    aDiscos.push(disco);
}

/**
 * Muestra en el navegador, los discos cargados en el array aDiscos.
 * La mayoría de los datos los traigo desde la clase Disco con el uso de su metodo disco.mostrar Disco(). Sin embargo, aquí agrego un dato más que se calcula en esta instancia, que es el total de discos cargados. En este caso la intención es mostrarlo en un div que se encuentra por fuera de la estructura creada en la clase Disco. Con .textContent limpio el contenido del div con id tital-discos sin que procese la etiqueta p que creo dentro para informar la cantidad de discos cargados.
 * Para limpiar la seccion con id info-discos uso .innerHTML
 */
function Mostrar(){
    let contadorDiscos=0;
    document.getElementById('info-discos').innerHTML = '';
	// Recorro los discos:
	for (let disco of aDiscos) {
		    contadorDiscos++;
        const totalDiscos = document.getElementById('total-discos');
        totalDiscos.textContent = ''; 
        const pTotalDiscos = document.createElement("p");
        pTotalDiscos.innerHTML = `Total discos: ${contadorDiscos}`;
        totalDiscos.append(pTotalDiscos);
        document.getElementById('info-discos').append(disco.mostrarDisco());
    }
}

/**
 * Busca un disco especifico por su código
 * Si aDiscos esta vacío, no puede realizar la busqueda, imprimo un p advirtiendo al usuario.
 * Si aDiscos, tiene al menos un disco cargado, se usa el metodo find para encontrar el disco en el array aDisco.
 * Si el código coincide, muestra la informacion del disco usando el metodo mostrarDisco de la clase Disco
 * Si el código no coincide se imprime un p con el mensaje de busqueda frustrada
 * @param {Array} aDiscos - Array de discos en el que se realizará la búsqueda.
 * @returns {void} - No devuelve ningún valor.
*/
function BuscarDisco() {
    if (!aDiscos || aDiscos.length === 0) {
      alert("No hay discos disponibles para buscar.");
      return;
    }
    const codigoIngresado = prompt("Ingrese el código del disco que desea ver");
    let discoEncontrado = null;
  
    for (let i = 0; i < aDiscos.length; i++) {
      if (aDiscos[i].getCodigo().toString() === codigoIngresado.toString()) {
        discoEncontrado = aDiscos[i];
        break;
      }
    }
    if (discoEncontrado) {
      document.getElementById('info-discos').innerHTML = '';
      document.getElementById('info-discos').append(discoEncontrado.mostrarDisco());
    } else {
      document.getElementById('info-discos').innerHTML = '';
      const pBusquedaFrustrada = document.createElement("p");
      pBusquedaFrustrada.innerHTML = "No se encontró ningún disco con ese código";
      document.getElementById('info-discos').append(pBusquedaFrustrada);
    }
  }

