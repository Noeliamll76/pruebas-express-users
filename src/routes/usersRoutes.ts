import { Router } from "express";
import { getUsers } from "../controller/usersController";

const router = Router ()

router.get('/', getUsers)
    



export {router}