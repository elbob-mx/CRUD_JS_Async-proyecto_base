import { clientServices } from "../service/client-service.js";
console.log(clientServices);

// FUNCION CREAR NUEVA LINEA USUARIO
const crearNuevaLinea = (nombre, email, id) => {
  console.log(id);
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
            <button class="simple-button simple-button--delete" type="button" id="${id}">
              Eliminar
              </button>
          </li>
        </ul>
        </td>
    </tr>`;
  linea.innerHTML = contenido;
  const btn = linea.querySelector("button");
  btn.addEventListener("click", () => {
    const id = btn.id;
    console.log("click delete on: ", id);
  });

  return linea;
};

// VARIABLES ----------->
const table = document.querySelector("[data-table]");

clientServices
  .listaClientes()
  .then((data) => {
    data.forEach(({ nombre, email, id }) => {
      const nuevaLinea = crearNuevaLinea(nombre, email, id);
      table.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("error detectado. skynet activado."));

const eliminarCliente = (id) => {
  console.log("delete: ", id);
};
