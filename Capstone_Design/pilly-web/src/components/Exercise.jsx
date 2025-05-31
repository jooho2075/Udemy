import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import HorizontalCalendar from './Calendar';
import addImage from '../assets/icon-park-outline_muscle.png';

function Exercise() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [exercisesByPart, setExercisesByPart] = useState({
        하체: [],
        어깨: [],
        가슴: [],
        팔: []
    });

    const navigate = useNavigate();

    useEffect(() => {
        const savedExercises = JSON.parse(localStorage.getItem('exercises')) || [];

        const grouped = { 하체: [], 어깨: [], 가슴: [], 팔: [] };
        savedExercises.forEach(({ part, name }) => {
            if (grouped[part]) {
                grouped[part].push(name);
            }
        });

        setExercisesByPart(grouped);
    }, []);

    return (
        <div style={styles.wrapper}>
            <div style={styles.container}>
                <div style={styles.content}>
                    <HorizontalCalendar onDateSelect={setSelectedDate} />
                    <div style={styles.textContainer}>
                        {selectedDate && <h2 style={styles.dateText}>{selectedDate}</h2>}
                        <div style={styles.mealRow}>
                            <span style={styles.mealText}>오늘의 운동</span>
                            <button
                                style={styles.addButton}
                                onClick={() => navigate('/AddExercise')}
                            >
                                운동 추가
                            </button>
                        </div>

                        <div style={styles.exerciseBoxes}>
                            {['하체', '어깨', '가슴', '팔'].map((part) => (
                                <div key={part} style={styles.exerciseBox}>
                                    <div style={styles.boxContent}>
                                        <img src={addImage} style={styles.boxImage} alt={part} />
                                        <span style={styles.boxText}>{part}</span>
                                    </div>
                                    <div style={styles.exerciseList}>
                                        {exercisesByPart[part].length > 0 ? (
                                            exercisesByPart[part].map((name, idx) => (
                                                <div key={idx} style={styles.exerciseItem}>
                                                    - {name}
                                                </div>
                                            ))
                                        ) : (
                                            <div style={styles.exerciseItem}>운동 없음</div>
                                        )}
                                    </div>
                                </div>
                            ))}
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
    addButton: {padding: '8px 16px', fontSize: 20, cursor: 'pointer', display: 'flex', alignItems: 'center', marginLeft: 20,
                fontWeight: 'bold', border: '1px solid #2678E4', borderRadius: '8px', color: 'white', backgroundColor: '#2678E4'
            },
    exerciseBoxes: {display: 'flex', flexDirection: 'row', gap: '20px', marginTop: 20, justifyContent: 'center', flexWrap: 'nowrap'},
    exerciseBox: {width: 300, height: 300, backgroundColor: '#FFFFFF', border: '2px solid #ccc', borderRadius: 10,
                    display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 20,
                    boxSizing: 'border-box', boxShadow: '2px 2px 6px rgba(0,0,0,0.1)'
                },
    boxContent: {display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 10},
    boxImage: {width: 30, height: 30, objectFit: 'contain'},
    boxText: {fontSize: 20, fontWeight: 'bold', color: '#333'},
    exerciseList: {display: 'flex', flexDirection: 'column', gap: 5, marginTop: 5},
    exerciseItem: {fontSize: 16, color: '#333'},
};

export default Exercise;