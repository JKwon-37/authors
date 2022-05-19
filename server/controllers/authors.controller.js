const Author = require("../models/authors.model");

module.exports = {

    //READ ALL
    findAll: (req, res) => {
        Author.find()
            .then((authors) => {
                return res.json(authors)
            })
            .catch(err => res.json(err))
    },

    //CREATE
    createAuthor: (req, res) => {
        console.log(req.body);
        Author.create(req.body)
            .then( newAuthor => {
                console.log("DB Success created new Author!");
                return res.json(newAuthor)
            })
            .catch(err => {
                console.log("DB ERROR creating Author!");
                return res.json(err)
            })
    },

    //READ ONE
    findOne: (req, res) => {
        console.log(req.params);
        Author.findById(req.params.id)
            .then(author => res.json(author))
            .catch(err => res.json(err))
    },

    //UPDATE
    updateOneAuthor: (req, res) => {
        console.log("UPDATE id:", req.params.id);
        console.log("UPDATE OBJ:", req.body);
        Author.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true
        })
            .then(updatedAuthor => res.json(updatedAuthor))
            .catch(err => res.json(err))
    },

    //DELETE
    deleteAuthorByID: (req, res) => {
        console.log(req.params.id);
        Author.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err))
    }
}