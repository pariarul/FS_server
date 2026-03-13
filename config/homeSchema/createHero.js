import pool from "../db.js";


const createHero = async () => {
      try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS home_hero_section (

        id INT PRIMARY KEY DEFAULT 1,

        heading JSONB,
        subheading JSONB,

        background JSONB,
        suppliers_branding JSONB,

        updated_at TIMESTAMP DEFAULT NOW()

      );
    `);

    // Insert default row if not exists
    await pool.query(`
      INSERT INTO home_hero_section (
        id,
        heading,
        subheading,
        background,
        suppliers_branding,
        updated_at
      )
      VALUES (
        1,
        '{"en": "", "zh": "", "si": ""}',
        '{"en": "", "zh": "", "si": ""}',
        '{}',
        '{}',
        NOW()
      )
      ON CONFLICT (id) DO NOTHING;
    `);

    console.log("Heroschema  ready");

  } catch (error) {
    console.error("HeroSchema  error:", error);
  }
}

export default createHero