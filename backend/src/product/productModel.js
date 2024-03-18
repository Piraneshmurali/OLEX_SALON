var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TableSchema = new Schema({

    course: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required:true
    },
    faculty: {
        type: String,
        required:true
    },  
    location: {
        type: String,
        required: true
    },
    
});

module.exports = mongoose.model('table', TableSchema);