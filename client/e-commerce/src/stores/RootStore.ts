
import { AuthStore } from "./AuthStore";

export class Rootstore {
    public authStore : AuthStore

    public constructor(){
        this.authStore = new AuthStore()

    }

}