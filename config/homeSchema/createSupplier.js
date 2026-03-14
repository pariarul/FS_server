import pool from "../db.js";

const createSupplier= async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS home_supplier_section (
        id INT PRIMARY KEY DEFAULT 1,
        heading JSONB NOT NULL DEFAULT '{"en":"","zh":"","si":""}',
        description JSONB NOT NULL DEFAULT '{"en":"","zh":"","si":""}',
        image_path TEXT DEFAULT '',
        updated_at TIMESTAMP DEFAULT NOW()
      );
    `);

    // Ensure image_path column exists and drop old image column if it exists
    await pool.query(`
      DO $$ 
      BEGIN 
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='home_supplier_section' AND column_name='image_path') THEN
          ALTER TABLE home_supplier_section ADD COLUMN image_path TEXT DEFAULT '';
        END IF;
        IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='home_supplier_section' AND column_name='image') THEN
          ALTER TABLE home_supplier_section DROP COLUMN image;
        END IF;
      END $$;
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