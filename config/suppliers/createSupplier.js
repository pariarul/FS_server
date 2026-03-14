import pool from "../db.js";

const createSupplier = async () => {
  try {

    // Create table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS supplier_section (
        id INT PRIMARY KEY,
        suppliers_heading JSONB DEFAULT '{}'::jsonb,
        suppliers_manager JSONB DEFAULT '{}'::jsonb,
        supplier_map JSONB DEFAULT '{}'::jsonb,
        reviews_heading JSONB DEFAULT '{}'::jsonb,
        reviews_description JSONB DEFAULT '{}'::jsonb,
        reviews JSONB DEFAULT '[]'::jsonb,
        supplier_form JSONB DEFAULT '{}'::jsonb,
        updated_at TIMESTAMP DEFAULT NOW()
      );
    `);

    // Ensure supplier_form column exists (for backward compatibility)
    await pool.query(`
      DO $$ 
      BEGIN 
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                       WHERE table_name='supplier_section' AND column_name='supplier_form') THEN 
          ALTER TABLE supplier_section ADD COLUMN supplier_form JSONB DEFAULT '{}'::jsonb; 
        END IF; 
      END $$;
    `);

    // Insert or update default data
    await pool.query(`
      INSERT INTO supplier_section (
        id,
        suppliers_heading,
        suppliers_manager,
        supplier_map,
        reviews_heading,
        reviews_description,
        reviews,
        supplier_form
      )
      VALUES (
        1,
        '{"en":"Our Global Suppliers","zh":"","si":""}',
        '{
          "heading": {"en": "Manager Information"},
          "name": {"en": "John Doe"},
          "role": {"en": "Supply Chain Director"},
          "description": {"en": "Expert in global logistics and supplier relations."},
          "imagePath": ""
        }',
        '{
          "heading": {"en": "Our Global Presence"},
          "description": {"en": "We source from the finest producers worldwide."},
          "imagePath": ""
        }',
        '{"en":"Supplier Reviews","zh":"","si":""}',
        '{"en":"Trusted partners around the world","zh":"","si":""}',
        '[
          {"id":"1","supplierCompanyName":{"en":"Good Farmer"},"country":{"en":"China"},"supplierLogoPath":"","message":{"en":"We are delighted to collaborate with your company."}},
          {"id":"2","supplierCompanyName":{"en":"Green Valley Export"},"country":{"en":"India"},"supplierLogoPath":"","message":{"en":"Your professionalism makes cooperation easy."}},
          {"id":"3","supplierCompanyName":{"en":"Sunrise Agro"},"country":{"en":"Thailand"},"supplierLogoPath":"","message":{"en":"Your quality products are highly appreciated."}},
          {"id":"4","supplierCompanyName":{"en":"Golden Harvest Ltd"},"country":{"en":"Vietnam"},"supplierLogoPath":"","message":{"en":"Excellent partnership and reliable service."}},
          {"id":"5","supplierCompanyName":{"en":"Fresh Earth Foods"},"country":{"en":"India"},"supplierLogoPath":"","message":{"en":"Consistent quality and timely delivery."}},
          {"id":"6","supplierCompanyName":{"en":"Ocean Bridge Exports"},"country":{"en":"Singapore"},"supplierLogoPath":"","message":{"en":"Professional and dependable business partner."}},
          {"id":"7","supplierCompanyName":{"en":"Eastern Crop Supply"},"country":{"en":"Vietnam"},"supplierLogoPath":"","message":{"en":"Strong cooperation in global supply chains."}},
          {"id":"8","supplierCompanyName":{"en":"Prime Agro Global"},"country":{"en":"Indonesia"},"supplierLogoPath":"","message":{"en":"Great teamwork and communication."}},
          {"id":"9","supplierCompanyName":{"en":"Harvest Bridge Group"},"country":{"en":"China"},"supplierLogoPath":"","message":{"en":"Outstanding export quality standards."}},
          {"id":"10","supplierCompanyName":{"en":"Agro World Traders"},"country":{"en":"Malaysia"},"supplierLogoPath":"","message":{"en":"Reliable and professional supplier."}},
          {"id":"11","supplierCompanyName":{"en":"Asia Farm Network"},"country":{"en":"Thailand"},"supplierLogoPath":"","message":{"en":"Long-term trusted partnership."}},
          {"id":"12","supplierCompanyName":{"en":"Evergreen Agro Co"},"country":{"en":"China"},"supplierLogoPath":"","message":{"en":"Excellent agricultural export partner."}},
          {"id":"13","supplierCompanyName":{"en":"Global Crop Exporters"},"country":{"en":"India"},"supplierLogoPath":"","message":{"en":"Smooth cooperation and strong support."}},
          {"id":"14","supplierCompanyName":{"en":"Nature Harvest Trading"},"country":{"en":"Vietnam"},"supplierLogoPath":"","message":{"en":"Consistently delivering quality products."}},
          {"id":"15","supplierCompanyName":{"en":"Green Valley Export"},"country":{"en":"Thailand"},"supplierLogoPath":"","message":{"en":"Your professionalism makes cooperation easy."}},
          {"id":"16","supplierCompanyName":{"en":"Sunrise Agro"},"country":{"en":"Thailand"},"supplierLogoPath":"","message":{"en":"Your quality products are highly appreciated."}}

        ]',
        '{
          "heading": {"en": "Import / Export Lead Form"},
          "description": {"en": "Let us know your requirements. Fill the form to get started."},
          "formFields": {
            "fullname": {"en": "Full Name"},
            "companyname": {"en": "Company Name"},
            "email": {"en": "Email"},
            "phone": {"en": "Phone"},
            "country": {"en": "Country", "type": "dropdown", "options": ["Sri Lanka", "China", "India"]},
            "businessType": {
              "en": "Business Type", 
              "type": "dropdown", 
              "options": {
                "import": {"en": "I want to import / buy"},
                "export": {"en": "I want to export / supply"}
              }
            },
            "conditionalFields": {
                "import": {
                    "product": {"en": "What product?", "type": "dropdown", "categories": {}},
                    "enquiry": {"en": "Enquiry Details"}
                },
                "export": {
                    "product": {"en": "What product?", "type": "dropdown", "categories": {}},
                    "enquiry": {"en": "Enquiry Details"}
                }
            }
          }
        }'
      )
      ON CONFLICT (id) DO UPDATE SET 
        supplier_form = EXCLUDED.supplier_form
      WHERE supplier_section.supplier_form = '{}'::jsonb OR supplier_section.supplier_form IS NULL;
    `);

    console.log("Supplier Section Schema Ready");

  } catch (error) {
    console.error("Supplier Section Schema Error:", error);
  }
};

export default createSupplier;
