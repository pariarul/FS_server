import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import authRoutes from "./routes/authRoutes.js";

import supabase from "./config/supabaseClient.js";
import createHero from "./config/homeSchema/createHero.js";
import createAbout from "./config/homeSchema/createAbout.js";
import aboutRoutes from "./routes/homeRoutes/aboutRoutes.js";
import heroRoutes from "./routes/homeRoutes/heroRoutes.js";
import leadershipRoute from "./routes/homeRoutes/leadershipRoute.js";
import createLeadership from "./config/homeSchema/createLeadership.js";
import supplierRoute from "./routes/homeRoutes/supplierRoute.js";
import createSupplier from "./config/homeSchema/createSupplier.js";
import createProducts from "./config/homeSchema/createProducts.js";
import productsRoute from "./routes/homeRoutes/productsRoute.js";
import createCta from "./config/homeSchema/createCta.js";
import ctaRoute from "./routes/homeRoutes/ctaRoute.js";
import createSupplierpage from "./config/suppliers/createSupplier.js";
import supplierRoutes from "./routes/supplierRouter/supplierRoutes.js";
import createCompany from "./config/companySchema/createCompany.js";
import companyRoutes from "./routes/companyRoutes/companyRouter.js";
import createLeadershipPage from "./config/leadershipSchema/createLeadership.js";
import leadershipRoutes from "./routes/leadershipRouter/leadershipRoutes.js";
import historyRoutes from "./routes/historyRouter/historyRoutes.js";
import createHistory from "./config/historySchema/createHistory.js";
import createPrivacyPolicy from "./config/PrivacyPolicySchema/createPrivacyPolicy.js";
import privacyplicy from "./routes/privacypolicy/privacypolicyRoutes.js";
import createTerms from "./config/Terms/createTerms.js";
import termRoutes from "./routes/terms/termRoutes.js";
import suppliersform from "./routes/supplierformsRouter.js";
import createSupplierFormTable from "./config/createSupplierFormTable.js";
import createFooter from "./config/footerSchema/createFooter.js";
import footerRoutes from "./routes/footerRoutes/footerRoutes.js";
import createSeo from "./config/seoSchema/createSeo.js";
import seoRoutes from "./routes/seoRoutes/seoRoutes.js";
import createProductsDb from "./config/productsSchema/createProductsDb.js";
import catalogRoutes from "./routes/productsRouter/catalogRoutes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true
  })
);
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));


// Routes auth
app.use("/api", authRoutes);

// Routes home
app.use("/api/home", heroRoutes);
app.use("/api/home", aboutRoutes);
app.use("/api/home", leadershipRoute);
app.use("/api/home", supplierRoute);
app.use("/api/home", productsRoute);
app.use("/api/home", ctaRoute);

//routes suplier
app.use("/api/suppliers", supplierRoutes);

//routes company
app.use("/api/company", companyRoutes);

//routes leadership
app.use("/api/leadership", leadershipRoutes);

//router history
app.use("/api/history", historyRoutes);

//router privacy policy
app.use("/api/privacy-policy", privacyplicy);

//term
app.use("/api/terms-conditions", termRoutes);

//
app.use("/api/supplier-form", suppliersform);

// Footer and SEO
app.use("/api/footer", footerRoutes);
app.use("/api/seo", seoRoutes);

// Import/Export Products
app.use("/api/products", catalogRoutes);

//server run

app.get("/", (req, res) => {
  res.json({
    message: "Server running successfully 🚀"
  });
});

const startServer = async () => {
  //home
  await createHero(); // auto create hero table
  await createAbout(); // auto create about tables
  await createLeadership(); // auto create leadership table
  await createSupplier(); // auto create supplier table
  await createProducts(); // auto create products table
  await createCta(); // auto create cta table
  //suppliers
  await createSupplierpage();

  //company
  await createCompany();

  //leadership
  await createLeadershipPage();

  //history
  await createHistory();

  //privacy
  await createPrivacyPolicy()

  //term
  await createTerms()

  //superlier form
  await createSupplierFormTable()

  // Footer
  await createFooter()

  // SEO
  await createSeo()

  // Products (Import/Export)
  await createProductsDb()

  if (!process.env.VERCEL) {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log("CLIENT_URL:", process.env.CLIENT_URL);
      console.log("ADMIN_URL:", process.env.ADMIN_URL);
      console.log(`🚀 Server running on port ${PORT}`);
    });
  }
};

startServer();

export default app;