import { useState } from "react";

function UsernameForm() {
    const[username, setUsername] = useState("Park");
    const updateUsername = (evt) => {
        setUsername(evt.target.value);
    };
    
    return(
        <div>
            <label htmlFor="username">Enter a UserName</label><br />
            <input 
                type="text" 
                placeholder="username" 
                value={username}
                onChange={updateUsername}
                id="username"
            />
            <button>Submit</button>
        </div>
    );
}

export default UsernameForm;