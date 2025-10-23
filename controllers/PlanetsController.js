import Planet from "../models/planets.js";
import {
    createPlanets,
    updatePlanets,
    deletePlanets,
} from "../models/planets.js";

//* CREATE
export async function createPlanetController(req, res) {
    const newPlanet = await createPlanets(req.body);
    return res
        .status(200)
        .json({ message: "planet ajouter " + newPlanet.name });
}

//* READ
export async function readAllPlanetsController(req, res) {
    const planets = await Planet.find();
    if (planets.length === 0) {
        return res.status(404).json({ message: "Planet not found" });
    }
    res.status(200).json(planets);
}

//* UPDATE
export async function updatePlanetController(req, res) {
    const planet = await Planet.findOne({ name: req.body.name });
    if (!planet) {
        return res.status(404).json({ message: "Planet not found" });
    }

    const planetObj = req.body;

    await updatePlanets(planetObj, planet._id);
    return res.status(200).json({ message: "Entity has been updated" });
}

//* DELETE
export async function deletePlanetController(req, res) {
    const planet = await Planet.findOne({ name: req.body.name });
    if (!planet) {
        return res.status(404).json({ message: "Planet not found" });
    }

    await deletePlanets(planet._id);
    return res
        .status(200)
        .json({ message: "La planette " + planet.name + " a ete supprimer" });
}
