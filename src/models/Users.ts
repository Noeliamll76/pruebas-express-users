import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("users")

export class Users extends BaseEntity {

@PrimaryGeneratedColumn()
id!:number

@Column()
name!:string

@Column()
email!:string

@Column()
password!:string

}
