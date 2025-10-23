import Satellite from "../models/satellites.js";
import {
    getAllSatellites,
    createSatellites,
    deleteSatellites,
    updateSatellites,
} from "../models/satellites.js";

//* CREATE
export async function createSatelliteController(req, res) {
    try {
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
            .json({ message: "Satellite " + newSat.name + " has been added." });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
}

//* READ
export async function getAllSatellitesController(req, res) {
    try {
        const satellites = await getAllSatellites();
        return res.status(200).json(satellites);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
}

//* UPDATE
export async function updateSatelliteController(req, res) {
    try {
        const satellite = await Satellite.findOne({ name: req.body.name });
        if (!satellite) {
            return res.status(404).json({ message: "Satellite not found" });
        }

        const newSatellite = req.body;

        await updateSatellites(newSatellite, satellite._id);
        res.status(200).json({
            message: "Satelite " + satellite.name + " has been updated",
        });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
}

//* DELETE
export async function deleteSatelliteController(req, res) {
    try {
        const satellite = await Satellite.findOne({ name: req.body.name });
        if (!satellite) {
            res.status(404).json({ message: "Satellite not found" });
        }
        await deleteSatellites(satellite._id);
        res.status(200).json({
            message: "Satellite " + satellite.name + " has been deleted",
        });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
}
