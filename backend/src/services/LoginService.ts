import {Inject, Injectable} from "@tsed/di";
import { AdminUserDTO } from "dtos/input/AdminUserDTO";
import { OAuthDTO } from "dtos/input/OAuthDTO";
import { MYSQL_DATA_SOURCE } from "src/datasources/MysqlDatasource";
import { LoginModel } from "src/models/LoginModel";
import { DataSource } from "typeorm";

@Injectable()
export class LoginService {
    constructor(@Inject(MYSQL_DATA_SOURCE) private dataSource: DataSource){}

    async saveLogin(login:AdminUserDTO): Promise<LoginModel>{
        console.log('emp: ', login)
        console.log(login.password , 'passsssssssssssssssss')
        console.log(login.name , 'userrrrrrrrrrr')
        return await this.dataSource.getRepository(LoginModel).save(login);
    }

    async saveAuth(login:OAuthDTO): Promise<LoginModel>{
      
        return await this.dataSource.getRepository(LoginModel).save(login);
    }
}
