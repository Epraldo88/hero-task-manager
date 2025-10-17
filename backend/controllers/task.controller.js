import pool from "../db.js";
import { handleError, handleSuccess } from "../utils/responseHandler.js";

export const getTask = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM tasks ORDER BY id DESC");
    handleSuccess(res, "All tasks fetched", result.rows);
  } catch (error) {
    handleError(res, error);
  }
};

export const createTask = async (req, res) => {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const { title, description, assignee, deadline_date } = req.body;

    const status = "Pending";
    const taskResult = await client.query(
      `
        INSERT INTO tasks 
        (title, description, assignee, status, deadline_date)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
      `,
      [title, description, assignee, status, deadline_date]
    );

    const newTask = taskResult.rows[0];

    await client.query(
      `
        INSERT INTO task_logs 
        (task_id, status)
        VALUES ($1, $2)
      `,
      [newTask.id, status]
    );

    await client.query("COMMIT");
    handleSuccess(res, "Task craeted successfully", newTask);
  } catch (error) {
    await client.query("ROLLBACK");
    handleError(res, error);
  } finally {
    client.release();
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, assignee, status, deadline_date } = req.body;
    const oldData = await pool.query(
      `
        SELECT * FROM tasks WHERE id = $1
      `,
      [id]
    );

    if (oldData.rows.length === 0) {
      return handleError(res, { message: "Task not found" });
    }
    const updated = await pool.query(
      `
        UPDATE tasks
        SET title = $1, description = $2, assignee = $3, status = $4, deadline_date = $5
        WHERE id = $6
        RETURNING *
      `,
      [
        title || oldData.rows[0].title,
        description || oldData.rows[0].description,
        assignee || oldData.rows[0].assignee,
        status || oldData.rows[0].status,
        deadline_date || oldData.rows[0].deadline_date,
        id,
      ]
    );
    handleSuccess(res, "Task updated successfully", updated.rows[0]);
  } catch (error) {
    handleError(res, error);
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await pool.query(
      `
        SELECT * FROM tasks WHERE ID = $1
      `,
      [id]
    );

    if (data.rows.length === 0) {
      return handleError(res, { message: "Task not found" });
    }
    await pool.query(
      `
        DELETE FROM tasks WHERE id = $1
      `,
      [id]
    );
    handleSuccess(res, "Task deleted", null);
  } catch (error) {
    handleError(res, error);
  }
};

export const getTaskDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await pool.query(
      `
        SELECT * FROM tasks WHERE id = $1
      `,
      [id]
    );

    const taskLog = await pool.query(
      `
        SELECT * FROM task_logs WHERE task_id = $1 ORDER BY id ASC
      `,
      [id]
    );

    const result = {
      ...task.rows[0],
      logs: taskLog.rows,
    };

    handleSuccess(res, "Task detail", result);
  } catch (error) {
    handleError(res, error);
  }
};
