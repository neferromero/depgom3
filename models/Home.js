/* Home model definition */

const mongoose  = require('mongoose');

const HomeSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 10,
        required: [true, "Home name is required!"]
    },
    kind: {
        type: String,
        required: true
    },
    price: {
        type: Number, 
        required: true
    },
    available: {
        type: String,
        required: true
    }
})
const Home = mongoose.model("Home", HomeSchema);

module.exports = Home