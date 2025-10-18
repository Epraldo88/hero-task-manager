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

    // res.json(summary.rows[0]);
    handleSuccess(res, "Success fetch summary", summary.rows[0]);
  } catch (error) {
    handleError(res, error);
  }
};
