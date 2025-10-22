import { Router } from "express";
import { body } from "express-validator";

import {
    readAllUsersController,
    createUserController,
    deleteUserController,
} from "../controllers/usersController.js";

const router = Router();

router.post(
    "/",
    [
        body("email").notEmpty().isEmail().withMessage("Email invalid"),
        body("pwd").isLength({ min: 8 }).withMessage("Password invalid"),
    ],
    (req, res) => {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.send({ error: result.array() });
        }
        createUserController(req, res);
    }
);
router.get("/", readAllUsersController);
router.delete("/:id", deleteUserController);

export default router;
