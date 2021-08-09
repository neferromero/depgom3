/** All routes **/

const router = require("express").Router();
const usersRoutes = require("./users");
const petsRoutes = require("./Home")

router.use("/users", usersRoutes);
router.use("/Home", petsRoutes);

router.use("/", function(request, response) {
    return response.send("Welcome to Depgo API");
});

module.exports = router;