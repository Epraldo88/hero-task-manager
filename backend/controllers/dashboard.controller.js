import pool from "../db.js";
import { handleError, handleSuccess } from "../utils/responseHandler.js";

export const getSummary = async (req, res) => {
  try {
    const summary = await pool.query(`
      SELECT
        COUNT(*) AS total_tasks,
        COUNT(*) FILTER (WHERE status = 'Pending') AS pending,
        COUNT(*) FILTER (WHERE status = 'On Progress') AS on_progress,
        COUNT(*) FILTER (WHERE status = 'Done') AS done,
        COUNT(*) FILTER (WHERE deadline_date < NOW() AND status != 'Done') AS overdue
      FROM tasks
    `);
    handleSuccess(res, "Success fetch summary", summary.rows[0]);
  } catch (error) {
    handleError(res, error);
  }
};

export const getStatusSummary = async (req, res) => {
  try {
    const result = await pool.query(
      `
        SELECT status, COUNT(*) AS total
        FROM tasks
        GROUP BY status
        ORDER BY status
      `
    );
    handleSuccess(res, "Success get status summary from tasks", result.rows);
  } catch (error) {
    handleError(res, error);
  }
};

export const getPerformanceStatusSummary = async (req, res) => {
  try {
    const result = await pool.query(
      `
        SELECT performance_status, COUNT(*) AS total
        FROM tasks
        GROUP BY performance_status
        ORDER BY performance_status
      `
    );
    handleSuccess(
      res,
      "Success get performance status summary from tasks",
      result.rows
    );
  } catch (error) {
    handleError(res, error);
  }
};

export const getRecentActivities = async (req, res) => {
  try {
    const result = await pool.query(
      `
        SELECT
          task_logs.id,
          task_logs.status,
          task_logs.timestamp,
          tasks.title,
          tasks.assignee
        FROM task_logs
        JOIN tasks ON tasks.id = task_logs.task_id
        ORDER BY task_logs.timestamp DESC
        LIMIT 15;
      `
    );
    console.log({ result });
    handleSuccess(
      res,
      "Success fetch recent activities from task log",
      result.rows
    );
  } catch (error) {
    handleError(res, error);
  }
};
