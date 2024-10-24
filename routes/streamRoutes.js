// routes/streamRoutes.js
const express = require("express");
const multer = require("multer");
const streamController = require("../controllers/streamController");

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Define the routes
router.post(
  "/stream/start",
  upload.array("files", 12),
  streamController.startStream
);
router.post(
  "/stream/upload",
  upload.array("files", 12),
  streamController.uploadStreamChunks
);

module.exports = router;
