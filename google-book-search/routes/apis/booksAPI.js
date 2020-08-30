const router = require("express").Router();
const booksController = require("../../controller/booksController");

router.route("/")
    .get(booksController.findAll)
    .post(booksController.createBook);

router.route("/:id")
    .delete(booksController.remove);

module.exports = router;