import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useStore } from "../../stores";

export const CreateUser: React.FC = observer(() => {
    const [name , setName]=useState('')
    const[phoneNumber, setPhoneNumber]=useState('')
    const[eMail , seteMail]=useState('')
    const [password , setPassword]=useState('')

    const {authStore} =useStore();

    const submitForm =()=>{
        authStore.postAdminUser({name,phoneNumber,eMail,password})
    }
    return(<div>
        <form>
            <div>
                <div>Name</div>
                <input  type="text" onChange={(e)=> setName(e.target.value)} />
                <div>Phone Number</div>
                <input  type="text" onChange={(e)=> setPhoneNumber(e.target.value)}  />
                
                <div>Email-id</div>
                <input  type="text" onChange={(e)=> seteMail(e.target.value)} />
                <div>Password</div>
                <input  type="text" onChange={(e)=> setPassword(e.target.value)} />
            </div>
            <div>
                <button type="submit" onClick={submitForm}>Submit</button>
            </div>
        </form>
    </div>);
})