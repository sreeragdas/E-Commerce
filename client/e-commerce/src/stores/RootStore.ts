import { makeAutoObservable } from "mobx";

export class RootStore {

    public constructor(){
        makeAutoObservable(this)
    }

}