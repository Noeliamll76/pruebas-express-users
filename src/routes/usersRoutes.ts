import { Router } from "express";
import { getUsers, createUsers } from "../controller/usersController";

const router = Router ()

router.get('/', getUsers)
router.post('/', createUsers) 



export {router}