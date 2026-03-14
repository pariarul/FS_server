import pool from "../db.js";

const createTerms = async () => {
  try {
    // Create table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS terms_section (
        id INT PRIMARY KEY,
        heading JSONB DEFAULT '{}'::jsonb,
        sections JSONB DEFAULT '[]'::jsonb,
        updated_at TIMESTAMP DEFAULT NOW()
      );
    `);

    // Insert default data
    await pool.query(`
      INSERT INTO terms_section (
        id,
        heading,
        sections
      )
      VALUES (
        1,
        '{"en":"Terms and Conditions","zh":"","si":""}',
        '[
          {
            "id":"1",
            "en": {
              "title":"Acceptance of Terms",
              "blocks":[
                {"type":"description","text":"By using our services, you agree to these terms."},
                {"type":"points","items":["You accept all rules and regulations","You must be at least 18 years old"]}
              ]
            },
            "zh": { "title":"", "blocks":[] },
            "si": { "title":"", "blocks":[] }
          },
          {
            "id":"2",
            "en": {
              "title":"Account Registration",
              "blocks":[
                {"type":"description","text":["You must create an account to access certain features.","Keep your login credentials secure."]}
              ]
            },
            "zh": { "title":"", "blocks":[] },
            "si": { "title":"", "blocks":[] }
          },
          {
            "id":"3",
            "en": {
              "title":"Payment Terms",
              "blocks":[
                {"type":"description","text":"All payments are due immediately unless otherwise stated."},
                {"type":"points","items":["Late payments may incur fees","Refunds are handled on a case-by-case basis"]}
              ]
            },
            "zh": { "title":"", "blocks":[] },
            "si": { "title":"", "blocks":[] }
          }
        ]'
      )
      ON CONFLICT (id)
      DO UPDATE SET
        heading = EXCLUDED.heading,
        sections = EXCLUDED.sections,
        updated_at = NOW();
    `);

    console.log("Terms Section Schema Ready");

  } catch (error) {
    console.error("Terms Section Schema Error:", error);
  }
};

export default createTerms;