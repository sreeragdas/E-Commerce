import { makeAutoObservable } from "mobx";
import { AuthStore } from "./AuthStore";

export class RootStore {
    public authStore : AuthStore

    public constructor(){
        this.authStore = new AuthStore()
        makeAutoObservable(this)
    }

}