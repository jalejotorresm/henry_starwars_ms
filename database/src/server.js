const express = require("express");
const server = require("../../characters/src/server");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

module.exports = server;
