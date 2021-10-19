const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shelfSchema = new Schema({
    name: { type: String, required: true },
    notes: { type: String },
    books: [{
        type: Schema.Types.ObjectId,
        ref: "Book",
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Shelf', shelfSchema);