import express from "express";
import { deleteUser, updateUser } from "../controllers/user.controller";
import { verifyToken } from "../middleware/verifyToken";

const router = express.Router();

router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken ,deleteUser);

export default router;
