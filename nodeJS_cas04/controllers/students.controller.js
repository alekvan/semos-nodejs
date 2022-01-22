const students = require("../models/students.model");

function listAllStudents(req, res) {
  res.send({
    message: "List of all students",
    students: students,
  });
}

function sameCourseStudents(req, res) {
  let filteredStudents = students.filter((student) => {
    return student.course.toLowerCase() == req.params.course.toLowerCase();
  });
  res.send({
    message: "Number of students that took the course " + req.params.course,
    students: filteredStudents,
  });
}

function sameYearStudents(req, res) {
  let filteredYearStudents = students.filter((student) => {
    return student.year == req.params.year;
  });
  res.send({
    message: "Students that started college in the year " + req.params.year,
    students: filteredYearStudents,
  });
}

function addNewStudents(req, res) {
  students.push(req.body);
  res.send({
    message:
      "New student with the name of " +
      req.body.name +
      " is added to the database.",
    students: students,
  });
}

module.exports = {
  sameCourseStudents,
  listAllStudents,
  sameYearStudents,
  addNewStudents,
};
