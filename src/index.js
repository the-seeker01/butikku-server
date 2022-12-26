const express = require("express");
const userRouter = require("./routes/userRoutes");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require("cors");

app.use(express.json());

app.use(cors());

app.use("/users",userRouter);

const PORT = process.env.PORT || 5000;
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT,()=>{
        console.log("Listening on 5000");
    });
})
.catch((error)=>{
    console.log("Error connecting database"+error);
});

