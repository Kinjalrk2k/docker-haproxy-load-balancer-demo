require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ server_name: process.env.SERVER_NAME });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT} 🚀`));
