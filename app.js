const express = require("express");

//import controllers
const {getAllTodo} = require("./controllers/todo.controller.js");

//nak set server express
const app = express();
const port = 5000;

//nak set view engine
app.set("view engine", "ejs");

//nak link file in public to view engine
app.use(express.static("public"));

//define route for controller
app.get("/", getAllTodo);

// // nak get data
// app.get("/home", (_req, res) => {
//   const data = {
//     title: "Home", // Set a default title
//   };
//   res.render("index", data);
// });

// //nak define route
// app.get("/user/:nama", (req, res) => {
//   const username = req.params.nama;
//   const data = {
//     title: username,
//   };
//   res.render("index", data);
// });

//nak start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
