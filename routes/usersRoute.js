import { Router } from "express";
import {
  readAllUsersController,
  createUserController,
  deleteUserController,
} from "../controllers/usersController";

const router = Router();

router.post(
  "/users",
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
router.get("/users", readAllUsersController);
router.delete("/users/:id", deleteUserController);

export default router;
