import pool from "../db.js";

const createProducts = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS home_products_section (

        id INT PRIMARY KEY DEFAULT 1,

        heading JSONB NOT NULL DEFAULT '{"en":"","zh":"","si":""}',
        description JSONB NOT NULL DEFAULT '{"en":"","zh":"","si":""}',

        categories JSONB DEFAULT '[]',

        updated_at TIMESTAMP DEFAULT NOW()

      );
    `);

    // Insert default row if not exists
    await pool.query(`
      INSERT INTO home_products_section (id)
      VALUES (1)
      ON CONFLICT (id) DO NOTHING;
    `);

    console.log("Products schema ready");

  } catch (error) {
    console.error("Products schema error:", error);
  }
};

export default createProducts;