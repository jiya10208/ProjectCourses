import bodyParser from "body-parser";
import fs from "node:fs/promises";
import express from "express";

const app = express();
const coursesData = await fs.readFile("./data/courses.json", "utf8");
const courses = JSON.parse(coursesData);
const studentsData = await fs.readFile("./data/students.json", "utf8");
const students = JSON.parse(studentsData);

app.use(bodyParser.json());
app.use(express.static("public"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

//  gettin g all the data
app.get("/courses", async (req, res) => {
  res.json(courses);
});
app.get("/students", async (req, res) => {
  res.json(students);
});

//  getting the data based on id
app.get("/courses/:id", async (req, res) => {
  const id = req.params.id;
  const req_course = courses.find((el) => el.id === id);
  res.status(200).json(req_course);
});

app.get("/students/:id", async (req, res) => {
  const id = req.params.id;
  const curr_student = students.find((el) => el.id === id);
  res.status(200).json(curr_student);
});
app.put("/students/:id", async (req, res) => {
  const id = req.params.id;
  console.log(`id : ${id} ${typeof id}`);
  const updatedData = req.body;
  console.log(`updatedData : ${updatedData} ${typeof updatedData}`);
  const studentIndex = students.findIndex((el) => el.id === id);
  console.log(studentIndex);

  if (studentIndex < 0) {
    return res.status(400).json({ status: "fail", message: "invalid ID" });
  }
  students[studentIndex] = updatedData;
  console.log(students[studentIndex]);
  await fs.writeFile("./data/students.json", JSON.stringify(students));

  res.status(200).json({ status: "success", data: students });
});

//  new Courses for future scope
app.post("/newCourses", async (req, res) => {
  const coursesData = req.body;
  if (coursesData === null) {
    return res.status(400).json({ message: "Missing course data." });
  }
  if (!coursesData || coursesData.length === 0) {
    return res.status(400).json({ message: "Missing or empty course data." });
  }

  const newId = Number(courses[courses.length - 1].id) + 1;
  // console.log(newId);

  const newCourse = Object.assign({ id: newId }, coursesData);
  courses.push(newCourse);

  try {
    await fs.writeFile("./data/courses.json", JSON.stringify(courses));

    res.status(201).json(newCourse);
  } catch (error) {
    console.error("Error writing courses data:", error);
    if (error.code === "ENOENT") {
      // Handle case where file doesn't exist
      return res.status(400).json({ message: "File does not exist." });
    } else if (error.code === "EACCES") {
      // Handle case where permission is denied
      return res
        .status(403)
        .json({ message: "Permission denied to write file." });
    } else {
      // Handle other errors
      return res.status(500).json({ message: "Internal server error" });
    }
  }
});

app.use((req, res) => {
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  res.status(404).json({ message: "Not found" });
});

app.listen(3000);
