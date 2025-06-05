const express = require("express");
const cors = require("cors");
const axios = require("axios");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyFY9YwFJRbndgDbgKwMc_K5QaPmzt6PyJa6EGeBAGb014j10XMQ0mL9WcrrXswwAPoUQ/exec"; // Replace with your real URL

app.post("/api/submit", async (req, res) => {
  try {
    const response = await axios.post(GOOGLE_SCRIPT_URL, req.body);
    res.json({ status: "success", data: response.data });
  } catch (err) {
    console.error("Error forwarding to GAS:", err.message);
    res.status(500).json({ status: "error", message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
