import express from "express";
import { deleteUser, updateUser } from "../controllers/user.controller";
import { verifyToken } from "../middleware/verifyToken";
import { upload } from "../middleware/validateImgMulter";


const router = express.Router();

router.put("/:id", verifyToken, upload.single("avatar") ,updateUser);
router.delete("/:id", verifyToken ,deleteUser);

export default router;
