const mongoose = require('mongoose')

const { Schema } = mongoose

const requiredString = {
    type: String,
    required: true
}
const requiredNumber = {
    type: Number,
    required: true
}
const logEntrySchema = new Schema({
    title: requiredString,
    description: String,
    comments: String,
    image: String,
    rating: {
        type: Number,
        min: 0,
        max: 10,
        default: 0
    },
    visitDate: {
        type: Date,
        required: true
    },
    latitude: {
        ...requiredNumber,
        min: -90,
        max: 90
    },
    longitude: {
        ...requiredNumber,
        min: -180,
        max: 180
    },
}, {
    timestamps: true
})

const LogEntry = mongoose.model('LogEntry', logEntrySchema)

module.exports = LogEntry;