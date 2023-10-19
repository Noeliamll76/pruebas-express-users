import express from "express"
import { router as routerUsers } from "./routes/usersRoutes"


const app = express()
const PORT = process.env.PORT || 3000

app.use('/users', routerUsers)




app.listen(PORT, () => {
    console.log(`Server runing ${PORT}`)
})
