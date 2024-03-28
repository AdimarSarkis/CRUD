import { Router } from "express";
const router = Router();

import {create} from "../controllers/compras.controller.js";

router.post("/", create)

export default router;