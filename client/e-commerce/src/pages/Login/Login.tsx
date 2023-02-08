import { useState } from "react";
import { signInWithGoogle } from "../../component/firebase";
import { useNavigate } from 'react-router-dom';
import "./styles.scss";

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = () => navigate('/createUser');

  return (
    <div className="login">
      <div className="user-input">
        <div className="user-name-input">
          <input
            placeholder="UserName"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="user-password-input">
          <input
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
      </div>
      <div>
        <button> Submit</button>
      </div>
      <div  className="submit-button">
        <button onClick={handleClick}>Sign In</button>
        <button onClick={signInWithGoogle}>Sign with google</button>
      </div>
    </div>
  );
};
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}

