import pool from "../db.js";

const createCta = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS home_cta_section (
        id INT PRIMARY KEY DEFAULT 1,
        heading JSONB NOT NULL DEFAULT '{"en":"","zh":"","si":""}',
        subheading JSONB NOT NULL DEFAULT '{"en":"","zh":"","si":""}',
        description JSONB NOT NULL DEFAULT '{"en":"","zh":"","si":""}',
        btn JSONB NOT NULL DEFAULT '{"en":"","zh":"","si":""}',
        updated_at TIMESTAMP DEFAULT NOW()
      );
    `);

    // Ensure btn column exists
    await pool.query(`
      DO $$ 
      BEGIN 
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='home_cta_section' AND column_name='btn') THEN
          ALTER TABLE home_cta_section ADD COLUMN btn JSONB NOT NULL DEFAULT '{"en":"","zh":"","si":""}';
        END IF;
      END $$;
    `);

    // Insert default row if not exists
    await pool.query(`
      INSERT INTO home_cta_section (id)
      VALUES (1)
      ON CONFLICT (id) DO NOTHING;
    `);

    console.log("CTA schema ready");

  } catch (error) {
    console.error("CTA schema error:", error);
  }
};

export default createCta;