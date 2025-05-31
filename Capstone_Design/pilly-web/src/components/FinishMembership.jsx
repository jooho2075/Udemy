import { useNavigate } from "react-router-dom";

function FinishMembership() {
    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            <p style={styles.text}>축하합니다!!</p>
            <p style={styles.text}>회원가입이 끝났습니다~~</p>
            <button type="submit" style={styles.button} onClick={() => navigate('/')}>
                메인
            </button>
        </div>
    );
}

const styles = {
    container: {display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', // 수평 중앙 정렬
                height: '100vh', textAlign: 'center'},
    text: {fontSize: 50, fontWeight: 'bold', marginBottom: 20},
    button: {marginTop: '20px', padding: '10px 20px', width: '300px', outline: '2px solid #2678E4', borderRadius: '10px', 
            fontWeight: 'bold', backgroundColor: '#2678E4', color: 'white', marginBottom: '10px', 
            boxShadow: '1px 1px 5px rgba(0,0,0,0.2)'
        },
};

export default FinishMembership;