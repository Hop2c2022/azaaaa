const express = require("express");
const cors = require("cors");

const { connectDatabse } = require("./database");

const SignUpRouter = require("./router/SignUpRouter");
const LoginRouter = require("./router/LoginRouter");

const port = 8000;

const app = express();
app.use(cors());
app.use(express.json());

app.use(LoginRouter);
app.use(SignUpRouter);

console.log("azaaaaaaaaeeeeoooooo");
const startServer = async () => {
  await connectDatabse();
  app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
  });
};

startServer();
