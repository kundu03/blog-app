const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(express.json());
app.use("/images",express.static(path.join(__dirname,"/images")));

mongoose.connect(process.env.MONGO_URL,
    {useNewUrlParser: true, useUnifiedTopology: true}); 

mongoose.set('strictQuery', true);

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,"images");
    }, filename: (req,file,cb) => {
        cb(null,req.body.name);
    }
});

const upload = multer({storage: storage});
app.post("/api/upload",upload.single("file"),(req,res) => {
    res.status(200).json("File has been uploaded!");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen(process.env.PORT || 4000, () => {
    console.log("Server is running on port 4000!!!");
})