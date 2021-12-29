const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use(express.json());

const students = [];

app
  .get("/students", (req, res) => {
    res.send({
      message: "List of all students",
      students: students,
    });
  })
  .get("/students/:smer", (req, res) => {
    let filteredStudents = students.filter((student) => {
      return student.smer.toLowerCase() == req.params.smer.toLowerCase();
    });
    res.send({
      message: "Studenti na smerot " + req.params.smer,
      students: filteredStudents,
    });
  })
  .get("/students/year/:year", (req, res) => {
    let filteredYearStudents = students.filter((student) => {
      return student.year == req.params.year;
    });
    res.send({
      message: "Studenti shto pocnal od godina " + req.params.year,
      students: filteredYearStudents,
    });
  })
  .post("/students", (req, res) => {
    students.push(req.body);
    res.send({
      message:
        "New student with the name of " +
        req.body.firstName +
        " " +
        req.body.lastName +
        " is added to the database.",
      students: students,
    });
  });
