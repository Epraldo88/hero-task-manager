import express from "express";
import {
  getPerformanceStatusSummary,
  getRecentActivities,
  getStatusSummary,
  getSummary,
} from "../controllers/dashboard.controller.js";

const router = express.Router();

router.get("/summary", getSummary);
router.get("/status-summary", getStatusSummary);
router.get("/performance-summary", getPerformanceStatusSummary);
router.get("/recent-activites", getRecentActivities);

export default router;
