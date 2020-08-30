const router = require("express").Router();
const bookRoutes = require("./booksAPI");

router.use("/booksAPI", bookRoutes);

module.exports = router;