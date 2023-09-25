const http = require("http");
const app = require("./src/server");

const server = http.createServer(app);

server.listen(8005, () => {
  const port = server.address().port;
  console.log(`Servicio Database escuchando en puerto ${port}`);
});
