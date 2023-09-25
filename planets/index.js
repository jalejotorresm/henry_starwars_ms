const http = require("http");
const app = require("./src/server");

const server = http.createServer(app);

server.listen(8004, () => {
  const port = server.address().port;
  console.log(`Servicio Planets escuchando en puerto ${port}`);
});
