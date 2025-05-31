import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("ID : ", id);
        console.log("PASSWORD : ", password);
    };

    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', 
                    justifyContent: 'center', textAlign: 'center'}}
        >
            <p style={{ fontSize: 50, fontWeight: "bold", marginBottom: "20px" }}>
                <span style={{color: '#F05636'}}>바디 </span><span style={{color: '#2678E4'}}>케어</span>와 함께 
                <p>건강 관리 시작해요!</p>
            </p>
            <form onSubmit={handleSubmit} style={{textAlign: 'center', border: '3px solid gray', padding: '60px'}}>
                <p style={{fontSize: "50px", fontWeight: "bold", marginBottom: "20px"}}>LogIn</p>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}> 
                    <input type="email" style={{borderBottom: '2px solid black', outline: 'none', 
                                                boxShadow: '1px 1px 5px rgba(0,0,0,0.2)', 
                                                width: '300px', padding: '10px', borderRadius: '5px', marginBottom: '10px'
                                            }}
                            placeholder='이메일' value={id} onChange={(e) => setId(e.target.value)}
                            required
                    />
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                    <input type="password" style={{borderBottom: '2px solid black', outline: 'none',
                                                    boxShadow: '1px 1px 5px rgba(0,0,0,0.2)', 
                                                    width: '300px', padding: '10px', borderRadius: '5px', marginBottom: '10px'
                                                }}
                            placeholder='비밀번호' value={password} onChange={(e) => setPassword(e.target.value)}
                            required    
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <input type="checkbox" style={{marginRight: '10px', width: '10px', height: '10px', backgroundColor: 'white'}}/>
                    <label>로그인 정보 기억</label>    
                </div>
                <div>
                    <button type='submit' style={{marginTop: '20px', padding: '10px 20px', width: '300px', 
                                                outline: '2px solid #2678E4', borderRadius: '10px',
                                                fontWeight: 'bold', backgroundColor: '#2678E4', color: 'white',
                                                marginBottom: '10px', boxShadow: '1px 1px 5px rgba(0,0,0,0.2)'
                                                }}
                    >
                        로그인
                    </button>
                </div>
                <button type="submit" style={{marginTop: '20px', padding: '10px 20px', width: '300px', 
                                            outline: '2px solid #F05636', borderRadius: '10px',
                                            fontWeight: 'bold', backgroundColor: '#F05636', color: 'white',
                                            marginBottom: '10px', boxShadow: '1px 1px 5px rgba(0,0,0,0.2)'
                                        }
                        }onClick={() => navigate('/Membership')}
                >
                    회원가입
                </button>
                <p style={{marginBottom: '10px', color: '#2678E4'}}>
                    소셜 로그인
                </p>
                <p 
                    style={{marginLeft: '10px', marginBottom: '10px', cursor: 'pointer', color: '#F05636'}}
                    onClick={() => navigate('/Repassword')}
                >
                    비밀번호를 잊으셨나요?
                </p>
                
            </form>
        </div>    
    );
}

export default Login;