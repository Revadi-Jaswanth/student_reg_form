const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Route to serve form
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Handle form submission
app.post("/submit", (req, res) => {
  console.log("Form Data Received:");
  console.log(req.body);

  res.send(`
    <h2>Registration Successful</h2>
    <p>Thank you, ${req.body.name}. Your form has been submitted.</p>
    <a href="/">Go Back</a>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
