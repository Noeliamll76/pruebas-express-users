import { Router } from "express";
import { getUsers, createUsers, updateUsersById } from "../controller/usersController";

const router = Router ()

router.get('/', getUsers)
router.post('/', createUsers) 
router.put('/:id',updateUsersById) 


export {router}