import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Needs() {
    const [buttonSelected, setButtonSelelcted] = useState(null);

    const navigate = useNavigate();

    const handleButtonClick = (index) => {
        setButtonSelelcted(index);
    };

    const buttonStyles = (index) => ({
        width: 500, 
        height: 40, 
        fontSize: 20, 
        fontWeight: 'bold',
        outline: '2px solid', 
        marginBottom: 30, 
        border: 'none',
        borderRadius: '5px',
        backgroundColor: buttonSelected === index ? "gray" : "#F0F3F6",
        borderColor: buttonSelected === index ? "gray" : "#F0F3F6",
        color: buttonSelected === index ? "black" : "#2678E4"
    });

    return(
        <>
            <div>
                <p style={{fontSize: 50, fontWeight: 'bold', marginLeft: 40, marginBottom: 20}}>
                    가장 필요한 서비스가 무엇인가요?
                </p>
                <div style={{marginLeft: 40}}>
                    <button style={buttonStyles(0)} onClick={() => handleButtonClick(0)}>
                        수 면 관 리
                    </button>
                </div>
                <div style={{marginLeft: 40}}>
                    <button style={buttonStyles(1)} onClick={() => handleButtonClick(1)}>
                        운 동 관 리
                    </button>
                </div>
                <div style={{marginLeft: 40}}>
                    <button style={buttonStyles(2)} onClick={() => handleButtonClick(2)}>
                        식 단 관 리
                    </button>
                </div>
                <div style={{marginLeft: 40}}>
                    <button style={buttonStyles(3)} onClick={() => handleButtonClick(3)}>
                        수면 관리
                    </button>
                </div>
                <button type='submit' style={{marginTop: '20px', marginLeft: 40, padding: '10px 20px', width: '300px', 
                                            outline: '2px solid #F05636', borderRadius: '10px',
                                            fontWeight: 'bold', backgroundColor: '#F05636', color: 'white',
                                            marginBottom: '10px', boxShadow: '1px 1px 5px rgba(0,0,0,0.2)'
                                        }}
                        onClick={() => navigate('/HealthInfo')}
                >
                    이전
                </button>
                <button type='submit' 
                        style={{marginTop: '20px', marginLeft: 40, padding: '10px 20px', width: '300px', 
                                outline: '2px solid #2678E4', borderRadius: '10px', fontWeight: 'bold',
                                backgroundColor: '#2678E4', color: 'white',
                                marginBottom: '10px', boxShadow: '1px 1px 5px rgba(0,0,0,0.2)'
                            }}
                        onClick={() => navigate('/FinishMembership')}
                >
                    다음
                </button>
            </div>
        </>
    );
}

export default Needs;