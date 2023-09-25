const http = require("http");
const app = require("./src/server");

const server = http.createServer(app);

server.listen(8002, () => {
  const port = server.address().port;
  console.log(`Servicio Characters escuchando en puerto ${port}`);
});
