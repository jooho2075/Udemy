import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import HorizontalCalendar from './Calendar';

import addMealImage from '../assets/fluent_food-24-regular.png';

function Diet() {
    const navigate = useNavigate();

    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div style={styles.wrapper}>
            <div style={styles.container}>
                <div style={styles.content}>
                    <HorizontalCalendar onDateSelect={setSelectedDate} />
                    <div style={styles.textContainer}>
                        {selectedDate && <h2 style={styles.dateText}>{selectedDate}</h2>}
                        <div style={styles.mealRow}>
                            <span style={styles.mealText}>
                                오늘의 식단
                                <img src={addMealImage} alt="식단 이미지" style={{ verticalAlign: 'middle', marginLeft: '5px', display: 'inline-block' }}/>
                            </span>
                            <button 
                                style={styles.addButton}
                                onClick={() => navigate('/AddDiet')}
                            >
                                메뉴 추가
                            </button>
                        </div>

                        <div>
                            이곳에 내용이 들어갈 예정
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    wrapper: { display: 'flex', flexDirection: 'column', minHeight: '100vh' },
    container: { flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#F3F0F6' },
    content: { flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: 50 },
    textContainer: { display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 20 }, 
    dateText: { fontSize: 40, fontWeight: 'bold', color: 'black' },
    mealRow: { display: 'flex', alignItems: 'center', gap: 10, marginTop: 10 },
    mealText: { marginTop: 10, marginRight: 20, fontSize: 24, fontWeight: 'bold', color: '#333' },
    addButton: { 
        padding: '8px 16px', 
        fontSize: 20, 
        cursor: 'pointer', 
        display: 'flex', 
        alignItems: 'center',
        marginLeft: 20,
        fontWeight: 'bold',
        border: '1px solid #2678E4',
        borderRadius: '8px',
        color: 'white',
        backgroundColor: '#2678E4'
    }
};

export default Diet;
