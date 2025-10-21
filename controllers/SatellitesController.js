import { getAllSatellites } from "../models/satellites.js";

export function getAllSatellitesController(req, res) {
    res.status(200).json(getAllSatellites());
}
