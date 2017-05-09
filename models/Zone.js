var mongoose = require('mongoose')

ZoneSchema = new mongoose.Schema({
    name: { type: String, default: '' },
    zipCodes: { type: [String], default: [] },
    timestamp: { type: Date, default: Date.now }
})

module.exports = mongoose.model('ZoneSchema', ZoneSchema)