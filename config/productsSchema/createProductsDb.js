import pool from "../db.js";

const defaultImportData = {
    cinnamon: {
        category: "Cinnamon",
        items: [],
        en: { category: "Cinnamon", assetName: "cinnamon" },
        si: { category: "කුරුඳු", assetName: "cinnamon" },
        zh: { category: "肉桂", assetName: "cinnamon" }
    },
    pepper: {
        category: "Pepper",
        items: [],
        en: { category: "Pepper", assetName: "pepper" },
        si: { category: "ගම්මිරිස්", assetName: "pepper" },
        zh: { category: "胡椒", assetName: "pepper" }
    }
};

const defaultExportData = {
    cinnamon: {
        category: "Cinnamon",
        items: [],
        en: { category: "Cinnamon", assetName: "cinnamon" },
        si: { category: "කුරුඳු", assetName: "cinnamon" },
        zh: { category: "肉桂", assetName: "cinnamon" }
    },
    pepper: {
        category: "Pepper",
        items: [],
        en: { category: "Pepper", assetName: "pepper" },
        si: { category: "ගම්මිරිස්", assetName: "pepper" },
        zh: { category: "胡椒", assetName: "pepper" }
    }
};

const createProductsDb = async () => {
    try {
        // Create Import Products Table
        await pool.query(`
            CREATE TABLE IF NOT EXISTS import_products (
                id INT PRIMARY KEY DEFAULT 1,
                data JSONB DEFAULT '{}'::jsonb,
                updated_at TIMESTAMP DEFAULT NOW()
            );
        `);

        // Insert default Import Data
        await pool.query(`
            INSERT INTO import_products (id, data, updated_at)
            VALUES (1, $1, NOW())
            ON CONFLICT (id) DO NOTHING;
        `, [JSON.stringify(defaultImportData)]);


        // Create Export Products Table
        await pool.query(`
            CREATE TABLE IF NOT EXISTS export_products (
                id INT PRIMARY KEY DEFAULT 1,
                data JSONB DEFAULT '{}'::jsonb,
                updated_at TIMESTAMP DEFAULT NOW()
            );
        `);

        // Insert default Export Data
        await pool.query(`
            INSERT INTO export_products (id, data, updated_at)
            VALUES (1, $1, NOW())
            ON CONFLICT (id) DO NOTHING;
        `, [JSON.stringify(defaultExportData)]);

        console.log("Import/Export Products schema ready");
    } catch (error) {
        console.error("Products schema error:", error);
    }
};

export default createProductsDb;
