import pool from "../db.js";

const pages = [
  "home", "company", "history", "leaderships", "founder", 
  "cofounder", "products", "privacy_policy", "terms_conditions", "suppliers"
];

const createSeo = async () => {
  try {
    for (const page of pages) {
      const tableName = `seo_${page}`;
      await pool.query(`
        CREATE TABLE IF NOT EXISTS ${tableName} (
          id INT PRIMARY KEY DEFAULT 1,
          metadata JSONB,
          updated_at TIMESTAMP DEFAULT NOW()
        );
      `);

      await pool.query(`
        INSERT INTO ${tableName} (id, metadata, updated_at)
        VALUES (
          1,
          '{
            "title": {"en": "", "zh": "", "si": ""},
            "description": {"en": "", "zh": "", "si": ""},
            "keywords": {"en": [], "zh": [], "si": []}
          }',
          NOW()
        )
        ON CONFLICT (id) DO NOTHING;
      `);
    }
    console.log("SEO schemas ready");
  } catch (error) {
    console.error("SEO schemas error:", error);
  }
};

export default createSeo;
