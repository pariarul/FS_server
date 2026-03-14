import pool from "../../config/db.js";

export const getProductsSection = async () => {
  try {
    const res = await pool.query('SELECT * FROM home_products_section WHERE id = 1');
    return { data: res.rows[0], error: null };
  } catch (error) {
    return { data: null, error };
  }
};

export const updateProductsSection = async (payload) => {
  try {
    const { heading, description, categories } = payload;
    const res = await pool.query(
      `UPDATE home_products_section 
       SET heading = $1, description = $2, categories = $3, updated_at = NOW() 
       WHERE id = 1 RETURNING *`,
      [
        heading ? JSON.stringify(heading) : '{}',
        description ? JSON.stringify(description) : '{}',
        categories ? JSON.stringify(categories) : '[]'
      ]
    );
    return { data: res.rows[0], error: null };
  } catch (error) {
    return { data: null, error };
  }
};