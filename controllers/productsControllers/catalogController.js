import { getCatalogData, updateCatalogData } from "../../models/productsModels/catalogModel.js";

const handleGet = (type) => async (req, res) => {
    try {
        const { data, error } = await getCatalogData(type);
        if (error) throw error;
        
        // The frontend expects { success: true, data: { import: { ...categories } } }
        // or { export: { ...categories } }
        res.json({ success: true, data: { [type]: data || {} } });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

const handleAdd = (type) => async (req, res) => {
    try {
        const { assetName, imagePath, en, si, zh } = req.body;

        const { data: catalog, error } = await getCatalogData(type);
        if (error) throw error;

        const updatedCatalog = catalog || {};

        if (!updatedCatalog[assetName]) {
             // Create category dynamically if doesn't exist
             updatedCatalog[assetName] = {
                 category: en.category,
                 en: { category: en.category, assetName },
                 si: { category: si.category, assetName },
                 zh: { category: zh.category, assetName },
                 items: []
             };
        }

        updatedCatalog[assetName].items.push({
            imagePath,
            en: { imageName: en.imageName, origins: en.origins },
            si: { imageName: si.imageName, origins: si.origins },
            zh: { imageName: zh.imageName, origins: zh.origins }
        });

        await updateCatalogData(type, updatedCatalog);

        res.json({ success: true, message: "Product added successfully" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

const handleUpdate = (type) => async (req, res) => {
    try {
        const { assetName, oldImagePath, imagePath, en, si, zh } = req.body;

        const { data: catalog, error } = await getCatalogData(type);
        if (error) throw error;

        if (!catalog || !catalog[assetName]) {
            return res.status(404).json({ success: false, message: "Category not found" });
        }

        // Identify the item to update by oldImagePath (if provided via updated frontend) or fallback to imagePath/imageName
        const itemIndex = catalog[assetName].items.findIndex(
            item => item.imagePath === (oldImagePath || imagePath) || item.en.imageName === en.imageName
        );

        if (itemIndex === -1) {
            return res.status(404).json({ success: false, message: "Product not found to update" });
        }

        catalog[assetName].items[itemIndex] = {
            imagePath: imagePath || catalog[assetName].items[itemIndex].imagePath,
            en: { imageName: en.imageName, origins: en.origins },
            si: { imageName: si.imageName, origins: si.origins },
            zh: { imageName: zh.imageName, origins: zh.origins }
        };

        await updateCatalogData(type, catalog);

        res.json({ success: true, message: "Product updated successfully" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

const handleDelete = (type) => async (req, res) => {
    try {
        const { assetName, imagePath, en } = req.body;

        const { data: catalog, error } = await getCatalogData(type);
        if (error) throw error;

        if (!catalog || !catalog[assetName]) {
            return res.status(404).json({ success: false, message: "Category not found" });
        }

        // Delete by exact imagePath match or imageName fallback
        catalog[assetName].items = catalog[assetName].items.filter(
            item => !(item.imagePath === imagePath || item.en.imageName === en.imageName)
        );

        await updateCatalogData(type, catalog);

        res.json({ success: true, message: "Product deleted successfully" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// Import Controllers
export const getImportProducts = handleGet('import');
export const addImportProduct = handleAdd('import');
export const updateImportProduct = handleUpdate('import');
export const deleteImportProduct = handleDelete('import');

// Export Controllers
export const getExportProducts = handleGet('export');
export const addExportProduct = handleAdd('export');
export const updateExportProduct = handleUpdate('export');
export const deleteExportProduct = handleDelete('export');
