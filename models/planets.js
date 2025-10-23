import mongoose from "mongoose";
const { Schema } = mongoose;

const planetSchema = new Schema({
    name: String,
    size_km: Number,
    orbital_speed_kms: Number,
    surface_temperature_c: Number,
    core_temperature_c: Number,
    distance_from_sun_mkm: Number,
    type: String,
});

const Planet = mongoose.model("planet", planetSchema);
export default Planet;

//* CREATE
export async function createPlanets(planet) {
    try {
        const newPlanet = new Planet(planet);
        await newPlanet.save();
        return newPlanet;
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

//* READ
export async function readAllPlanets() {
    try {
        return await Planet.find();
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

//* UPDATE
export async function updatePlanets(planetObj, id) {
    try {
        await Planet.updateOne({ _id: id }, { $set: planetObj });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

//* DELETE
export async function deletePlanets(planetId) {
    try {
        await Planet.findByIdAndDelete(planetId);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

//* ########################## DATA ##########################

// let planets = [
//     {
//         id: 1,
//         name: "Mercury",
//         size_km: 4879,
//         orbital_speed_kms: 47.4,
//         surface_temperature_c: 167,
//         core_temperature_c: 7000,
//         distance_from_sun_mkm: 57.9,
//         type: "Terrestrial",
//     },
//     {
//         id: 2,
//         name: "Venus",
//         size_km: 12104,
//         orbital_speed_kms: 35.0,
//         surface_temperature_c: 464,
//         core_temperature_c: 7000,
//         distance_from_sun_mkm: 108.2,
//         type: "Terrestrial",
//     },
//     {
//         id: 3,
//         name: "Earth",
//         size_km: 12742,
//         orbital_speed_kms: 29.8,
//         surface_temperature_c: 15,
//         core_temperature_c: 6000,
//         distance_from_sun_mkm: 149.6,
//         type: "Terrestrial",
//     },
//     {
//         id: 4,
//         name: "Mars",
//         size_km: 6779,
//         orbital_speed_kms: 24.1,
//         surface_temperature_c: -65,
//         core_temperature_c: 1500,
//         distance_from_sun_mkm: 227.9,
//         type: "Terrestrial",
//     },
//     {
//         id: 5,
//         name: "Jupiter",
//         size_km: 139820,
//         orbital_speed_kms: 13.1,
//         surface_temperature_c: -110,
//         core_temperature_c: 24000,
//         distance_from_sun_mkm: 778.5,
//         type: "Gas giant",
//     },
//     {
//         id: 6,
//         name: "Saturn",
//         size_km: 116460,
//         orbital_speed_kms: 9.7,
//         surface_temperature_c: -140,
//         core_temperature_c: 12000,
//         distance_from_sun_mkm: 1433.5,
//         type: "Gas giant",
//     },
//     {
//         id: 7,
//         name: "Uranus",
//         size_km: 50724,
//         orbital_speed_kms: 6.8,
//         surface_temperature_c: -195,
//         core_temperature_c: 5000,
//         distance_from_sun_mkm: 2872.5,
//         type: "Ice giant",
//     },
//     {
//         id: 8,
//         name: "Neptune",
//         size_km: 49244,
//         orbital_speed_kms: 5.4,
//         surface_temperature_c: -200,
//         core_temperature_c: 7000,
//         distance_from_sun_mkm: 4495.1,
//         type: "Ice giant",
//     },
// ];
