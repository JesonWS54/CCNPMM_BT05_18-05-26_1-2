import express from "express";
import { register, login, getProfile } from "../controllers/auth.controller";
import { getHomepageProducts, getProducts, getProductBySlug } from "../controllers/product.controller";
import { getCategories } from "../controllers/category.controller";
import { protect } from "../middleware/auth.middleware";

const router = express.Router();

// Auth
router.post("/auth/register", register);
router.post("/auth/login", login);
router.get("/auth/profile", protect, getProfile);

// Products
router.get("/products/home", getHomepageProducts);
router.get("/products", getProducts);
router.get("/products/:slug", getProductBySlug);

// Categories
router.get("/categories", getCategories);

export default router;
