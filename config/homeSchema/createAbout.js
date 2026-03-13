import pool from "../db.js";

const createAbout = async () => {
  try {

    await pool.query(`
      CREATE TABLE IF NOT EXISTS home_about_section (

        id INT PRIMARY KEY DEFAULT 1,

        title JSONB,
        description JSONB,

        status JSONB,

        updated_at TIMESTAMP DEFAULT NOW()

      );
    `);

    // Insert default row
    await pool.query(`
      INSERT INTO home_about_section (
        id,
        title,
        description,
        status,
        updated_at
      )
      VALUES (
        1,
        '{"en": "", "zh": "", "si": ""}',
        '{"en": "", "zh": "", "si": ""}',
        '[]',
        NOW()
      )
      ON CONFLICT (id) DO NOTHING;
    `);

    console.log("About schema ready");

  } catch (error) {
    console.error("About schema error:", error);
  }
};

export default createAbout;