require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("My week 2 API!");
});

app.post("/user", (req, res) => {
  const { name, email } = req.body;
  console.log(req.body);
  if (!name || !email) {
    return res.status(400).json({ error: "missing data" });
  }
  res.status(201).json({ message: `Hello ${name}!` });
});

app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  res.send(`User ${id} profile`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
