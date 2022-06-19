// VARIABLES ----------->
console.log("client-service--test");
const http = new XMLHttpRequest();
// abrir http (método, url)

/* CRUD - MÉTODOS HTTP 
CREATE  - POST
READ    - GET
UPDATE  - PUT/PATCH
DELETE  - DELETE
*/

// FUNCION CREAR NUEVA LINEA USUARIO
const crearNuevaLinea = () => {
  <tr>
    <td class="td" data-td>
      Gabriela
    </td>
    <td>gabriela@alura.com</td>
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
  </tr>;
};

// FUNCION GET SEND ------------>
http.open("GET", "http://localhost:3000/perfil");
http.send();
http.onload = () => {
  const data = http.response;
  console.log(data);
};

console.log(http);
