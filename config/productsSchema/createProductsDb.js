import pool from "../db.js";

export const defaultImportData = {
    spices: {
        category: "spices",
        items: [],
        en: { category: "Spices", assetName: "spices" },
        si: { category: "කුළුබඩු", assetName: "spices" },
        zh: { category: "香料", assetName: "spices" }
    },

    coconutProducts: {
        category: "coconut-products",
        items: [],
        en: { category: "Coconut Products", assetName: "coconut" },
        si: { category: "පොල් නිෂ්පාදන", assetName: "coconut" },
        zh: { category: "椰子制品", assetName: "coconut" }
    },

    freshProductsAndPulses: {
        category: "fresh-products-pulses",
        items: [],
        en: { category: "Fresh Products and Pulses", assetName: "fresh" },
        si: { category: "නව නිෂ්පාදන සහ පල්ස්", assetName: "fresh" },
        zh: { category: "新鲜产品和豆类", assetName: "fresh" }
    }
};

const defaultExportData = {
    spices: {
        category: "spices",
        items: [],
        en: { category: "Spices", assetName: "spices" },
        si: { category: "කුළුබඩු", assetName: "spices" },
        zh: { category: "香料", assetName: "spices" }
    },

    coconutProducts: {
        category: "coconut-products",
        items: [],
        en: { category: "Coconut Products", assetName: "coconut" },
        si: { category: "පොල් නිෂ්පාදන", assetName: "coconut" },
        zh: { category: "椰子制品", assetName: "coconut" }
    },

    freshProductsAndPulses: {
        category: "fresh-products-pulses",
        items: [],
        en: { category: "Fresh Products and Pulses", assetName: "fresh" },
        si: { category: "නව නිෂ්පාදන සහ පල්ස්", assetName: "fresh" },
        zh: { category: "新鲜产品和豆类", assetName: "fresh" }
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
