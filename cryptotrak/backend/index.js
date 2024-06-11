const express = require("express");
const mongoose = require("mongoose");
//const ContactQueries = require("./models/contactQueries.model.js");`
const ContactRoute = require("./routes/contactQueries.js");
const app = express();
const cors = require("cors");

app.use(cors({
    origin: 'http://localhost:3000', // Adjust this as needed
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
  }));
  

app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/contactQueries", ContactRoute);




app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});



  
mongoose
.connect(
  "mongodb+srv://abhishek3011patil:Abhi1289@cluster0.stnt1vd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => {
  console.log("Connected to database!");
  app.listen(8080, () => {
    console.log("Server is running on port 3000");
  });
})
.catch(() => {
  console.log("Connection failed!");
});