// models/supplierformModel.js
import pool from "../config/db.js";

/** -------------------------------
 * GET all supplier forms
 * ------------------------------- */
export const getSupplierForms = async () => {
  try {
    const res = await pool.query(
      `SELECT * FROM supplier_form ORDER BY created_at DESC;`
    );
    return res.rows.map(row => ({
      ...row,
      // mapping DB snake_case columns if necessary, but UI expects:
      // id, formData: form_data, date, time
      formData: row.form_data
    }));
  } catch (error) {
    console.error("Error fetching supplier forms:", error);
    throw error;
  }
};

/** -------------------------------
 * GET a single supplier form by ID
 * ------------------------------- */
export const getSupplierFormById = async (id) => {
  try {
    const res = await pool.query(
      `SELECT * FROM supplier_form WHERE id = $1;`, [id]
    );
    if(res.rows.length === 0) return null;
    
    const row = res.rows[0];
    return {
      ...row,
      formData: row.form_data
    }
  } catch (error) {
    console.error(`Error fetching supplier form ${id}:`, error);
    throw error;
  }
};

/** -------------------------------
 * POST / Create new supplier form
 * ------------------------------- */
export const createSupplierForm = async (formData, date, time) => {
  try {
    const res = await pool.query(
      `INSERT INTO supplier_form (form_data, date, time) 
       VALUES ($1, $2, $3) RETURNING *;`,
       [JSON.stringify(formData), date, time]
    );
    return res.rows[0];
  } catch (error) {
    console.error("Error creating supplier form:", error);
    throw error;
  }
};

/** -------------------------------
 * PUT / Update supplier form by ID
 * ------------------------------- */
export const updateSupplierForm = async (id, updatedData) => {
  try {
    const res = await pool.query(
      `UPDATE supplier_form SET form_data = $1 WHERE id = $2 RETURNING *;`,
      [JSON.stringify(updatedData), id]
    );
    if(res.rows.length === 0) return null;
    return res.rows[0];
  } catch (error) {
    console.error(`Error updating supplier form ${id}:`, error);
    throw error;
  }
};

/** -------------------------------
 * DELETE a supplier form by ID
 * ------------------------------- */
export const deleteSupplierForm = async (id) => {
  try {
    await pool.query(`DELETE FROM supplier_form WHERE id = $1`, [id]);
    return { success: true };
  } catch (error) {
    console.error(`Error deleting supplier form ${id}:`, error);
    throw error;
  }
};

/** -------------------------------
 * GET Heading and Description
 * ------------------------------- */
export const getSupplierFormHeading = async () => {
    try {
      const res = await pool.query('SELECT * FROM supplier_form_heading WHERE id = 1');
      if (res.rows.length === 0) return { heading: {}, description: {} }
      return res.rows[0];
    } catch (error) {
      console.error("Error fetching heading:", error);
      throw error;
    }
};

/** -------------------------------
 * PUT Heading and Description
 * ------------------------------- */
export const updateSupplierFormHeading = async (heading, description) => {
    try {
      const res = await pool.query(
        `UPDATE supplier_form_heading SET heading = $1, description = $2 WHERE id = 1 RETURNING *;`,
        [JSON.stringify(heading), JSON.stringify(description)]
      );
      return res.rows[0];
    } catch (error) {
      console.error("Error updating heading:", error);
      throw error;
    }
};