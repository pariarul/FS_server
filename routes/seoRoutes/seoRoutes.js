import express from "express";
import { getSeoController, updateSeoController } from "../../controllers/seoControllers/seoController.js";

const router = express.Router();

const pageMappings = {
  "home": "seo_home",
  "company": "seo_company",
  "history": "seo_history",
  "leaderships": "seo_leaderships",
  "founder": "seo_founder",
  "co-founder": "seo_cofounder",
  "products": "seo_products",
  "privacy-policy": "seo_privacy_policy",
  "terms-conditions": "seo_terms_conditions",
  "suppliers": "seo_suppliers"
};

for (const [routePath, tableName] of Object.entries(pageMappings)) {
  router.get(`/get-${routePath}-seo`, getSeoController(tableName));
  router.put(`/update-${routePath}-seo`, updateSeoController(tableName));
}

export default router;
