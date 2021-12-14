const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoschema = new Schema({
    text: {
        type: String,
        required: true
    },
    complete:{
        type: Boolean,
        default: false
    },
    timestamp:{
        type: String,
        default: Date.now()
    }
})

const todo = mongoose.model("todo", todoschema);

module.exports = todo;

//Start mongodb:
//Powershell mongo