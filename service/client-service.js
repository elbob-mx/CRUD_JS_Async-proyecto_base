console.log("client-service--test"); 
const http = new XMLHttpRequest();
// abrir http (método, url)

/* CRUD - MÉTODOS HTTP 
CREATE  - POST
READ    - GET
UPDATE  - PUT/PATCH
DELETE  - DELETE
*/

http.open("GET", "http://localhost:3000/perfil");
http.send();
http.onload = () => {
    const data = http.response;
    console.log(data);
} 

console.log(http);