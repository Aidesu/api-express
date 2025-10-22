import express from "express";
import usersRoutes from "./routes/usersRoute.js";
import path from "path";
import {
  createPlanetController,
  readAllPlanetsController,
  updatePlanetController,
  delletePlanetController,
} from "./controllers/PlanetsController.js";
import {
  getAllSatellitesController,
  createSatelliteController,
  deleteSatelliteController,
  updateSatelliteController,
} from "./controllers/SatellitesController.js";

import {
  loginController,
  loadLoginPage,
} from "./controllers/authController.js";

import { body, validationResult } from "express-validator";

const app = express();
const port = 3000;

app.use(express.json());
app.set("view engine", "pug");
app.set("views", "./views");

//* CRUD planets
app.post("/planets", createPlanetController);
app.get("/planets", readAllPlanetsController);
app.put("/planets", updatePlanetController);
app.delete("/planets/:id", delletePlanetController);

app.post("/satellites", createSatelliteController);
app.get("/satellites", getAllSatellitesController);
app.put("/satellites", updateSatelliteController);
app.delete("/satellites/:id", deleteSatelliteController);

app.use("/users", usersRoutes);

app.get("/login", loadLoginPage);
app.post("/login", loginController);

app.listen(port, () => console.log("Server running on port : " + port));

//* GET planets

// app.get("/planets", (req, res) => {
//     if (planets.length === 0) {
//         return res.status(400).json({ message: "No data entry" });
//     }

//     return res.status(200).json(planets);
// // });

// //! GET from id planets

// app.get("/planets/:id", (req, res) => {
//     const planet = planets.find((p) => p.id == req.params.id);
//     if (!planet) {
//         return res.status(404).json({ message: "planet not found" });
//     }

//     return res.status(200).json(planet);
// });

// //* POST planets

// app.post("/planets", (req, res) => {
//     let newPlanet = {
//         id: planets.length + 1,
//         name: req.body.name,
//         size_km: req.body.size_km,
//         orbital_speed_kms: req.body.orbital_speed_kms,
//         surface_temperature_c: req.body.surface_temperature_c,
//         core_temperature_c: req.body.core_temperature_c,
//         distance_from_sun_mkm: req.body.distance_from_sun_mkm,
//         type: req.body.type,
//     };

//     planets.push(newPlanet);
//     return res
//         .status(200)
//         .json({ message: "New planet as been added name : " + newPlanet.name });
// });

// //* DELETE planets

// app.delete("/planets/:id", (req, res) => {
//     let planet = planets.find((p) => p.id == req.params.id);
//     if (!planet) {
//         return res.status(400).json({ message: "Entity not found" });
//     }

//     planets.splice(planet, 1);
//     return res.status(200).json({ message: "Entity as been deleted" });
// });

// //* PUT planets

// app.put("/planets", (req, res) => {
//     let planet = planets.find((p) => p.id == req.body.id);

//     if (!planet) {
//         return res.status(400).json({ message: "Entity not found" });
//     }

//     planet.name = req.body.name || planet.name;
//     planet.size_km = req.body.size_km || planet.size_km;
//     planet.orbital_speed_kms =
//         req.body.orbital_speed_kms || planet.orbital_speed_kms;
//     planet.surface_temperature_c =
//         req.body.surface_temperature_c || planet.surface_temperature_c;
//     planet.core_temperature_c =
//         req.body.core_temperature_c || planet.core_temperature_c;
//     planet.distance_from_sun_mkm =
//         req.body.distance_from_sun_mkm || planet.distance_from_sun_mkm;
//     planet.type = req.body.type || planet.type;

//     return res.status(200).json({ message: "Entity has been updated" });
// });

// //* GET satellites

// app.get("/satellites", (req, res) => {
//     if (satellites.length === 0) {
//         return res.status(400).json({ message: "No entity found" });
//     }

//     return res.status(200).json(satellites);
// });

// //* POST satellites

// app.post("/satellites", (req, res) => {
//     const satellite = satellites.find((s) => s.id === req.body.id);
//     if (satellite) {
//         return res.status(400).json({ message: "Entity already exists" });
//     }
//     let newSatellite = {
//         id: req.body.id,
//         name: req.body.name,
//         planet: req.body.planet,
//         diameter_km: req.body.diameter_km,
//         orbital_speed_kms: req.body.orbital_speed_kms,
//         distance_from_planet_km: req.body.distance_from_planet_km,
//         type: req.body.type,
//     };

//     satellites.push(newSatellite);
//     return res.status(200).json({ message: "A new satellite as been created" });
// });

// //* DELETE satellites

// app.delete("/satellites/:id", (req, res) => {
//     const satellite = satellites.find((s) => s.id === req.params.id);
//     if (!satellites) {
//         return res.status(400).json({ message: "Entity not exists" });
//     }

//     satellites.splice(satellite, 1);
//     return res.status(200).json({ message: "Entity has been deleted" });
// });

// //* PUT sattelites

// app.put("/satellites", (req, res) => {
//     let satellite = satellites.find((u) => u.id === req.body.id);
//     if (!satellite) {
//         return res.status(400).json({ message: "Entity not exists" });
//     }

//     satellite.name = req.body.name || satellite.name;
//     satellite.planet = req.body.planet || satellite.planet;
//     satellite.diameter_km = req.body.diameter_km || satellite.diameter_km;
//     satellite.orbital_speed_kms =
//         req.body.orbital_speed_kms || satellite.orbital_speed_kms;
//     satellite.distance_from_planet_km =
//         req.body.distance_from_planet_km || satellite.distance_from_planet_km;
//     satellite.type = req.body.type || satellite.type;

//     return res.status(200).json({ message: "Entity as been updated" });
// });
