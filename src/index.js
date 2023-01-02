const express = require("express");
const userRouter = require("./routes/userRoutes");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require("cors");
const categoryRouter = require("./routes/categoryRoutes");

app.use(express.json());

app.use(cors());

app.use("/users",userRouter);
app.use("/categories",categoryRouter);
const PORT = 5000;
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://admin_butikku:butikkuuser%40123@cluster0.kzzeeux.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    app.listen(PORT,()=>{
        console.log("Listening on 5000");
    });
})
.catch((error)=>{
    console.log("Error connecting database"+error);
});

