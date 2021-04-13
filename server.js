const express = require("express");
const db = require("./src/db");
const studenRouter = require("./src/routes/student");

const app = express();
db();
app.use(express.json());

app.use("/student", studenRouter);

app.listen(8000, () => console.log("Listening on port 8000"));
