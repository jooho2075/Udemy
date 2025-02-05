import { useState } from "react";

function SignupForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const updateFirstName = (evt) => {
        setFirstName(evt.target.value);
    };
    
    const updateLastName = (evt) => {
        setLastName(evt.target.value)
    };

    const handleSubmit = () => {
        console.log(firstName, lastName);
    }

    return(
        <div>
            <label htmlFor="firstname">First Name</label><br />
            <input 
                type="text"
                placeholder="FirstName"
                value = {firstName}
                onChange={updateFirstName}
                id="firstname" 
            /><br></br>
            <label htmlFor="lastname">Last Name</label><br />
            <input 
                type="text"
                placeholder="LastName"
                value={lastName}
                onChange={updateLastName}
                id="lastname"
            /><br></br>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default SignupForm;