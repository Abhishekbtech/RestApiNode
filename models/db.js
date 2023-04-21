const mongoose = require('mongoose')

const profileSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [false, "Please enter  your name"]
        },
        number: {
            type: Number,
            required: true,
        },
        age: {
            type: Number,
            required: false,
        },
        image: {
            type: String,
            require: false
        }
    },
    {
        timestamps: true
    }
)

const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile;