const express = require("express");
const cors=require("cors");
const app=express();

app.use(cors());
app.use(express.json());

const { router: mainRouter } = require("./routes/index");
app.use("/api/v1", mainRouter);


app.use(express.json());

app.listen(3000);