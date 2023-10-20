import { Request, Response } from "express";
import { Users } from "../models/Users";
import { isNonNullExpression } from "typescript";
import { IsNull } from "typeorm";

const getUsers = async (req: Request, res: Response) => {
    try {
        //Busca de la clase Users y se lo pasas a la variable users y me lo muestras
        const users = await Users.find()
        return res.send(users)
    } catch (error) { return res.send(error) }
}

const createUsers = async (req: Request, res: Response) => {
    try {
        const newUser = await Users.create(
            {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
        ).save()
        return res.send(newUser)
    } catch (error) { return res.send(error) }
}


const updateUsersById = async (req: Request, res: Response) => {
    try {
        const userIdToUpdate = req.params.id
        const userUpdate = await Users.findBy(
            {
                id: parseInt(userIdToUpdate)
            })
        if (userUpdate) {
            await Users.update(userIdToUpdate, req.body)
            return res.send("Se ha modificado correctamente")
        }
        return res.send("No se ha encontrado el usuario a modificar")
    } catch (error) {
        return res.send(error)
    }
}


const deleteUsersById = async (req: Request, res: Response) => {
    try {
        const userIdToDelete = req.params.id
        const userDeleted = await Users.delete(
            {
                id: parseInt(userIdToDelete)
            }
        )
        if (userDeleted.affected) {
            return res.send("Se ha eliminado correctamente el id " + userIdToDelete)
        }
        return res.send("No se ha podido eliminar el id " + userIdToDelete)
    } catch (error) {
        return res.send(error)
    }
}

const getUsersById = async (req: Request, res: Response) => {
    try {
        const userIdToGet = req.params.id
        const userGet = await Users.findBy(
            {
                id: parseInt(userIdToGet)
            }
        )
        if (userGet) {
            return res.send(userGet)
        }
        else {
            return res.send("No se ha encontrado ningun user con ese id")}
    } catch (error) { return res.send(error) }
}

export { getUsers, createUsers, updateUsersById, deleteUsersById, getUsersById }
