const http = require('http');
const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const MainRoutes = require("./routes/AppRoutes");

dotenv.config();
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

const PORT = process.env.PORT || process.env.APP_PORT;

const server = http.createServer(app);

app.use("", MainRoutes);

mongoose.connect(process.env.APP_DB_URI).then(()=>{
    server.listen(PORT, ()=>{
        console.log("Database is connected!");
        console.log(`App is running on port ${PORT}`);
    });
}).catch((error)=>{
    console.log("Unable to connect the Database");
    console.error(error);
});


