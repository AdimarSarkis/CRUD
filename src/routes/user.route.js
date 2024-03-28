import { Router } from "express";
const router = Router();

import {create, findAll, findById, update, deleteUser} from "../controllers/user.controller.js";
import {validId, validUser} from "../middlewares/global.middlewares.js";


router.post("/", create);
router.get("/", findAll);
router.get("/:id",validId, validUser, findById);
router.patch("/:id", validId, validUser, update);
router.post("/delete/:id", validId, validUser, deleteUser);

export default router;