import pool from "../db.js";

const createCompany = async () => {
  try {
    // Create table if not exists
    await pool.query(`
      CREATE TABLE IF NOT EXISTS company_section (
        id INT PRIMARY KEY DEFAULT 1,
        about JSONB DEFAULT '{}'::jsonb,
        connection JSONB DEFAULT '{}'::jsonb,
        vision JSONB DEFAULT '{}'::jsonb,
        mission JSONB DEFAULT '{}'::jsonb,
        cards JSONB DEFAULT '[]'::jsonb,
        video_section_path TEXT,
        updated_at TIMESTAMP DEFAULT NOW()
      );
    `);

    // Insert default row with 2 cards
    await pool.query(`
      INSERT INTO company_section (
        id,
        about,
        connection,
        vision,
        mission,
        cards,
        video_section_path
      )
      VALUES (
        1,
        '{
          "en":{"heading":"","title":"","description":""},
          "zh":{"heading":"","title":"","description":""},
          "si":{"heading":"","title":"","description":""}
        }',
        '{
          "en":{"heading":""},
          "zh":{"heading":""},
          "si":{"heading":""}
        }',
        '{
          "en":{"heading":"","description":""},
          "zh":{"heading":"","description":""},
          "si":{"heading":"","description":""}
        }',
        '{
          "en":{"heading":"","description":""},
          "zh":{"heading":"","description":""},
          "si":{"heading":"","description":""}
        }',
        '[
          {"id":"1","imagePath":"/images/card1.jpg","href":"https://example.com","en":{"title":"Card 1","description":"Description 1","button":"Click"}}
        ]',
        ''
      )
      ON CONFLICT (id) DO NOTHING;
    `);

    console.log("Company Section Schema ready with 2 default cards");

  } catch (error) {
    console.error("Company Section Schema error:", error);
  }
};

export default createCompany;
