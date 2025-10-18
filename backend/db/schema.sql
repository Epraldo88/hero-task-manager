CREATE TABLE IF NOT EXISTS tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  assignee VARCHAR(100),
  status VARCHAR(20) CHECK (status IN ('Pending', 'On Progress', 'Done')) DEFAULT 'Pending',
  performance_status VARCHAR(20) CHECK (performance_status IN ('Ontime', 'Late', 'Not Evaluated')) DEFAULT 'Not Evaluated',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  start_date TIMESTAMP,
  deadline_date TIMESTAMP,
  end_date TIMESTAMP
);

CREATE TABLE IF NOT EXISTS task_logs (
  id SERIAL PRIMARY KEY,
  task_id INT REFERENCES tasks(id) ON DELETE CASCADE,
  status VARCHAR(255),
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
