import { Request, Response } from "express";

const getUsers = (req:Request, res:Response)=>{
    //logica de lo que quiero hacer/devolver
    return res.send('Get Users')
}


export{getUsers}
