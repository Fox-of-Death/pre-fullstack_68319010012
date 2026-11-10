require('dotenv').config();

const express = require("express");
const cors = require("cors");
const studentRoutes = require("./src/routes/student.routes");
const subjectRoutes = require("./src/routes/subject.routes");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Server is Running" });
});

app.use("/api/students", studentRoutes);

app.use("/api/subject", subjectRoutes);

app.listen(PORT, "0.0.0.0", () => {
    console.log(`server is running on http://localhost:${PORT}`)
})