// console.log("hello node js")
// let a = 10;
// let b = 20;
// let c = a + b
// console.log("addition==>", c)
// console.log("hello  node js")
// let a=10
// let b=20
// let c=a+b
// console.log("Addition ==>",c)
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));


let students = [
    { id: 1, name: "Amit", course: "NodeJS" },
    { id: 2, name: "Neha", course: "React" }
];

// 1️⃣ — Get all students
app.get("/students", (req, res) => {
    res.json(students);
});

// 2️⃣ — Add a new student
app.post("/students", (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        course: req.body.course
    };

    students.push(newStudent);
    res.json({ message: "Student added!", data: newStudent });
});

// 3️⃣ — Get student by id
app.get("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ error: "Student not found" });
    }

    res.json(student);
});





// GET ALL
app.get("/students", (req, res) => {
    res.json(students);
});

// ADD
app.post("/students", (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        course: req.body.course
    };
    students.push(newStudent);
    res.json(newStudent);
});

// UPDATE
app.put("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) return res.status(404).json({ error: "Not found" });

    student.name = req.body.name;
    student.course = req.body.course;

    res.json(student);
});

// DELETE
app.delete("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    students = students.filter(s => s.id !== id);
    res.json({ message: "Deleted" });
});



app.listen(3000, () => {
    console.log("Server started at 3000 ");
});