import { useState } from "react";

function BetterSignupForm() {
    const [formData, setFormData] = useState({
        firstName: "", 
        lastName: "",
        password: ""
    });
    
    // BetterSignupForm 함수에게 update할 state의 필드를 알려주는 부분
    const handleChange = (evt) => {
        const changeField = evt.target.name;
        const newValue = evt.target.value;
        setFormData(currData => {
            return {
                ...currData,
                [changeField]: newValue, // changeField : 바뀐 필드 이름을 나타냄
                // newValue : 바뀐 새로운 값을 나타냄
            };
        });
    };

    const handleSubmit = () => {
        console.log(formData);
    };

    return(
        <div>
            <label htmlFor="firstname">First Name</label><br />
            <input 
                type="text"
                placeholder="FirstName"
                value = {formData.firstName}
                onChange={handleChange}
                name="firstName"
                id="firstname" 
            /><br></br>
            <label htmlFor="lastname">Last Name</label><br />
            <input 
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                name="lastName"
                id="lastname"
            /><br></br>
            <label htmlFor="password">Password</label><br />
            <input 
                type="password"
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
                name="password"
                id="password"
            /><br></br>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default BetterSignupForm;