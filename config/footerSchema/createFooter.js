import pool from "../db.js";

const createFooter = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS footer_section (
        id INT PRIMARY KEY DEFAULT 1,
        "logoPath" TEXT,
        "companyName" JSONB,
        "companyAddress" JSONB,
        links JSONB,
        updated_at TIMESTAMP DEFAULT NOW()
      );
    `);

    // Insert default row
    await pool.query(`
      INSERT INTO footer_section (id, "companyName", "companyAddress", links, updated_at)
      VALUES (
        1,
        '{"en": "", "zh": "", "si": ""}',
        '{"en": "", "zh": "", "si": ""}',
        '{"side1": {"heading": {"en": "Quick Links"}}, "side2": {"heading": {"en": "About"}}, "side3": {"heading": {"en": "Products"}}, "side4": {"heading": {"en": "Contact"}}}',
        NOW()
      )
      ON CONFLICT (id) DO NOTHING;
    `);

    console.log("Footer schema ready");
  } catch (error) {
    console.error("Footer schema error:", error);
  }
};

export default createFooter;
