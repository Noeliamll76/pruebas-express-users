import { Request, Response } from "express";

const getUsers = (req:Request, res:Response)=>{
    //logica de lo que quiero hacer/devolver
    return res.send('Get Users')
}
const createUsers = (req:Request, res:Response) => {
    //logica para crear usuarios
   return res.send('CREATE USERS')
}

export{getUsers, createUsers}
