import {
  createPlanets,
  readAllPlanets,
  updatePlanets,
  deletePlanets,
} from "../models/planets.js";

//* READ

export function readAllPlanetsController(req, res) {
  const planets = readAllPlanets();
  if (planets.length === 0) {
    return res.status(404).json({ message: "Planet not found" });
  }
  res.status(200).json(planets);
}

//* CREATE

export function createPlanetController(req, res) {
  const newPlanet = createPlanets(req.body);
  return res.status(200).json({ message: "planet ajouter" + newPlanet });
}

//* DELETE

export function delletePlanetController(req, res) {
  const planets = readAllPlanets();
  const planet = planets.find((p) => p.id == req.params.id);
  if (!planet) {
    return res.status(404).json({ message: "Planet not found" });
  }
  deletePlanets(planet.id);
  return res
    .status(200)
    .json({ message: "La planette " + planet.name + " a ete supprimer" });
}

//* UPDATE

export function updatePlanetController(req, res) {
  const planets = readAllPlanets();
  const planet = planets.find((p) => p.id == req.body.id);
  if (!planet) {
    return res.status(404).json({ message: "Planet not found" });
  }

  const planetObj = {
    id: planet.id,
    name: req.body.name || planet.name,
    size_km: req.body.size_km || planet.size_km,
    orbital_speed_kms: req.body.orbital_speed_kms || planet.orbital_speed_kms,
    surface_temperature_c:
      req.body.surface_temperature_c || planet.surface_temperature_c,
    core_temperature_c:
      req.body.core_temperature_c || planet.core_temperature_c,
    distance_from_sun_mkm:
      req.body.distance_from_sun_mkm || planet.distance_from_sun_mkm,
    type: req.body.type || planet.type,
  };

  updatePlanets(planetObj);
  return res.status(200).json({ message: "Entity has been updated" });
}
