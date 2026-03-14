import pool from "../../config/db.js";

// Fetch the full catalog JSON for a given type ('import' or 'export')
export const getCatalogData = async (type) => {
    try {
        const table = type === 'import' ? 'import_products' : 'export_products';
        const res = await pool.query(`SELECT data FROM ${table} WHERE id = 1`);
        return { data: res.rows[0]?.data, error: null };
    } catch (error) {
        return { data: null, error };
    }
};

// Update the full catalog JSON for a given type
export const updateCatalogData = async (type, data) => {
    try {
        const table = type === 'import' ? 'import_products' : 'export_products';
        const res = await pool.query(
            `UPDATE ${table} SET data = $1, updated_at = NOW() WHERE id = 1 RETURNING data`,
            [JSON.stringify(data)]
        );
        return { data: res.rows[0]?.data, error: null };
    } catch (error) {
        return { data: null, error };
    }
};
