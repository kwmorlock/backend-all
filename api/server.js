const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authenticate = require("../auth/authMiddleware");

const usersAuthRouter = require("../auth/authUsersRouter");
const informationRouter = require("../information/informationrouter/informationRouter");
const usersRouter = require("../users/users/usersRouter");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/users/users", authenticate, usersRouter);
server.use("/api/users/auth", usersAuthRouter);
server.use("/api/info", authenticate, informationRouter);

server.get("/", (req, res) => {
  res.json({ api: "Api is up and running!!!" });
});

module.exports = server;
