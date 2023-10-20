import express from "express"
import { router as routerUsers } from "./routes/usersRoutes"
import { AppDataSource } from "./db"


const app = express()
const PORT = process.env.PORT || 3000


app.use(express.json())
app.use('/users', routerUsers)
AppDataSource.initialize()
.then (()=>{
    app.listen(PORT, () => {
        console.log(`Server runing ${PORT}`)
    })
    console.log ('Database connected')
})
.catch (error=>{
    console.log(error)
})


