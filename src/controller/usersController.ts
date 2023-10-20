import { Request, Response } from "express";
import { Users } from "../models/Users";

const getUsers = async (req: Request, res: Response) => {
    try {
        //Busca de la clase Users y se lo pasas a la variable users y me lo muestras
        const users = await Users.find()
        return res.send(users)
    } catch (error) { return res.send(error) }
}

const createUsers = async (req: Request, res: Response) => {
    const newUser = await Users.create(
        {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
    ).save()
    return res.send(newUser)
}


const updateUsersById = (req: Request, res: Response) => {
    //logica para actualizar usuarios
    return res.send('UPDATE USERS by id ')
}

const deleteUsersById = (req: Request, res: Response) => {
    //logica para borrar usuarios
    return res.send('DELETE USERS by ID')
}

const getUsersById = (req: Request, res: Response) => {
    //logica de lo que quiero hacer/devolver
    return res.send('Get Users by id')
}

export { getUsers, createUsers, updateUsersById, deleteUsersById, getUsersById }
