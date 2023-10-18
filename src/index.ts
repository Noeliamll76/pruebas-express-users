import express from "express"
const app=express()

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












app.listen(3000,()=> {
console.log("Servidor levantado en 3000")
})