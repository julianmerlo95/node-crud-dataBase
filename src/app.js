const express = require("express");
const app = express();
const routes = require("./application/routes/index");

//Midlleware
app.use("/", routes);
app.use(express.json());

//port
const port = process.env.port || 3000;

//Server
app.listen(port, () => {
  console.log(`The port is running in port: ${port}`);
});
