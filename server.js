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



dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3001",
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



// Test Supabase
app.get("/", async (req, res) => {
  try {

    const { data, error } = await supabase
      .from("test")
      .select("*");

    if (error) {
      return res.status(500).json({
        message: "Supabase Query Error ❌",
        error: error.message
      });
    }

    res.json({
      message: "Supabase Connected Successfully ✅",
      data: data
    });

  } catch (err) {

    res.status(500).json({
      message: "Connection Failed ❌",
      error: err.message
    });

  }
});

const startServer = async () => {

  await createHero(); // auto create hero table
  await createAbout(); // auto create about tables
  await createLeadership(); // auto create leadership table
  await createSupplier(); // auto create supplier table
  await createProducts(); // auto create products table
  await createCta(); // auto create cta table

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });

};

startServer();