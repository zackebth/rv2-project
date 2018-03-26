"use strict";

var mongoose = require('mongoose');

var todoSchema = mongoose.Schema({
    text: {
        type: String,
        default: ''
    }
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
