import {Property} from "@tsed/schema";
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
}
