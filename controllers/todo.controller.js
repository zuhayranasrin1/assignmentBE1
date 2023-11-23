//define route handles function
const getAllTodo = (req, res) => {
  res.render("index", { title: "hello" });
};

module.exports = { getAllTodo };
