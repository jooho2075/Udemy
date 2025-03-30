import { useState } from 'react';

function Login() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("ID : ", id);
        console.log("PASSWORD : ", password);
    };

    return(
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <form onSubmit={handleSubmit} style={{textAlign: 'center'}}>
                <p style={{fontSize: "50px", fontWeight: "bold"}}>LogIn</p>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}> 
                    <p style={{marginBottom: '5px'}}>이메일</p>
                    <input 
                        type="email"
                        style={{
                            borderColor: 'black', 
                            outline: '2px solid black', 
                            boxShadow: '0px 2px 5px rgba(0,0,0,2)', 
                            width: '300px',
                            padding: '10px',
                            borderRadius: '5px',
                            marginBottom: '10px'    
                        }}
                        placeholder='0000@0000.com'
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        required
                    />
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                    <p style={{marginBottom: '5px'}}>비밀번호</p>
                    <input 
                        type="password" 
                        style={{
                            borderColor: "black", 
                            outline: '2px solid black', 
                            boxShadow: '0px 2px 5px rgba(0,0,0,2)', 
                            width: '300px',
                            padding: '10px',
                            borderRadius: '5px',
                            marginBottom: '10px'    
                        }}
                        placeholder='영문 대소문자, 특수문자 포함 8자리 이상'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required    
                    />
                </div>
                <button type='submit' style={{
                    marginTop: '20px', 
                    padding: '10px 20px', 
                    width: '300px', 
                    outline: '2px solid black',
                    borderRadius: '10px',
                    fontWeight: 'bold'
                }}>
                    로그인
                </button>
            </form>
        </div>    
    );
}

export default Login;