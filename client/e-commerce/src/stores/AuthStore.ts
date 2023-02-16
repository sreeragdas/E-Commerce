import axios from "axios";
import { makeAutoObservable } from "mobx";
import { IAdminUser, IAuthLogin } from "../interface/IUser";

export class AuthStore {
        public user :IAdminUser | null;
        public authuser:IAuthLogin | null ;
    
    public constructor() {
        this.user=null
        this.authuser=null;
        makeAutoObservable(this)
    }

    private setAuthUser (value :IAuthLogin ){
        this.authuser=value

    }

    private setAdminUser(value:IAdminUser){
        this.user=value
    }

    public async postAuthUser(name:IAuthLogin , eMail:IAuthLogin){
        const value={name , eMail}
        console.log(value ,'value data from store')
        try{
            await axios.post(`http://localhost:8083/rest/o-auth` , value)
            return true;
        }catch(e){
            console.log(e)
        }
    

    }

    public async postAdminUser(value : IAdminUser){
        console.log(value , 'val from store')
        try{
            await axios.post(`http://localhost:8083/rest/login` , value)
        }catch(e){
            console.log(e)
        }
    }
}