import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route"
import userRoute from "./routes/user.route";

const port = process.env.PORT || 4000
const app = express()

app.use(cors({origin: process.env.CLIENT_URL, credentials: true}))
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);


app.listen(port, () => {
    console.log(`Res en puerto ${port}`)
})