import pool from "../db.js";

const createLeadership = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS home_leadership_section (

        id INT PRIMARY KEY DEFAULT 1,

        heading JSONB,
        title JSONB,
        description JSONB,
        btn JSONB,

        leaders JSONB,

        updated_at TIMESTAMP DEFAULT NOW()

      );
    `);

    // Insert default row
    await pool.query(`
      INSERT INTO home_leadership_section (
        id,
        heading,
        title,
        description,
        btn,
        leaders,
        updated_at
      )
      VALUES (
        1,
        '{"en": "", "zh": "", "si": ""}',
        '{"en": "", "zh": "", "si": ""}',
        '{"en": "", "zh": "", "si": ""}',
        '{"en": "", "zh": "", "si": ""}',
        '[]',
        NOW()
      )
      ON CONFLICT (id) DO NOTHING;
    `);

    console.log("Leadership schema ready");

  } catch (error) {
    console.error("Leadership schema error:", error);
  }
};

export default createLeadership;