const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const courses = require("./Data/fakedata.json");

app.get("/", (req, res) =>{
    res.send("Now server is running!");
});

app.get("/courses", (req, res) =>{
    res.send(courses);
});

app.get("/courses/:id", (req, res) => {
    const id = req.params.id;

    const singleCourse = courses.find( course => course.id == id);
    res.send(singleCourse);
});

app.listen(Port, () =>{
    console.log(`server is running, ${Port}`);
});
