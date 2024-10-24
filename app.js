// app.js
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const streamRoutes = require("./routes/streamRoutes");

const app = express();
const port = 3000;

// Setup request logger
app.use(morgan("dev"));

// Serve static files for HLS
app.use("/hls", express.static(path.join(__dirname, "public/hls")));

// Mount the stream routes
app.use("/api", streamRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
