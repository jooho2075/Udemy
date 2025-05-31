import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import searchIcon from '../assets/material-symbols_search.png';
import medicineIcon from '../assets/medicine_image.png';
import foodIcon from '../assets/fluent_food-24-regular.png';
import addImage from '../assets/icon-park-outline_muscle.png';  // 운동 아이콘 추가

function Main() {
    const navigate = useNavigate();

    const [searchInput, setSearchInput] = useState('');
    const [vitaminNames, setVitaminNames] = useState([]);
    const [medicineNames, setMedicineNames] = useState([]);
    const [dietData, setDietData] = useState({
        아침: [],
        점심: [],
        저녁: []
    });

    const [exercisesByPart, setExercisesByPart] = useState({
        하체: [],
        어깨: [],
        가슴: [],
        팔: []
    });

    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];

        // 복약 데이터 불러오기
        const data = JSON.parse(localStorage.getItem(`MedicineData-${formattedDate}`));
        if (data) {
            const vitamins = data.vitamins || [];
            const medicines = data.medicines || [];

            setVitaminNames(vitamins.map(v => v.name));
            setMedicineNames(medicines.map(m => m.name));
        }

        // 식단 데이터 불러오기
        const allDiet = JSON.parse(localStorage.getItem("dietList")) || [];
        const todayDiet = allDiet.filter(item => item.date === formattedDate);

        const grouped = { 아침: [], 점심: [], 저녁: [] };
        todayDiet.forEach(item => {
            if (grouped[item.time]) {
                grouped[item.time].push(item.menu);
            }
        });

        setDietData(grouped);

        // 운동 데이터 불러오기 (exercises 키 사용, 날짜 구분 없을 경우 전체 불러옴)
        const savedExercises = JSON.parse(localStorage.getItem('exercises')) || [];
        const groupedExercises = { 하체: [], 어깨: [], 가슴: [], 팔: [] };
        savedExercises.forEach(({ part, name }) => {
            if (groupedExercises[part]) {
                groupedExercises[part].push(name);
            }
        });
        setExercisesByPart(groupedExercises);

    }, []);

    const handleSearchClick = () => {
        const trimmedInput = searchInput.trim();
        if (!trimmedInput) {
            alert("검색어를 입력하세요");
            return;
        }

        navigate(`/Search?q=${encodeURIComponent(trimmedInput)}`);
    };

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '20px' }}>
                <div style={{ ...styles.container, marginTop: '-200px' }}>
                    <div style={styles.box}>
                        <p style={styles.text}>건강 걱정 끝, 바디케어에 오신 것을 환영합니다</p>
                    </div>
                </div>

                <p style={{ fontSize: "50px", fontWeight: 'bold', marginBottom: '10px' }}>무엇이 궁금하세요?</p>

                {/* 검색창 */}
                <div style={{ position: 'relative', width: '600px' }}>
                    <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') handleSearchClick();
                            }}
                            className='px-4 py-2 border border-black rounded-md w-full text-center placeholder:text-center focus:text-left'
                            style={{ paddingRight: '30px' }}
                            placeholder='검색하고 싶은 내용 입력해보세요!'
                    />
                    <img src={searchIcon} alt="검색 버튼" onClick={handleSearchClick}
                        style={{position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)',
                                width: '20px', height: '20px', cursor: 'pointer'
                                }}
                    />
                </div>

                {/* 한눈에 확인하기 */}
                <div style={{ marginTop: '30px', width: '600px', fontSize: 30, fontWeight: 'bold', textAlign: 'left' }}>
                    한눈에 확인하기
                </div>
                <div style={{ width: '600px', marginTop: '20px', marginBottom: '150px', border: '5px solid #d9d9d9', borderRadius: '6px', textAlign: 'left' }}>
                    <div style={{width: '550px', margin: '0 auto', fontSize: 30,
                                fontWeight: 'bold', marginBottom: 25, marginTop: 10, textAlign: 'center'
                                }}
                    >
                        나의 하루
                    </div>

                    {/* 나의 식단 */}
                    <div style={{ width: '550px', margin: '0 auto', fontSize: 20, fontWeight: 'bold', position: 'relative' }}>
                        나의 식단
                        <button style={styles.moveButton} onClick={() => navigate('/Diet')}>
                            이동
                        </button>
                    </div>
                    <div style={{width: '550px', margin: '0 auto', marginBottom: 15, border: '5px solid #d9d9d9',
                                borderRadius: '6px', backgroundColor: '#f0f3f6'
                                }}
                    >
                        {['아침', '점심', '저녁'].map(mealTime => (
                            <div key={mealTime}>
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', marginTop: '5px' }}>
                                    <img src={foodIcon} style={{ marginLeft: '5px' }} alt={`${mealTime} 아이콘`} />
                                    <span style={{ fontWeight: 'bold', marginLeft: '5px' }}>{mealTime}</span>
                                </div>
                                <div style={{ marginLeft: '5px', marginBottom: '5px', fontWeight: 'bold' }}>
                                    {dietData[mealTime] && dietData[mealTime].length > 0
                                        ? dietData[mealTime].join(', ')
                                        : `${mealTime}은 PASS~~`}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 나의 복약 */}
                    <div style={{ width: '550px', margin: '0 auto', fontSize: 20, fontWeight: 'bold', position: 'relative' }}>
                        나의 복약
                        <button
                            style={styles.moveButton} onClick={() => navigate('/Medicine')}
                        >
                            이동
                        </button>
                    </div>
                    <div style={{ width: '550px', margin: '0 auto', marginBottom: 15, border: '5px solid #d9d9d9', 
                                    borderRadius: '6px', backgroundColor: '#f0f3f6'
                                    }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', marginTop: '5px' }}>
                            <img src={medicineIcon} style={{ marginLeft: '5px' }} alt="영양제 아이콘" />
                            <span style={{ fontWeight: 'bold', marginLeft: '5px' }}>영양제</span>
                        </div>
                        <div style={{ marginLeft: '5px', marginBottom: '5px', fontWeight: 'bold' }}>
                            {vitaminNames.length > 0 ? vitaminNames.join(', ') : '아직 계획되지 않았어요...'}
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
                            <img src={medicineIcon} style={{ marginLeft: '5px' }} alt="처방약 아이콘" />
                            <span style={{ fontWeight: 'bold', marginLeft: '5px' }}>처방약</span>
                        </div>
                        <div style={{ marginLeft: '5px', marginBottom: '5px', fontWeight: 'bold' }}>
                            {medicineNames.length > 0 ? medicineNames.join(', ') : '아직 계획되지 않았어요...'}
                        </div>
                    </div>

                    {/* 나의 운동 */}
                    <div style={{ width: '550px', margin: '0 auto', fontSize: 20, fontWeight: 'bold', position: 'relative' }}>
                        나의 운동
                        <button style={styles.moveButton} onClick={() => navigate('/Exercise')}>
                            이동
                        </button>
                    </div>
                    <div style={{ width: '550px', margin: '0 auto', marginBottom: 15, border: '5px solid #d9d9d9',
                                    borderRadius: '6px', backgroundColor: '#f0f3f6'
                                    }}
                    >
                        {['하체', '어깨', '가슴', '팔'].map(part => (
                            <div key={part} style={{ marginBottom: 12 }}>
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4, marginTop: 5 }}>
                                    <img src={addImage} style={{ marginLeft: 5, width: 20, height: 20 }} alt={`${part} 아이콘`} />
                                    <span style={{ fontWeight: 'bold', marginLeft: 5 }}>{part}</span>
                                </div>
                                <div style={{ marginLeft: 5, marginBottom: 5, fontWeight: 'bold' }}>
                                    {exercisesByPart[part].length > 0
                                        ? exercisesByPart[part].join(', ')
                                        : `${part}은 Pass하는 날~~`}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;

const styles = {
    container: {display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px'},
    box: {padding: '90px', border: '2px solid #8300ff', borderRadius: '30px', backgroundColor: '#8300ff',
            width: '100%', textAlign: 'center'
        },
    text: {fontSize: '40px', fontWeight: 'bold', color: 'white', whiteSpace: 'nowrap'},
    moveButton: {position: 'absolute', right: 0, bottom: 0, padding: '5px 10px', fontSize: '14px', fontWeight: 'bold',
                backgroundColor: '#8300ff', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', userSelect: 'none'
            }
};
