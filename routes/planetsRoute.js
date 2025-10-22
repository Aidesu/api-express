import { Router } from "express";
import {
    createPlanetController,
    readAllPlanetsController,
    updatePlanetController,
    deletePlanetController,
} from "../controllers/PlanetsController.js";

const router = Router();

router.post("/", createPlanetController);
router.get("/", readAllPlanetsController);
router.put("/", updatePlanetController);
router.delete("/:id", deletePlanetController);

export default router;
