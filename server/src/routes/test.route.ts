import express from "express"
import { shouldAdmin, shouldLoggedIn } from "../controllers/test..controller"
import { verifyToken } from "../middleware/verifyToken"

const router = express.Router()

router.get("/should-logged-in", verifyToken ,shouldLoggedIn)

router.get("/should-admin", shouldAdmin)

export default router