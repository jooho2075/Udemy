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
            <form onSubmit={handleSubmit} style={{textAlign: 'center', border: '1px solid gray', padding: '80px'}}>
                <p style={{fontSize: "50px", fontWeight: "bold"}}>LogIn</p>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}> 
                    <p style={{marginBottom: '5px'}}>이메일</p>
                    <input 
                        type="email"
                        style={{
                            borderBottom: '2px solid black', 
                            outline: 'none', 
                            boxShadow: '1px 1px 5px rgba(0,0,0,0.2)', 
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
                            borderBottom: '2px solid black', 
                            outline: 'none', 
                            boxShadow: '1px 1px 5px rgba(0,0,0,0.2)', 
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
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <input 
                        type="checkbox" 
                        style={{
                            marginRight: '10px', 
                            width: '10px', 
                            height: '10px', 
                            backgroundColor: 'white'
                        }}
                    />
                    <label>로그인 정보 기억</label>    
                </div>
                
                <button type='submit' style={{
                    marginTop: '20px', 
                    padding: '10px 20px', 
                    width: '300px', 
                    outline: '2px solid black',
                    borderRadius: '10px',
                    fontWeight: 'bold',
                    backgroundColor: 'black',
                    color: 'white',
                    marginBottom: '10px',
                    boxShadow: '1px 1px 5px rgba(0,0,0,0.2)'
                }}>
                    로그인
                </button>
                <p style={{marginLeft: '10px', marginTop: 0}}>회원가입</p>
            </form>
        </div>    
    );
}

export default Login;