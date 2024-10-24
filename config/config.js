module.exports = {
  jwtSecret:
    process.env.JWT_SECRET || "9JGmEs6D1bTd0xaoaPGQdSLQ4aFlfxAxucR0Nvw79Gk=", // Make sure this matches your .env JWT_SECRET
  uploadDir: process.env.UPLOAD_DIR || "uploads/",
  streamDir: process.env.STREAM_DIR || "public/streams/",
};
