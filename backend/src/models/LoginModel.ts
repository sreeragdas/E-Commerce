import {Property, string} from "@tsed/schema";
import { strictEqual } from "assert";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Login')
export class LoginModel {
  @Property()
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name:string;

  @Column()
  password:string

  @Column()
  phoneNumber:string

  @Column({nullable:true , default:null})
  eMail:string
}
