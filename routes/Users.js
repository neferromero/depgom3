/**User routes **/

const router = require("express").Router();

const {
    getUsers,
    createUser,
    updateUser
} = require("../controllers/users");

router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);

module.exports = router;