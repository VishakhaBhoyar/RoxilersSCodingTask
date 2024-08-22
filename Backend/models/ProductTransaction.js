const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductTransactionSchema = new Schema ({
    id: Number,
    title: String,
    price: String,
    description: String,
    category: String,
    image: String,
    sold: Boolean,
    dateOfSale: String,
});

const ProductTransaction = mongoose.model("ProductTransaction", ProductTransactionSchema);
module.exports = ProductTransaction;