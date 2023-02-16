

import React from "react";
import { createContext, ReactNode, useContext } from "react";
import { Rootstore } from "./RootStore";

const Context = createContext<Rootstore>({} as Rootstore);
const Provider=Context.Provider
interface IProps {
  children: ReactNode;
}
export const StoreProvider: React.FC<IProps> = ({ children }) => {
  const store = new Rootstore();
  return <Provider value={store}>{children}</Provider>
};

export const useStore=()=>useContext(Context)