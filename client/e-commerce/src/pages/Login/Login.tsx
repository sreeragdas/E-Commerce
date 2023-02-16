import { useState } from "react";
import { auth , provider } from "../../component/firebase";
import { useNavigate } from 'react-router-dom';
import "./styles.scss";
import { observer } from 'mobx-react-lite';
import {signInWithPopup} from "firebase/auth"
import { useStore } from "../../stores";
import { IAuthLogin } from "../../interface/IUser";
export const Login: React.FC = observer(() => {
  const {authStore} = useStore()
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = () => navigate('/createUser');

   const signInWithGoogle = () =>{
    signInWithPopup(auth , provider).then((result)=>{
  
    authStore.postAuthUser(result.user.displayName as unknown as IAuthLogin , result.user.email as unknown as IAuthLogin )
  

  }).catch((error)=>{console.log(error)})
  
    
}
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
});


