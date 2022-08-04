const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
    A schema can have an arbitrary number of fields — each one 
    represents a field in the documents stored in MongoDB.
*/

const TaskSchema = new Schema({
    task: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

// compile model from schema
module.exports = mongoose.model(
    'Task',
    TaskSchema
);