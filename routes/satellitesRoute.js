import { Router } from "express";
import {
    getAllSatellitesController,
    createSatelliteController,
    deleteSatelliteController,
    updateSatelliteController,
} from "../controllers/SatellitesController.js";

const router = Router();

router.post("/", createSatelliteController);
router.get("/", getAllSatellitesController);
router.put("/", updateSatelliteController);
router.delete("/:id", deleteSatelliteController);

export default router;
