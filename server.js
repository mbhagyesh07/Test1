// server.js
import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Hello from the test server!" });
});

// Test route
app.get("/test-job", (req, res) => {
  res.json({ message: "Test job endpoint works!" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
