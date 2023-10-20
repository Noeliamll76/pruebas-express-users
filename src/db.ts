import "reflect-metadata"
import{DataSource} from "typeorm"
import { Users1697820789664 } from "./migration/1697820789664-users"
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "fsd-typeorm-pruebas",
    entities: [],
    migrations: [Users1697820789664],
    synchronize: false,
    logging: false,
   })