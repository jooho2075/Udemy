import {useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';

import searchIcon from '../assets/material-symbols_search.png';
import medicineIcon from '../assets/medicine_image.png';

function Main() {
    const navigate = useNavigate();

    const [searchInput, setSearchInput] = useState('');
    const [vitaminNames, setVitaminNames] = useState([]);
    const [medicineNames, setMedicineNames] = useState([]);

    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        const data = JSON.parse(localStorage.getItem(`MedicineData-${formattedDate}`));

        if(data) {
            const vitamins = data.vitamins || [];
            const medicines = data.medicines || [];

            setVitaminNames(vitamins.map(v => v.name));
            setMedicineNames(medicines.map(m => m.name));
        }
    }, []);

    const handleSearchClick = () => {
        if(searchInput.trim()) {
            navigate(`/Search?q=${encodeURIComponent(searchInput.trim())}`);
        }
    };

    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '200px'}}>
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
                <div style={{marginTop: '30px', width: '600px', fontSize: 30, fontWeight: 'bold', textAlign: 'left'}}>
                        한눈에 확인하기
                </div>
                <div style={{width: '600px', marginTop: '20px', marginBottom: '150px', border: '2px solid gray', borderRadius: '6px', textAlign: 'left'}}>
                    <div style={{padding: '10px', fontSize: 20, fontWeight: 'bold'}}>나의 하루</div>
                    
                    <div style={{padding: '10px', fontSize: 20, fontWeight: 'bold'}}>나의 식단</div>

                    <div style={{width: '550px' ,margin: '0 auto', fontSize: 20, fontWeight: 'bold'}}>나의 복약</div>
                    <div style={{width: '550px', margin: '0 auto', marginTop: '5px', border: '1px solid gray', borderRadius: '6px'}}>
                        <div style={{display: 'flex', alignItems: 'center', marginBottom: '4px', marginTop: '5px'}}>
                            <img src={medicineIcon} style={{marginLeft: '5px'}}/>
                            <span style={{fontWeight: 'bold', marginLeft: '5px'}}>영양제</span>
                        </div>
                        <div style={{marginLeft: '5px', marginBottom: '5px', fontWeight: 'bold'}}>{vitaminNames.length > 0 ? vitaminNames.join('') : '아직 계획되지 않았어요...'}</div>
                        
                        <div style={{display: 'flex', alignItems: 'center', marginBottom: '4px'}}>
                            <img src={medicineIcon} style={{marginLeft: '5px'}}/>
                            <span style={{fontWeight: 'bold', marginLeft: '5px'}}>처방약</span>
                        </div>
                        <div style={{marginLeft: '5px', marginBottom: '5px', fontWeight: 'bold'}}>{medicineNames.length > 0 ? medicineNames.join('') : '아직 계획되지 않았어요...'}</div>
                    </div>
                    
                    <div style={{padding: '10px', fontSize: 20, fontWeight: 'bold'}}>나의 운동</div>
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