const express = require("express");
const cors = require("cors");
const LoginRouter = require("./router/LoginRouter");
const { connectDatabse } = require("./database");

const SignUpRouter = require("./router/SignUpRouter");

const port = 8000;

const app = express();
app.use(cors());
app.use(express.json());

// app.use(LoginRouter);
app.use(SignUpRouter);

const startServer = async () => {
  await connectDatabse();
  app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
  });
};

startServer();
