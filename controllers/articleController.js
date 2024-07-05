const { Article, User, Comment } = require("../models");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {
  const id = req.params.id;
  const comments = await Comment.findAll({
    where: { articleId: id },
  });
  const users = await User.findAll();
  const article = await Article.findByPk(id, { include: User });
  return res.render("article", { article, users, comments });
}

// Show the form for creating a new resource
async function create(req, res) {
  const users = await User.findAll();
  return res.render("create-article", { users });
}

// Store a newly created resource in storage.
async function store(req, res) {
  await Article.create({
    title: req.body.titulo,
    content: req.body.contenido,
    userId: req.body.userId,
    image: "https://loremflickr.com/640/480?lock=4264831056084992",
  });
  return res.redirect("/admin");
}

// Show the form for editing the specified resource.
async function edit(req, res) {
  const id = req.params.id;
  const users = await User.findAll();
  const article = await Article.findByPk(id, { include: User });
  res.render("edit-article", { article, users });
}

// Update the specified resource in storage.
async function update(req, res) {
  const id = req.params.id;
  await Article.update(
    { title: req.body.titulo, content: req.body.contenido, author: req.body.usuario },
    {
      where: {
        id: id,
      },
    },
  );
  res.redirect("/admin");
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  await Article.destroy({
    where: {
      id: req.params.id,
    },
  });
  return res.redirect("/admin");
}

// Agregar Try y Catch
// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
