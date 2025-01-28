const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        userFields: {
            username: {
                type: String,
                required: true,
                unique: true,
            },
            email: {
                type: String,
                required: true,
                unique: true,
            },
            password: {
                type: String,
                required: true,
                unique: true,
            },
            roles: {
                type: [String],
                default: ['user'],
            }
        },
        profile: {
            firstName: {
                type: String,
            },
            lastName: {
                type: String,
            },
            age: {
                type: Number,
                min: 0,

            }
        },
        activityFields: {
            lastLogin: {
                type: Date,
                default: null,
            }
        }
})
module.exports = mongoose.model('user',userSchema)