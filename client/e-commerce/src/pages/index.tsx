import { HashRouter, Route, Routes } from "react-router-dom";
import { CreateUser } from "./createUser/CreateUser";
import { Login } from "./Login/Login";
export const Page: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
          <Route path="login" element={<Login/>}></Route>
          <Route path="createUser" element={<CreateUser/>}></Route>
      </Routes>
    </HashRouter>
  );
};
