// createSupplierFormTable.ts
import pool from "./db.js"; // your PostgreSQL pool

const createSupplierFormTable = async () => {
  try {
    // Create table if it doesn't exist
    await pool.query(`
      CREATE TABLE IF NOT EXISTS supplier_form (
        id SERIAL PRIMARY KEY,
        form_data JSONB DEFAULT '{}'::jsonb,
        date TEXT NOT NULL,
        time TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

    // Optional: insert a default example row
    await pool.query(`
      INSERT INTO supplier_form (form_data, date, time)
      VALUES (
        '{
          "fullname": "John Doe",
          "companyname": "Example Co",
          "email": "john@example.com",
          "phone": "+1234567890",
          "country": "USA",
          "businessType": "i want to import / buy",
          "products": ["Product A", "Product B"],
          "quantity": "100",
          "enquiry": "Need urgent supply",
          "website": "https://example.com",
          "capacity": "500 units/month",
          "certifications": "ISO 9001",
          "specificInfo": "Special packaging required",
          "category": ["Electronics", "Hardware"]
        }',
        '2026-03-14',
        '10:30 AM'
      )
      ON CONFLICT (id) DO NOTHING;
    `);

    // Create headings table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS supplier_form_heading (
        id INT PRIMARY KEY,
        heading JSONB DEFAULT '{}'::jsonb,
        description JSONB DEFAULT '{}'::jsonb,
        updated_at TIMESTAMP DEFAULT NOW()
      );
    `);

    // Insert Default Heading Data
    await pool.query(`
      INSERT INTO supplier_form_heading (
        id,
        heading,
        description
      )
      VALUES (
        1,
        '{"en":"Supplier Form Heading","zh":"","si":""}',
        '{"en":"Description for the supplier forms","zh":"","si":""}'
      )
      ON CONFLICT (id) DO NOTHING;
    `);

    console.log("Supplier Form table ready with default row");

  } catch (error) {
    console.error("Supplier Form table creation error:", error);
  }
};

export default createSupplierFormTable;