import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Repassword() {
    const [idPlaceholder, setIdPlaceholder] = useState("사용자 이메일을 입력해주세요");
    const [newPassword, setNewPassword] = useState("");
    const [checkNewPassword, setCheckNewPassword] = useState("");

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,20}$/; // 비밀번호 유효성 검사

    const isPasswordValid = passwordRegex.test(newPassword);
    const isPasswordMatch = newPassword && checkNewPassword && newPassword === checkNewPassword;

    const navigate = useNavigate();

    return (
        <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <div style={{flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#F3F0F6'}}>
                <div style={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 50}}>
                    <p style={{fontSize: 50, fontWeight: 'bold', marginBottom: 20, textAlign: 'center'}}>
                        비밀번호 재설정을 진행합니다
                    </p>
                    <p style={{fontSize: 20, fontWeight: 'bold', color: 'black', marginBottom: 10, textAlign: 'center'}}>
                        아이디를 입력하세요
                    </p>
                    <input 
                        type="email" 
                        placeholder={idPlaceholder} 
                        onFocus={() => setIdPlaceholder("")} 
                        onBlur={() => setIdPlaceholder("사용자 이메일을 입력해주세요")}
                        style={{
                            width: 500, 
                            height: 40,
                            fontSize: 20,
                            fontWeight: 'bold',
                            padding: 10,
                            outline: '2px solid black',
                            marginBottom: 50,
                            border: 'none',
                            borderRadius: 5
                        }}
                    />
                    <p style={{fontSize: 20, fontWeight: 'bold', color: 'black', marginBottom: 10, textAlign: 'center'}}>
                        새로운 비밀번호를 입력하세요
                    </p>
                    <input 
                        type="password" 
                        placeholder="영어 대/소문자, 특수기호 포함 8~20글자" 
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        style={{
                            width: 500, 
                            height: 40,
                            fontSize: 20,
                            fontWeight: 'bold',
                            padding: 10,
                            outline: '2px solid black',
                            marginBottom: 10,
                            border: 'none',
                            borderRadius: 5
                        }}
                    />
                    {!isPasswordValid && newPassword && (
                        <p style={{color: 'red', marginBottom: 10}}>
                            비밀번호는 영어 대/소문자, 숫자, 특수문자를 포함해 8~20자여야 합니다
                        </p>
                    )}
                    <input 
                        type="password" 
                        placeholder="비밀번호 재입력" 
                        value={checkNewPassword}
                        onChange={(e) => setCheckNewPassword(e.target.value)}
                        style={{
                            width: 500, 
                            height: 40,
                            fontSize: 20,
                            fontWeight: 'bold',
                            padding: 10,
                            outline: '2px solid black',
                            marginBottom: 10,
                            border: 'none',
                            borderRadius: 5
                        }}
                    />
                    {checkNewPassword && (
                        <p style={{ 
                            color: isPasswordMatch ? 'blue' : 'red', 
                            marginTop: 10 
                        }}>
                            {isPasswordMatch ? '새로운 비밀번호가 일치합니다' : '입력한 비밀번호가 일치하지 않습니다'}
                        </p>
                    )}
                    <button type='submit' 
                            style={{
                                marginTop: '20px',
                                marginLeft: 40,
                                padding: '10px 20px', 
                                width: '300px', 
                                outline: '2px solid #2678E4',
                                borderRadius: '10px',
                                fontWeight: 'bold',
                                backgroundColor: '#2678E4',
                                color: 'white',
                                marginBottom: '10px',
                                boxShadow: '1px 1px 5px rgba(0,0,0,0.2)'
                            }}
                            onClick={() => navigate('/FinishRepassword')}
            >
                완료
            </button>
                </div>
            </div>
        </div>
    );
}

export default Repassword;
