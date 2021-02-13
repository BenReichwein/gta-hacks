const mongoose = require('mongoose');

const TimeCapsuleSchema = mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('timeCapsule', TimeCapsuleSchema);