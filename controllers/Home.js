/* Home controller */

const Home = require('../models/Home');
const ObjectId = require('mongoose').Types.ObjectId;

function getHome(req, res) {
    const filters = {}
    if (req.query.available) {
        filters.available = req.query.available === "1";
    }
    if (req.query.kind) {
        filters.kind = req.query.kind;
    }
    Home.find(filters).then(function (home) {
        res.send(home)
    });
}

function createHome(req, res) {
    const body = req.body;
    const home = new Home(body);
    Home.create(home).then(function (home) {
        res.status(201).send(home)
    })
    .catch(function (error) {
        res.status(400).send({"message": error.message, "type": error.name});
    });;
}

function updateHome(request, response) {
    const id = request.params.id;
    const body = request.body;
    Home.findOneAndUpdate({"_id": ObjectId(id)}, body)
    .then(function (home) {
        response.status(200).send(home);
    })
    .catch(function (error) {
        response.status(400).send({"message": error.message, "type": error.name});
    });
};

module.exports = {
    createHome,
    updateHome,
    getHome
}