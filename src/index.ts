import express from "express"
import {router as routerUsers} from "./routes/usersRoutes"


const app=express()
const PORT = process.env.PORT || 3000

app.use ('/users', routerUsers)

app.get('/users',(req,res)=>{
    //logica de lo que quiero hacer/devolver
    return res.send('GET USERS')
   })
   app.post('/users', (req,res)=>{
       //logica para crear usuarios
       console.log('create')
       return res.send('CREATE USERS')
   })
   app.put('/users/:id', (req,res)=>{
       //logica para actualizar usuarios
       const usersId=req.params.id
       return res.send('UPDATE USERS '+usersId)
   })
   app.delete('/users/:id', (req,res)=>{
       //logica para borrar usuarios
       const usersId=req.params.id
       return res.send('DELETE USERS '+usersId)
   })


app.listen(PORT, ()=> {
console.log (`Server runing ${PORT}`)
})
