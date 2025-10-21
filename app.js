import express from "express";
const app = express();
const port = 3000;

app.use(express.json());

// GET planets

app.get("/planets", (req, res) => {
    if (planets.length === 0) {
        return res.status(400).json({ message: "No data entry" });
    }

    return res.status(200).json(planets);
});

// POST planets

app.post("/planets", (req, res) => {
    let newPlanet = {
        id: planets.length + 1,
        name: req.body.name,
        size_km: req.body.size_km,
        orbital_speed_kms: req.body.orbital_speed_kms,
        surface_temperature_c: req.body.surface_temperature_c,
        core_temperature_c: req.body.core_temperature_c,
        distance_from_sun_mkm: req.body.distance_from_sun_mkm,
        type: req.body.type,
    };

    planets.push(newPlanet);
    return res
        .status(200)
        .json({ message: "New planet as been added name : " + newPlanet.name });
});

// DELETE planets

app.delete("/planets/:id", (req, res) => {
    let planet = planets.find((p) => p.id == req.params.id);
    if (!planet) {
        return res.status(400).json({ message: "Entity not found" });
    }

    planets.splice(planet, 1);
    return res.status(200).json({ message: "Entity as been deleted" });
});

// PUT planets

app.put("/planets", (req, res) => {
    let planet = planets.find((p) => p.id == req.body.id);

    if (!planet) {
        return res.status(400).json({ message: "Entity not found" });
    }

    planet.name = req.body.name || planet.name;
    planet.size_km = req.body.size_km || planet.size_km;
    planet.orbital_speed_kms =
        req.body.orbital_speed_kms || planet.orbital_speed_kms;
    planet.surface_temperature_c =
        req.body.surface_temperature_c || planet.surface_temperature_c;
    planet.core_temperature_c =
        req.body.core_temperature_c || planet.core_temperature_c;
    planet.distance_from_sun_mkm =
        req.body.distance_from_sun_mkm || planet.distance_from_sun_mkm;
    planet.type = req.body.type || planet.type;

    return res.status(200).json({ message: "Entity has been updated" });
});

// GET satellites

app.get("/satellites", (req, res) => {
    if (satellites.length === 0) {
        return res.status(400).json({ message: "No entity found" });
    }

    return res.status(200).json(satellites);
});

// POST satellites

app.post("/satellites", (req, res) => {
    const satellite = satellites.find((s) => s.id === req.body.id);
    if (satellite) {
        return res.status(400).json({ message: "Entity already exists" });
    }
    let newSatellite = {
        id: req.body.id,
        name: req.body.name,
        planet: req.body.planet,
        diameter_km: req.body.diameter_km,
        orbital_speed_kms: req.body.orbital_speed_kms,
        distance_from_planet_km: req.body.distance_from_planet_km,
        type: req.body.type,
    };

    satellites.push(newSatellite);
    return res.status(200).json({ message: "A new satellite as been created" });
});

// DELETE satellites

app.delete("/satellites/:id", (req, res) => {
    const satellite = satellites.find((s) => s.id === req.params.id);
    if (!satellites) {
        return res.status(400).json({ message: "Entity not exists" });
    }

    satellites.splice(satellite, 1);
    return res.status(200).json({ message: "Entity has been deleted" });
});

// PUT sattelites

app.put("/satellites", (req, res) => {
    let satellite = satellites.find((u) => u.id === req.body.id);
    if (!satellite) {
        return res.status(400).json({ message: "Entity not exists" });
    }

    satellite.name = req.body.name || satellite.name;
    satellite.planet = req.body.planet || satellite.planet;
    satellite.diameter_km = req.body.diameter_km || satellite.diameter_km;
    satellite.orbital_speed_kms =
        req.body.orbital_speed_kms || satellite.orbital_speed_kms;
    satellite.distance_from_planet_km =
        req.body.distance_from_planet_km || satellite.distance_from_planet_km;
    satellite.type = req.body.type || satellite.type;

    return res.status(200).json({ message: "Entity as been updated" });
});

app.listen(port, () => console.log("Server running on port : " + port));

// ########################## DATA ##########################

let planets = [
    {
        id: 1,
        name: "Mercury",
        size_km: 4879,
        orbital_speed_kms: 47.4,
        surface_temperature_c: 167,
        core_temperature_c: 7000,
        distance_from_sun_mkm: 57.9,
        type: "Terrestrial",
    },
    {
        id: 2,
        name: "Venus",
        size_km: 12104,
        orbital_speed_kms: 35.0,
        surface_temperature_c: 464,
        core_temperature_c: 7000,
        distance_from_sun_mkm: 108.2,
        type: "Terrestrial",
    },
    {
        id: 3,
        name: "Earth",
        size_km: 12742,
        orbital_speed_kms: 29.8,
        surface_temperature_c: 15,
        core_temperature_c: 6000,
        distance_from_sun_mkm: 149.6,
        type: "Terrestrial",
    },
    {
        id: 4,
        name: "Mars",
        size_km: 6779,
        orbital_speed_kms: 24.1,
        surface_temperature_c: -65,
        core_temperature_c: 1500,
        distance_from_sun_mkm: 227.9,
        type: "Terrestrial",
    },
    {
        id: 5,
        name: "Jupiter",
        size_km: 139820,
        orbital_speed_kms: 13.1,
        surface_temperature_c: -110,
        core_temperature_c: 24000,
        distance_from_sun_mkm: 778.5,
        type: "Gas giant",
    },
    {
        id: 6,
        name: "Saturn",
        size_km: 116460,
        orbital_speed_kms: 9.7,
        surface_temperature_c: -140,
        core_temperature_c: 12000,
        distance_from_sun_mkm: 1433.5,
        type: "Gas giant",
    },
    {
        id: 7,
        name: "Uranus",
        size_km: 50724,
        orbital_speed_kms: 6.8,
        surface_temperature_c: -195,
        core_temperature_c: 5000,
        distance_from_sun_mkm: 2872.5,
        type: "Ice giant",
    },
    {
        id: 8,
        name: "Neptune",
        size_km: 49244,
        orbital_speed_kms: 5.4,
        surface_temperature_c: -200,
        core_temperature_c: 7000,
        distance_from_sun_mkm: 4495.1,
        type: "Ice giant",
    },
];

let satellites = [
    {
        id: 1,
        name: "Moon",
        planet: "Earth",
        diameter_km: 3474.8,
        orbital_speed_kms: 1.022,
        distance_from_planet_km: 384400,
        type: "Natural",
    },
    {
        id: 2,
        name: "Phobos",
        planet: "Mars",
        diameter_km: 22.4,
        orbital_speed_kms: 2.138,
        distance_from_planet_km: 9376,
        type: "Natural",
    },
    {
        id: 3,
        name: "Deimos",
        planet: "Mars",
        diameter_km: 12.6,
        orbital_speed_kms: 1.351,
        distance_from_planet_km: 23460,
        type: "Natural",
    },
    {
        id: 4,
        name: "Io",
        planet: "Jupiter",
        diameter_km: 3643.2,
        orbital_speed_kms: 17.334,
        distance_from_planet_km: 421700,
        type: "Natural",
    },
    {
        id: 5,
        name: "Europa",
        planet: "Jupiter",
        diameter_km: 3121.6,
        orbital_speed_kms: 13.74,
        distance_from_planet_km: 671100,
        type: "Natural",
    },
    {
        id: 6,
        name: "Ganymede",
        planet: "Jupiter",
        diameter_km: 5268.2,
        orbital_speed_kms: 10.88,
        distance_from_planet_km: 1070400,
        type: "Natural",
    },
    {
        id: 7,
        name: "Callisto",
        planet: "Jupiter",
        diameter_km: 4821.6,
        orbital_speed_kms: 8.204,
        distance_from_planet_km: 1882700,
        type: "Natural",
    },
    {
        id: 8,
        name: "Amalthea",
        planet: "Jupiter",
        diameter_km: 250,
        orbital_speed_kms: 26.1,
        distance_from_planet_km: 181400,
        type: "Natural",
    },
    {
        id: 9,
        name: "Himalia",
        planet: "Jupiter",
        diameter_km: 170,
        orbital_speed_kms: 11.4,
        distance_from_planet_km: 11520000,
        type: "Natural",
    },
    {
        id: 10,
        name: "Titan",
        planet: "Saturn",
        diameter_km: 5150.0,
        orbital_speed_kms: 5.57,
        distance_from_planet_km: 1221870,
        type: "Natural",
    },
    {
        id: 11,
        name: "Rhea",
        planet: "Saturn",
        diameter_km: 1525.6,
        orbital_speed_kms: 8.48,
        distance_from_planet_km: 527040,
        type: "Natural",
    },
    {
        id: 12,
        name: "Dione",
        planet: "Saturn",
        diameter_km: 1123.0,
        orbital_speed_kms: 10.3,
        distance_from_planet_km: 377400,
        type: "Natural",
    },
    {
        id: 13,
        name: "Tethys",
        planet: "Saturn",
        diameter_km: 1062.0,
        orbital_speed_kms: 11.3,
        distance_from_planet_km: 294660,
        type: "Natural",
    },
    {
        id: 14,
        name: "Enceladus",
        planet: "Saturn",
        diameter_km: 504.0,
        orbital_speed_kms: 12.6,
        distance_from_planet_km: 237948,
        type: "Natural",
    },
    {
        id: 15,
        name: "Mimas",
        planet: "Saturn",
        diameter_km: 396.0,
        orbital_speed_kms: 14.3,
        distance_from_planet_km: 185539,
        type: "Natural",
    },
    {
        id: 16,
        name: "Miranda",
        planet: "Uranus",
        diameter_km: 471.6,
        orbital_speed_kms: 6.7,
        distance_from_planet_km: 129900,
        type: "Natural",
    },
    {
        id: 17,
        name: "Ariel",
        planet: "Uranus",
        diameter_km: 1157.8,
        orbital_speed_kms: 5.4,
        distance_from_planet_km: 191020,
        type: "Natural",
    },
    {
        id: 18,
        name: "Umbriel",
        planet: "Uranus",
        diameter_km: 1169.4,
        orbital_speed_kms: 4.7,
        distance_from_planet_km: 266000,
        type: "Natural",
    },
    {
        id: 19,
        name: "Titania",
        planet: "Uranus",
        diameter_km: 1578.8,
        orbital_speed_kms: 3.9,
        distance_from_planet_km: 435910,
        type: "Natural",
    },
    {
        id: 20,
        name: "Oberon",
        planet: "Uranus",
        diameter_km: 1523.4,
        orbital_speed_kms: 3.5,
        distance_from_planet_km: 583520,
        type: "Natural",
    },
    {
        id: 21,
        name: "Triton",
        planet: "Neptune",
        diameter_km: 2706.8,
        orbital_speed_kms: 5.43,
        distance_from_planet_km: 354760,
        type: "Natural",
    },
    {
        id: 22,
        name: "Nereid",
        planet: "Neptune",
        diameter_km: 340,
        orbital_speed_kms: 0.6,
        distance_from_planet_km: 5510000,
        type: "Natural",
    },
    {
        id: 23,
        name: "Proteus",
        planet: "Neptune",
        diameter_km: 420,
        orbital_speed_kms: 7.6,
        distance_from_planet_km: 117600,
        type: "Natural",
    },
    {
        id: 24,
        name: "Hiʻiaka",
        planet: "Haumea",
        diameter_km: 310,
        orbital_speed_kms: 1.0,
        distance_from_planet_km: 49800,
        type: "Natural",
    },
    {
        id: 25,
        name: "Namaka",
        planet: "Haumea",
        diameter_km: 170,
        orbital_speed_kms: 0.7,
        distance_from_planet_km: 25657,
        type: "Natural",
    },
    {
        id: 26,
        name: "Charon",
        planet: "Pluto",
        diameter_km: 1212,
        orbital_speed_kms: 0.2,
        distance_from_planet_km: 19571,
        type: "Natural",
    },
    {
        id: 27,
        name: "Styx",
        planet: "Pluto",
        diameter_km: 16,
        orbital_speed_kms: 0.1,
        distance_from_planet_km: 42656,
        type: "Natural",
    },
    {
        id: 28,
        name: "Nix",
        planet: "Pluto",
        diameter_km: 49,
        orbital_speed_kms: 0.1,
        distance_from_planet_km: 48694,
        type: "Natural",
    },
    {
        id: 29,
        name: "Kerberos",
        planet: "Pluto",
        diameter_km: 19,
        orbital_speed_kms: 0.1,
        distance_from_planet_km: 57783,
        type: "Natural",
    },
    {
        id: 30,
        name: "Hydra",
        planet: "Pluto",
        diameter_km: 50,
        orbital_speed_kms: 0.1,
        distance_from_planet_km: 64738,
        type: "Natural",
    },
    {
        id: 31,
        name: "Leda",
        planet: "Jupiter",
        diameter_km: 20,
        orbital_speed_kms: 23.0,
        distance_from_planet_km: 11700000,
        type: "Natural",
    },
    {
        id: 32,
        name: "Himalia",
        planet: "Jupiter",
        diameter_km: 170,
        orbital_speed_kms: 11.4,
        distance_from_planet_km: 11520000,
        type: "Natural",
    },
    {
        id: 33,
        name: "Elara",
        planet: "Jupiter",
        diameter_km: 80,
        orbital_speed_kms: 13.7,
        distance_from_planet_km: 11700000,
        type: "Natural",
    },
    {
        id: 34,
        name: "Pasiphae",
        planet: "Jupiter",
        diameter_km: 60,
        orbital_speed_kms: 14.3,
        distance_from_planet_km: 23500000,
        type: "Natural",
    },
    {
        id: 35,
        name: "Sinope",
        planet: "Jupiter",
        diameter_km: 38,
        orbital_speed_kms: 14.0,
        distance_from_planet_km: 23600000,
        type: "Natural",
    },
    {
        id: 36,
        name: "Callirrhoe",
        planet: "Jupiter",
        diameter_km: 8,
        orbital_speed_kms: 14.8,
        distance_from_planet_km: 24100000,
        type: "Natural",
    },
    {
        id: 37,
        name: "Megaclite",
        planet: "Jupiter",
        diameter_km: 6,
        orbital_speed_kms: 14.5,
        distance_from_planet_km: 24300000,
        type: "Natural",
    },
    {
        id: 38,
        name: "Themisto",
        planet: "Jupiter",
        diameter_km: 8,
        orbital_speed_kms: 14.2,
        distance_from_planet_km: 7950000,
        type: "Natural",
    },
    {
        id: 39,
        name: "Carpo",
        planet: "Jupiter",
        diameter_km: 3,
        orbital_speed_kms: 15.0,
        distance_from_planet_km: 17100000,
        type: "Natural",
    },
    {
        id: 40,
        name: "S/2003 J 12",
        planet: "Jupiter",
        diameter_km: 2,
        orbital_speed_kms: 14.9,
        distance_from_planet_km: 17400000,
        type: "Natural",
    },
    {
        id: 41,
        name: "S/2003 J 2",
        planet: "Jupiter",
        diameter_km: 2,
        orbital_speed_kms: 15.1,
        distance_from_planet_km: 17500000,
        type: "Natural",
    },
    {
        id: 42,
        name: "Phoebe",
        planet: "Saturn",
        diameter_km: 213,
        orbital_speed_kms: 8.5,
        distance_from_planet_km: 12950000,
        type: "Natural",
    },
    {
        id: 43,
        name: "Janus",
        planet: "Saturn",
        diameter_km: 179,
        orbital_speed_kms: 6.8,
        distance_from_planet_km: 151400,
        type: "Natural",
    },
    {
        id: 44,
        name: "Epimetheus",
        planet: "Saturn",
        diameter_km: 113,
        orbital_speed_kms: 7.0,
        distance_from_planet_km: 151400,
        type: "Natural",
    },
    {
        id: 45,
        name: "Atlas",
        planet: "Saturn",
        diameter_km: 30,
        orbital_speed_kms: 16.4,
        distance_from_planet_km: 137670,
        type: "Natural",
    },
    {
        id: 46,
        name: "Prometheus",
        planet: "Saturn",
        diameter_km: 86,
        orbital_speed_kms: 13.7,
        distance_from_planet_km: 139350,
        type: "Natural",
    },
    {
        id: 47,
        name: "Pandora",
        planet: "Saturn",
        diameter_km: 81,
        orbital_speed_kms: 13.4,
        distance_from_planet_km: 141700,
        type: "Natural",
    },
    {
        id: 48,
        name: "Pan",
        planet: "Saturn",
        diameter_km: 28,
        orbital_speed_kms: 16.9,
        distance_from_planet_km: 133600,
        type: "Natural",
    },
    {
        id: 49,
        name: "Mab",
        planet: "Uranus",
        diameter_km: 25,
        orbital_speed_kms: 7.0,
        distance_from_planet_km: 97700,
        type: "Natural",
    },
    {
        id: 50,
        name: "Cupid",
        planet: "Uranus",
        diameter_km: 18,
        orbital_speed_kms: 6.7,
        distance_from_planet_km: 74300,
        type: "Natural",
    },
];
