const http = require("http");
const app = require("./src/server");

const server = http.createServer(app);

server.listen(8003, () => {
  const port = server.address().port;
  console.log(`Servicio Films escuchando en puerto ${port}`);
});
