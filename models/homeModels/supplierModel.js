import pool from "../../config/db.js";

export const getSupplierSection = async () => {
  try {
    const res = await pool.query('SELECT id, heading, description, image_path AS "imagePath" FROM home_supplier_section WHERE id = 1');
    return { data: res.rows[0], error: null };
  } catch (error) {
    return { data: null, error };
  }
};

export const updateSupplierSection = async (data) => {
  try {
    const { heading, description, imagePath } = data;
    const res = await pool.query(
      `UPDATE home_supplier_section 
       SET heading = $1, description = $2, image_path = $3, updated_at = NOW() 
       WHERE id = 1 RETURNING id, heading, description, image_path AS "imagePath"`,
      [
        heading ? JSON.stringify(heading) : '{"en":"","zh":"","si":""}',
        description ? JSON.stringify(description) : '{"en":"","zh":"","si":""}',
        imagePath || ''
      ]
    );
    return { data: res.rows[0], error: null };
  } catch (error) {
    console.error("Model Error:", error);
    return { data: null, error };
  }
};