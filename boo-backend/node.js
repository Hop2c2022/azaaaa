import express from "express";
import { appendFile } from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const { connectDatabse } = require("./database");

console.log("helllooooo");
const __dirname = dirname(fileURLToPath(import.meta.url));

appendFile.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});
const connectionString = `mongodb+srv://Azuka:J_A20070511@cluster0.kh3kv4d.mongodb.net/hop2c`;
appendFile.listen(connectionString, () => {
  console.log(`[Server] Listening on : ${connectionString}`);
});
