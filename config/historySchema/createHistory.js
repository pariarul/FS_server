import pool from "../db.js";

const createHistory = async () => {
  try {

    // Create table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS history_section (
        id INT PRIMARY KEY,
        heading JSONB DEFAULT '{}'::jsonb,
        timeline JSONB DEFAULT '[]'::jsonb,
        updated_at TIMESTAMP DEFAULT NOW()
      );
    `);

    // Insert default data
    await pool.query(`
      INSERT INTO history_section (
        id,
        heading,
        timeline
      )
      VALUES (
        1,
        '{"en":"Our History","zh":"","si":""}',
        '[
          {
            "id":"1",
            "year":"2000",
            "en":{"title":"Company Founded","description":"Our company was founded with a mission to grow globally."},
            "zh":{"title":"","description":""},
            "si":{"title":"","description":""}
          },
          {
            "id":"2",
            "year":"2005",
            "en":{"title":"First International Partnership","description":"We expanded operations with our first global partner."},
            "zh":{"title":"","description":""},
            "si":{"title":"","description":""}
          },
          {
            "id":"3",
            "year":"2015",
            "en":{"title":"Global Expansion","description":"Entered multiple international markets."},
            "zh":{"title":"","description":""},
            "si":{"title":"","description":""}
          },
          {
            "id":"4",
            "year":"2024",
            "en":{"title":"Digital Transformation","description":"Implemented advanced technology for global services."},
            "zh":{"title":"","description":""},
            "si":{"title":"","description":""}
          },
          {
            "id":"5",
            "year":"2030",
            "en":{"title":"Global Leadership","description":"Established a global leadership team."},
            "zh":{"title":"","description":""},
            "si":{"title":"","description":""}
          },
          {
            "id":"6",
            "year":"2040",
            "en":{"title":"Global Presence","description":"Expanded operations globally."},
            "zh":{"title":"","description":""},
            "si":{"title":"","description":""}
          }
        ]'
      )
      ON CONFLICT (id)
      DO UPDATE SET
        heading = EXCLUDED.heading,
        timeline = EXCLUDED.timeline,
        updated_at = NOW();
    `);

    console.log("History Section Schema Ready");

  } catch (error) {
    console.error("History Section Schema Error:", error);
  }
};

export default createHistory;