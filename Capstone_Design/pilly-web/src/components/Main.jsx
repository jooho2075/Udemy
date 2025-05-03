import {useNavigate} from 'react-router-dom';
import { useState } from 'react';

import searchIcon from '../assets/material-symbols_search.png';

function Main() {
    const navigate = useNavigate();

    const [searchInput, setSearchInput] = useState('');

    const handleSearchClick = () => {
        if(searchInput.trim()) {
            navigate(`/Search?q=${encodeURIComponent(searchInput.trim())}`);
        }
    };

    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <div style={{...styles.container, marginTop: '-200px'}}>
                    <div style={styles.box}>
                        <p style={styles.text}>건강 걱정 끝, 바디케어에 오신 것을 환영합니다</p>
                    </div>
                </div>
                <p style={{fontSize: "50px", fontWeight: 'bold', marginBottom: '10px'}}>무엇이 궁금하세요?</p>
                <div style={{position: 'relative', width: '600px'}}>
                    <input 
                        type="text"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        className='px-4 py-2 border border-black rounded-md w-full text-center placeholder:text-center focus:text-left' 
                        style={{paddingRight: '30px'}}  // 오른쪽 여백을 이미지 크기만큼 줍니다.
                        placeholder='검색하고 싶은 내용 입력해보세요!'
                    />
                    <img 
                        src={searchIcon} 
                        alt="검색 버튼"
                        onClick={handleSearchClick}
                        style={{
                            position: 'absolute', 
                            right: '10px', 
                            top: '50%', 
                            transform: 'translateY(-50%)', 
                            width: '20px', 
                            height: '20px'
                        }}
                    />
                </div>
            </div>
        </>
    );
}

export default Main;

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '400px',
    },
    box: {
        padding: '90px',
        border: '2px solid #8300ff',
        borderRadius: '30px',
        backgroundColor: '#8300ff',
        width: '100%',
        textAlign: 'center'
    },
    text: {
        fontSize: '40px',
        fontWeight: 'bold',
        color: 'white',
        whiteSpace: 'nowrap'
    }
};