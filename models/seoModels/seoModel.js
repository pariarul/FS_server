import pool from "../../config/db.js";

export const getSeo = async (tableName) => {
  try {
    // Basic verification to prevent SQL injection (must match our hardcoded list)
    if (!tableName.startsWith('seo_')) throw new Error("Invalid table name");
    
    const res = await pool.query(`SELECT * FROM ${tableName} WHERE id = 1`);
    return { data: res.rows[0], error: null };
  } catch (error) {
    return { data: null, error };
  }
};

export const updateSeo = async (tableName, metadata) => {
  try {
    if (!tableName.startsWith('seo_')) throw new Error("Invalid table name");

    const res = await pool.query(
      `UPDATE ${tableName} SET metadata = $1, updated_at = NOW() WHERE id = 1 RETURNING *`,
      [JSON.stringify(metadata)]
    );
    return { data: res.rows[0], error: null };
  } catch (error) {
    return { data: null, error };
  }
};
