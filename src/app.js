import express from "express";
import http from "http";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
const server = http.createServer(app);

const port = process.env.APP_PORT || 3000;

const startServer = async () => {
  try {
    server.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    process.exit(1);
  }
};

startServer();
