// services/streamService.js
const path = require("path");
const fs = require("fs-extra");

// Base path for HLS storage
const hlsBasePath = path.join(__dirname, "../public/hls/");

// Create directories and save HLS files
async function saveHLSFiles(streamId, files) {
  const streamDir = path.join(hlsBasePath, streamId);

  // Ensure the stream directory exists
  await fs.ensureDir(streamDir);

  // Iterate over the uploaded files and save them
  const filePromises = files.map((file) => {
    const filePath = path.join(streamDir, file.originalname);
    return fs.writeFile(filePath, file.buffer);
  });

  // Wait for all files to be saved
  await Promise.all(filePromises);

  // Return the HLS playlist URL
  return `/hls/${streamId}/playlist.m3u8`;
}

module.exports = {
  saveHLSFiles,
};
