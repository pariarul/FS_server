import pool from "../../config/db.js";

export const getAbout = async () => {
  const res = await pool.query('SELECT * FROM home_about_section WHERE id = 1');
  return { data: res.rows[0], error: null };
};

export const updateAbout = async (data) => {
  const { title, description, status } = data;
  const res = await pool.query(
    `UPDATE home_about_section 
     SET title = $1, description = $2, status = $3, updated_at = NOW() 
     WHERE id = 1 RETURNING *`,
    [
      title ? JSON.stringify(title) : '{}',
      description ? JSON.stringify(description) : '{}',
      status ? JSON.stringify(status) : '[]'
    ]
  );
  return { data: res.rows[0], error: null };
};