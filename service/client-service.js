const listaClientes = () =>
  fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

const crearCliente = (nombre, email) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre,
      email,
      id: uuid.v4(),
    }),
  });
};

const eliminarCliente = (id) => {
  console.log("Eliminar a --->", id);
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE"
  });
};

export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
};

// abrir http (método, url)

/* CRUD - MÉTODOS HTTP 
CREATE  - POST
READ    - GET
UPDATE  - PUT/PATCH
DELETE  - DELETE
*/

// PROMISE -function GET SEND ONLOAD ----------->
// Fecth API ---------->
