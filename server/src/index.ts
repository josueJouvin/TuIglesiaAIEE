import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route"
import testRoute from "./routes/test.route"

const port = process.env.PORT || 4000
const app = express()

app.use(cors({origin: process.env.CLIENT_URL, credentials: true}))
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoute);
app.use("/api/test", testRoute)

app.listen(port, () => {
    console.log(`Res en puerto ${port}`)
})