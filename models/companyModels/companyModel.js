import pool from "../../config/db.js";

// Fetch the company section (single row)
export const getCompany = async () => {
  try {
    const res = await pool.query('SELECT * FROM company_section WHERE id = 1');
    return { data: res.rows[0], error: null };
  } catch (error) {
    return { data: null, error };
  }
};

// Update the company section
export const updateCompany = async (data) => {
  try {
    const keys = Object.keys(data).filter(k => k !== 'id');
    if (keys.length === 0) return { data: null, error: new Error('No data provided') };
    
    const setClauses = keys.map((k, i) => `${k} = $${i + 1}`).join(', ');
    const values = keys.map(k => typeof data[k] === 'object' && data[k] !== null ? JSON.stringify(data[k]) : data[k]);
    
    const res = await pool.query(
      `UPDATE company_section SET ${setClauses}, updated_at = NOW() WHERE id = 1 RETURNING *`,
      values
    );
    return { data: res.rows[0], error: null };
  } catch (error) {
    return { data: null, error };
  }
};
