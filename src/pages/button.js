import { Home } from "./home";
import { useState } from 'react';

export function Button(border, background) {
    const [password, setPassword] = useState(false);

    function Click() {
        setPassword(true);
    }

    return (
        <div>
            <Home />
            <div style={{border:'2px solid', width:'150px', height:'100px', textAlign:'center' , marginTop:'100px'}}>
            {
                password
                    ? <p>Your Password</p>
                    : <p>***********</p>
            }
            <button  onClick={Click}>Show Password</button>
            </div>
            <Home />
        </div>
        
    );
}
