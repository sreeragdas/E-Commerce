import {Inject, Injectable} from "@tsed/di";
import { MYSQL_DATA_SOURCE } from "src/datasources/MysqlDatasource";
import { LoginModel } from "src/models/LoginModel";
import { DataSource } from "typeorm";
interface loginDetails{
    username:string,
    password:string
}
@Injectable()
export class LoginService {
    constructor(@Inject(MYSQL_DATA_SOURCE) private dataSource: DataSource){}

    async save(login:loginDetails): Promise<LoginModel>{
        console.log('emp: ', login)
        console.log(login.password , 'passsssssssssssssssss')
        console.log(login.username , 'userrrrrrrrrrr')
        return await this.dataSource.getRepository(LoginModel).save(login);
    }
}
