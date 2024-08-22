const express = require("express");
const app = express();
const mongoose = require("mongoose");
const axios = require("axios");
const ProductTransaction = require("./models/ProductTransaction.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/RoxilersTask";

main().then(() => {
    console.log("connected to DB");
})
.catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
    res.send("Hii, i am root");
});

// Testing ProductTransaction sample data
app.get("/testProductTransaction", async (req, res) => {
    let sampleProductTransaction = new ProductTransaction ({
        id: 2,
        title: "Mens T-shirts",
        price: 44.6,
        description: "All size mens t-shirts",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        sold: false,
        dateOfSale: "2021-10-27T20:29:54+05:30",
    });
    await sampleProductTransaction.save();
    console.log("sample was saved");
    res.send("successful testing");
});

app.listen(8080, () => {
    console.log("server is listening to port 8080");
});