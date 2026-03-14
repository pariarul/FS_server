import pool from "../db.js";

const createLeadership = async () => {
  try {
    // 1️⃣ Create table if it doesn't exist
    await pool.query(`
      CREATE TABLE IF NOT EXISTS leadership_section (
        id INT PRIMARY KEY,
        headings JSONB DEFAULT '{}'::jsonb,
        destination1 JSONB DEFAULT '{}'::jsonb,
        destination2 JSONB DEFAULT '{}'::jsonb,
        destination3Description JSONB DEFAULT '{}'::jsonb,
        destination3 JSONB DEFAULT '[]'::jsonb,
        updated_at TIMESTAMP DEFAULT NOW()
      );
    `);

    // 2️⃣ Insert or update default data with 4 directors in destination3
    await pool.query(`
      INSERT INTO leadership_section (
        id,
        headings,
        destination1,
        destination2,
        destination3Description,
        destination3
      ) VALUES (
        1,
        '{
          "en": {
            "heading": "Our Leadership",
            "subheadingDestination1": "Destination One",
            "subheadingDestination2": "Destination Two",
            "subheadingDestination3": "Our Directors",
            "exploreBlogBtn": "Explore Blogs"
          },
          "zh": {},
          "si": {}
        }',
        '{
          "name": {"en": "Destination 1"},
          "title": {"en": "Exciting Place"},
          "imagePath": "/images/destination1.jpg",
          "message": {"en": "Welcome to destination 1"},
          "blogs": []
        }',
        '{
          "name": {"en": "Destination 2"},
          "title": {"en": "Amazing Place"},
          "imagePath": "/images/destination2.jpg",
          "message": {"en": "Welcome to destination 2"},
          "blogs": []
        }',
        '{"en": "Destination 3 Description", "zh": "", "si": ""}',
        '[
          {"name": {"en": "Director 1"}, "title": {"en": "CEO"}, "imagePath": "/images/director1.jpg", "message": {"en": "Leading the company"}},
          {"name": {"en": "Director 2"}, "title": {"en": "CTO"}, "imagePath": "/images/director2.jpg", "message": {"en": "Oversees technology"}},
          {"name": {"en": "Director 3"}, "title": {"en": "CFO"}, "imagePath": "/images/director3.jpg", "message": {"en": "Manages finance"}},
          {"name": {"en": "Director 4"}, "title": {"en": "COO"}, "imagePath": "/images/director4.jpg", "message": {"en": "Operations head"}}
        ]'
      )
      ON CONFLICT (id) DO NOTHING;
    `);

    console.log("✅ Leadership Section with 4 directors Ready");
  } catch (error) {
    console.error("❌ Leadership Section Schema Error:", error);
  }
};

export default createLeadership;
