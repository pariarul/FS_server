import pool from "../db.js";

const createSupplier= async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS home_supplier_section (

        id INT PRIMARY KEY DEFAULT 1,

        heading JSONB NOT NULL DEFAULT '{"en":"","zh":"","si":""}',
        description JSONB NOT NULL DEFAULT '{"en":"","zh":"","si":""}',

        image BYTEA,


        updated_at TIMESTAMP DEFAULT NOW()

      );
    `);

    await pool.query(`
      INSERT INTO home_supplier_section (id)
      VALUES (1)
      ON CONFLICT (id) DO NOTHING;
    `);

    console.log("Supplier schema ready");

  } catch (error) {
    console.error("Supplier schema error:", error);
  }
};

export default createSupplier;