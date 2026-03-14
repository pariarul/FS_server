import pool from "./config/db.js";

const restoreSuppliers = async () => {
    try {
        await pool.query(`
            UPDATE supplier_section SET
                suppliers_heading = '{"en":"Our Global Suppliers","zh":"","si":""}',
                suppliers_manager = '{
                  "heading": {"en": "Manager Information"},
                  "name": {"en": "John Doe"},
                  "role": {"en": "Supply Chain Director"},
                  "description": {"en": "Expert in global logistics and supplier relations."},
                  "imagePath": ""
                }',
                supplier_map = '{
                  "heading": {"en": "Our Global Presence"},
                  "description": {"en": "We source from the finest producers worldwide."},
                  "imagePath": ""
                }',
                reviews_heading = '{"en":"Supplier Reviews","zh":"","si":""}',
                reviews_description = '{"en":"Trusted partners around the world","zh":"","si":""}',
                reviews = '[
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
                ]'
            WHERE id = 1;
        `);
        console.log("Mock data restored successfully.");
    } catch (e) {
        console.error(e);
    } finally {
        process.exit(0);
    }
};

restoreSuppliers();
