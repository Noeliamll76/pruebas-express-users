import { Router } from "express";
import { getUsers, createUsers, updateUsersById,deleteUsersById, getUsersById } from "../controller/usersController";

const router = Router ()

router.get('/', getUsers)
router.post('/', createUsers) 
router.put('/:id',updateUsersById) 
router.delete('/:id', deleteUsersById)
router.get('/:id', getUsersById)

export {router}