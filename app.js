const express = require("express");
const app = express();
const port = 3000;

//nak link file in public to view engine
app.use(express.static("public"));

//nak set view engine
app.set("view engine", "ejs");

//nak get data
app.get("/", (req, res) => {
  const data = {
    title: "Home", // Set a default title
  };
  res.render("index", data);
});

app.get("/:nama", (req, res) => {
  const username = req.params.nama;
  const data = {
    title: username,
  };

  res.render("index", data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
