const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.static("public"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = file.fieldname === "video" ? "public/videos" : "public/thumbnails";
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    const safeName = file.originalname.replace(/[^a-z0-9.\-_]/gi, '_');
    cb(null, safeName);
  }
});

const upload = multer({ storage });

app.post("/upload", upload.fields([
  { name: "video", maxCount: 1 },
  { name: "thumbnail", maxCount: 1 }
]), (req, res) => {
  res.send("Files uploaded successfully!");
});

app.get("/videos", (req, res) => {
  fs.readdir("public/videos", (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read videos folder" });
    }
    const mp4Files = files.filter(file => file.endsWith(".mp4"));
    res.json(mp4Files);
  });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
