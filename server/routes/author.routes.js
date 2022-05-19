const Author = require("../controllers/authors.controller");

module.exports = (app) => {
    app.get("/api/authors", Author.findAll)
    app.post("/api/authors", Author.createAuthor)
    app.get("/api/authors/:id", Author.findOne)
    app.put("/api/authors/:id", Author.updateOneAuthor);
    app.delete("/api/authors/:id", Author.deleteAuthorByID)
}