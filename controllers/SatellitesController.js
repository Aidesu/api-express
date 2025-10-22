import {
  getAllSatellites,
  createSatellites,
  deleteSatellites,
  updateSatellites,
} from "../models/satellites.js";

export function getAllSatellitesController(req, res) {
  res.status(200).json(getAllSatellites());
}

//* CREATE

export function createSatelliteController(req, res) {
  const newSat = createSatellites(req.body);
  return res.status(200).json({ message: "Satellite ajouter" + newSat.name });
}

//* DELETE

export function deleteSatelliteController(req, res) {
  const satellites = getAllSatellites();
  const satellite = satellites.find((s) => s.id == req.params.id);
  if (!satellite) {
    res.status(404).json({ message: "Satellite not found" });
  }
  deleteSatellites(satellite.id);
  res
    .status(200)
    .json({ message: "Satellite " + satellite.name + " as been deleted" });
}

//* UPDATE

export function updateSatelliteController(req, res) {
  const satellites = getAllSatellites();
  const satellite = satellites.find((s) => s.id == req.body.id);
  if (!satellite) {
    res.status(404).json({ message: "Satellite not found" });
  }

  const newSatellite = req.body;

  updateSatellites(newSatellite);
  res
    .status(200)
    .json({ message: "Satelite " + satellite.name + " as been updated" });
}
