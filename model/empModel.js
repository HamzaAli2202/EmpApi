const mongoose = require('mongoose')

const empModel = mongoose.model('emps', {

    empid: {
        type: Number
    },
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    mobile: {
        type: Number
    },
    email: {
        type: String
    },
    city: {
        type: String
    },
    IsActive: {
        type: Boolean
    }
})

module.exports = empModel