import pool from "../../config/db.js";

export const getCtaSection = async () => {
  try {
    const res = await pool.query('SELECT * FROM home_cta_section WHERE id = 1');
    return { data: res.rows[0], error: null };
  } catch (error) {
    return { data: null, error };
  }
};

export const updateCtaSection = async (payload) => {
  try {
    const { heading, subheading, description, btn } = payload;
    const res = await pool.query(
      `UPDATE home_cta_section 
       SET heading = $1, subheading = $2, description = $3, btn = $4, updated_at = NOW() 
       WHERE id = 1 RETURNING *`,
      [
        heading ? JSON.stringify(heading) : '{"en":"","zh":"","si":""}',
        subheading ? JSON.stringify(subheading) : '{"en":"","zh":"","si":""}',
        description ? JSON.stringify(description) : '{"en":"","zh":"","si":""}',
        btn ? JSON.stringify(btn) : '{"en":"","zh":"","si":""}'
      ]
    );
    return { data: res.rows[0], error: null };
  } catch (error) {
    return { data: null, error };
  }
};