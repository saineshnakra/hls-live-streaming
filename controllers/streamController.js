// controllers/streamController.js
const streamService = require("../services/streamService");

// Start stream and upload HLS files
async function startStream(req, res) {
  const { streamId } = req.body;

  if (!streamId || !req.files || req.files.length === 0) {
    return res
      .status(400)
      .json({ message: "Invalid stream or no files provided" });
  }

  try {
    const playlistUrl = await streamService.saveHLSFiles(streamId, req.files);
    return res.status(200).json({
      message: "Stream started successfully",
      broadcastEndpoint: `http://localhost:8080${playlistUrl}`,
    });
  } catch (error) {
    console.error("Error saving HLS files:", error);
    return res.status(500).json({ message: "Error starting stream" });
  }
}

// Upload additional chunks during the stream
async function uploadStreamChunks(req, res) {
  const { streamId } = req.body;

  if (!streamId || !req.files || req.files.length === 0) {
    return res
      .status(400)
      .json({ message: "Invalid stream or no files provided" });
  }

  try {
    await streamService.saveHLSFiles(streamId, req.files);
    return res.status(200).json({ message: "Chunks uploaded successfully" });
  } catch (error) {
    console.error("Error uploading stream chunks:", error);
    return res.status(500).json({ message: "Error uploading stream chunks" });
  }
}

module.exports = {
  startStream,
  uploadStreamChunks,
};
