import Satellite from "../models/satellites.js";
import {
    getAllSatellites,
    createSatellites,
    deleteSatellites,
    updateSatellites,
} from "../models/satellites.js";

//* GET ALL

export async function getAllSatellitesController(req, res) {
    const satellites = await getAllSatellites();
    try {
        return res.status(200).json(satellites);
    } catch (e) {
        return e.message();
    }
}

//* CREATE

export async function createSatelliteController(req, res) {
    const {
        name,
        planet,
        diameter_km,
        orbital_speed_kms,
        distance_from_planet_km,
        type,
    } = req.body;

    const newSat = new Satellite({
        name,
        planet,
        diameter_km,
        orbital_speed_kms,
        distance_from_planet_km,
        type,
    });

    await createSatellites(newSat);
    return res
        .status(200)
        .json({ message: "Satellite " + newSat.name + " as been added." });
}

//* DELETE

export async function deleteSatelliteController(req, res) {
    const satellite = await Satellite.findOne({ name: req.body.name });
    if (!satellite) {
        res.status(404).json({ message: "Satellite not found" });
    }
    await deleteSatellites(satellite._id);
    res.status(200).json({
        message: "Satellite " + satellite.name + " as been deleted",
    });
}

//* UPDATE

export async function updateSatelliteController(req, res) {
    const satellites = await getAllSatellites();
    const satellite = satellites.find((s) => s.name == req.body.name);
    if (!satellite) {
        res.status(404).json({ message: "Satellite not found" });
    }

    const newSatellite = req.body;

    updateSatellites(newSatellite, satellite._id);
    res.status(200).json({
        message: "Satelite " + satellite.name + " as been updated",
    });
}
