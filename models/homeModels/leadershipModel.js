import pool from "../../config/db.js";

export const getLeadership = async () => {
  const res = await pool.query('SELECT * FROM home_leadership_section WHERE id = 1');
  return { data: res.rows[0], error: null };
};

export const updateLeadership = async (data) => {
  const { heading, title, description, btn, leaders } = data;
  const res = await pool.query(
    `UPDATE home_leadership_section 
     SET heading = $1, title = $2, description = $3, btn = $4, leaders = $5, updated_at = NOW() 
     WHERE id = 1 RETURNING *`,
    [
      heading ? JSON.stringify(heading) : '{}',
      title ? JSON.stringify(title) : '{}',
      description ? JSON.stringify(description) : '{}',
      btn ? JSON.stringify(btn) : '{}',
      leaders ? JSON.stringify(leaders) : '[]'
    ]
  );
  return { data: res.rows[0], error: null };
};