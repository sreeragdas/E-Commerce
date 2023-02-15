import axios from "axios";
import { makeAutoObservable } from "mobx";
import { IAdminUser, IAuthLogin } from "../interface/IUser";

export class AuthStore {
        public user :IAdminUser | null;
        public authuser:IAuthLogin | null;
    
    public constructor() {
        this.user=null
        this.authuser=null;
        makeAutoObservable(this)
    }

    private setAuthUser (value :IAuthLogin | null){
        this.authuser=value

    }

    public async postAuthUser(value:IAuthLogin){
        try{
            await axios.post(`http://localhost:8083/rest/o-auth` , value)
            return true;
        }catch(e){
            console.log(e)
        }
    

    }
}