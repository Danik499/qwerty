import express from "express";
import apiRouter from './api'

var app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use("/api", apiRouter);
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );

    // ADDED BY VLAD B
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
    next();
});
app.listen(5000);