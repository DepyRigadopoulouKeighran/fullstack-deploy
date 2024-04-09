import express from "express";
import { config } from "dotenv";
import connectDB from "./lib/database.js";
import { authRouter } from "./src/routes/authRouter.js";
import cors from "cors";
import { serviceRouter } from "./src/routes/serviceRouter.js";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
config();
app.use(express.json());
connectDB();
app.use(cors());
const port = process.env.PORT;

const currentFileLocation = fileURLToPath(import.meta.url);

const __dirname = path.dirname(currentFileLocation);

app.use(express.static(path.join(__dirname, "/public/frontend/dist")));

app.use("/auth", authRouter);
app.use("/services", serviceRouter);

app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .send({ error: err.message || "Something went wrong!" });
});

app.listen(port, () => {
  console.log(`[SERVER] running on http://localhost:${port}`);
});

app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "public", "frontend", "dist", "index.html")
  );
});
