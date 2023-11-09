import express from "express";
import { getProducts, getCustomers } from "../controllers/client.js";

const router = express.Router();

router.route("/products").get(getProducts);
router.route("/customers").get(getCustomers);

export default router;
