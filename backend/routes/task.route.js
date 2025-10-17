import express from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTaskDetail,
  updateTask,
} from "../controllers/task.controller.js";

const router = express.Router();

router.get("/", getTask);
router.get("/detail/:id", getTaskDetail);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
