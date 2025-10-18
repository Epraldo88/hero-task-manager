import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import taskRoute from "./routes/task.route.js";
import dashboardRoute from "./routes/dashboard.route.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/tasks", taskRoute);
app.use("/api/dashboard", dashboardRoute);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
