const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
})
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../styles.css"))
})

app.use("/js", express.static(path.join(__dirname, "../index.js")))

// to show css on delployed version
app.use("/css", express.static(path.join(__dirname, "../styles.css")))



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)});