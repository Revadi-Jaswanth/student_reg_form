const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/submit", (req, res) => {
  console.log("Student Data Received:");
  console.log(req.body);

  res.send(`
    <h2>Registration Successful ✅</h2>
    <p><strong>Name:</strong> ${req.body.name}</p>
    <p><strong>Email:</strong> ${req.body.email}</p>
    <p><strong>Age:</strong> ${req.body.age}</p>
    <p><strong>Gender:</strong> ${req.body.gender}</p>
    <p><strong>Course:</strong> ${req.body.course}</p>
    <p><strong>Address:</strong> ${req.body.address}</p>
    <a href="/">Go Back</a>
  `);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
