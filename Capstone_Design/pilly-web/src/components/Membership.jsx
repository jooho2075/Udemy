import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Membership() {
    const [idPlaceholder, setIdPlaceholder] = useState("사용자 이메일을 입력해주세요");
    const [nicknamePlaceholder, setNicknamePlaceholder] = useState("5글자 내로 입력해주세요");

    const navigate = useNavigate();

    return(
        <>    
            <div>
                <p style={{fontSize: 50, fontWeight: 'bold', marginLeft: 40}}>환영합니다</p>
                <p style={{fontSize: 50, fontWeight: 'bold', marginLeft: 40, marginBottom: 40}}>빠른 가입으로 시작해봐요</p>
                <div>
                <span style={{marginLeft: 40, fontSize: 20, fontWeight: 'bold', color: 'black'}}>아이디</span> 
                    <input type="email" placeholder={idPlaceholder} onFocus={() => setIdPlaceholder("")}
                            onBlur={() => setIdPlaceholder("사용자 이메일을 입력해주세요")}
                            style={{marginLeft: 40, width: 500, height: 40, fontSize: 20, fontWeight: 'bold',
                                    padding: 10, outline: '2px sold black', marginBottom: 20, border: 'none'
                                }}
                    />
                </div>
                
                <div>
                    <span style={{marginLeft: 40, fontSize: 20, fontWeight: 'bold', color: 'black'}}>닉네임</span> 
                        <input type="email" placeholder={nicknamePlaceholder} onFocus={() => setNicknamePlaceholder("")}
                                onBlur={() => setNicknamePlaceholder("5글자 내로 입력해주세요")}
                                style={{marginLeft: 40, width: 500, height: 40, fontSize: 20, fontWeight: 'bold',
                                        padding: 10, outline: '2px sold black', marginBottom: 20, border: 'none'
                                        }}
                        />
                </div>

                <button type='submit' style={{marginTop: '20px', marginLeft: 40, padding: '10px 20px', width: '300px', 
                                                outline: '2px solid #2678E4', borderRadius: '10px', fontWeight: 'bold',
                                                backgroundColor: '#2678E4', color: 'white',
                                                marginBottom: '10px', boxShadow: '1px 1px 5px rgba(0,0,0,0.2)'
                                            }}
                        onClick={() => navigate('/HealthInfo')}
                >
                        다음
                </button>
            </div>            
        </>
    );
}

export default Membership;