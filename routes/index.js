/** All routes **/

const router = require("express").Router();
const usersRoutes = require("./users");
const homeRoutes = require("./Home")

router.use("/users", usersRoutes);
router.use("/Home", homeRoutes);

router.use("/", function(request, response) {
    return response.send("Welcome to Depgo API");
});

module.exports = router;