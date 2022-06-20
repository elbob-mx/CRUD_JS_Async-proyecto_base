// FUNCION CREAR NUEVA LINEA USUARIO
const crearNuevaLinea = (nombre, email) => {
  const linea = document.createElement("tr");
  const contenido = `<tr>
  <td class="td" data-td>
      ${nombre}
    </td>
    <td>${email}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_cliente.html"
            class="simple-button simple-button--edit"
          >
            Editar
          </a>
        </li>
        <li>
          <button class="simple-button simple-button--delete" type="button">
            Eliminar
            </button>
        </li>
      </ul>
      </td>
  </tr>`;
  linea.innerHTML = contenido;
  return linea;
};

// VARIABLES ----------->
const table = document.querySelector("[data-table]");
// abrir http (método, url)

/* CRUD - MÉTODOS HTTP 
CREATE  - POST
READ    - GET
UPDATE  - PUT/PATCH
DELETE  - DELETE
*/

// PROMISE -function GET SEND ONLOAD ----------->
// Fecth API ---------->
const listaClientes = () =>
  fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

// INTENTO 01 --------->
//   const promise = new Promise((resolve, reject) => {
//     const http = new XMLHttpRequest();
//     http.open("GET", "http://localhost:3000/perfil");
//     http.send();
//     http.onload = () => {
//       const response = JSON.parse(http.response);
//       if(http.status >= 400) /* Errores de los clientes (400–499) */ {
//           reject(response);
//         } else {
//             resolve(response);
//             console.log(http.status);
//       }
//     };
//   });
//   return promise;

// INTENTO 02 --------->
// return fetch("http://localhost:3000/perfil").then( respuesta => {
//     return respuesta.json()
// })

// LO QUE SALE DE PROMISE SE CONVIERTE EN 'DATA' ---------->
listaClientes()
  .then((data) => {
    data.forEach((perfil) => {
      const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
      table.appendChild(nuevaLinea);
      console.log(data);
    });
  })
  .catch((error) => alert("error detectado. skynet activado."));
