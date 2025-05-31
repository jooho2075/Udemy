import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import HorizontalCalendar from "./Calendar";

import medicineIcon from '../assets/medicine_image.png';
import redMedicineIcon from '../assets/streamline_tablet-capsule.png';

function Medicine() {
    const navigate = useNavigate();
    const location = useLocation();

    const [selectedDate, setSelectedDate] = useState(location.state?.selectedDate || null);
    const [vitamins, setVitamins] = useState([]);
    const [medicines, setMedicines] = useState([]);

    useEffect(() => {
        if (selectedDate) {
            const data = JSON.parse(localStorage.getItem(`MedicineData-${selectedDate}`));
            if (data) {
                setVitamins(data.vitamins || []);
                setMedicines(data.medicines || []);
            } else {
                setVitamins([]);
                setMedicines([]);
            }
        }
    }, [selectedDate]);

    const countByTime = (list, timeLabel) =>
        list.filter(item => item.time === timeLabel).reduce((sum, item) => sum + Number(item.count), 0);

    const times = ['아침', '점심', '저녁'];

    const summaryByTime = times.map(time => {
        const vitaminCount = countByTime(vitamins, time);
        const medicineCount = countByTime(medicines, time);
        const total = vitaminCount + medicineCount;
        return {time, count: total};
    });

    const totalByTime = times.map(time => {
        const vitaminTotal = countByTime(vitamins, time);
        const medicineTotal = countByTime(medicines, time);
        return vitaminTotal + medicineTotal;
    });

    const totalVitamins = vitamins.reduce((sum, v) => sum + Number(v.count), 0);
    const totalMedicines = medicines.reduce((sum, m) => sum + Number(m.count), 0);
    const totalCount = totalVitamins + totalMedicines;

    return (
        <div style={styles.wrapper}>
            <div style={styles.container}>
                <div style={styles.content}>
                    <HorizontalCalendar onDateSelect={setSelectedDate} />

                    <div style={styles.textContainer}>
                        {selectedDate && <h2 style={styles.dateText}>{selectedDate}</h2>}

                        <div style={styles.mealRow}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span style={styles.mealText}>
                                    나의 복약
                                    <img src={redMedicineIcon} alt="빨간약 이미지" 
                                        style={{ verticalAlign: 'middle', marginLeft: '5px', display: 'inline-block' }}
                                    />
                                </span>
                            </div>
                            <button style={styles.addButton} onClick={() => navigate('/AddMedicine', { state: { selectedDate } })}>
                                복용약 추가
                            </button>
                        </div>

                        {/* 총 섭취량 및 각 개수 - 가로 정렬 */}
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px', 
                                    marginBottom: '20px', gap: '30px'
                                    }}
                        >
                            {/* 총 섭취량 박스 */}
                            <div style={{border: '2px solid gray', borderRadius: '8px', padding: '10px', backgroundColor: 'white',
                                        width: '150px', height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
                                        alignItems: 'center', textAlign: 'center',
                                    }}
                            >
                                <p style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
                                    총 섭취량
                                </p>
                                <p style={{ fontSize: 20, color: '#2678E4', fontWeight: 'bold' }}>{totalCount}개</p>
                            </div>

                            {/* 영양제 / 처방약 개수 박스 */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <p style={{ margin: 0, fontWeight: 'bold', fontSize: 20 }}>
                                    <span>영양제 : </span>
                                    <span style={{ color: '#2678E4' }}>{totalVitamins}개</span>
                                </p>
                                <p style={{ margin: 0, fontWeight: 'bold', fontSize: 20 }}>
                                    <span>처방약 : </span><span style={{ color: '#F05636' }}>{totalMedicines}개</span>
                                </p>
                            </div>
                        </div>

                        {/* 아침, 점심, 저녁 표시*/}
                        <div style={{ marginTop: '20px', textAlign: 'center' }}>
                            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
                                        gap: '60px', flexWrap: 'nowrap'
                                        }}
                            >
                                {summaryByTime.map((item, idx) => (
                                    <div key={item.time} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '80px' }}>
                                        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{item.time}</p>
                                        <p style={{ color: '#2678E4' }}>{item.count} / {totalByTime[idx]}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 수정된 네모 박스 3개 */}
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '20px', marginTop: '30px', 
                                    flexWrap: 'wrap'
                                    }}
                        >
                            {['아침', '점심', '저녁'].map((timeLabel) => {
                                const vitaminList = vitamins.filter(v => v.time === timeLabel);
                                const medicineList = medicines.filter(m => m.time === timeLabel);

                                return (
                                    <div key={timeLabel} 
                                            style={{backgroundColor: '#F0F3F6', border: '2px solid #F0F3F6', borderRadius: '6px',
                                                    padding: '20px', width: '300px', minHeight: '200px', boxSizing: 'border-box'
                                            }}
                                    >
                                        <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', display: 'flex',
                                                    alignItems: 'center', justifyContent: 'flex-start', gap: '5px'
                                            }}
                                        >
                                            <img src={medicineIcon} alt="복용약 아이콘" />
                                            {timeLabel}
                                        </h3>

                                        <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>영양제</h4>
                                        {vitaminList.length > 0 ? (
                                            vitaminList.map((vitamin, index) => (
                                                <div key={index} style={{ marginBottom: '10px' }}>
                                                    <p><span style={{ fontWeight: 'bold' }}>시간 : </span>{vitamin.time}</p>
                                                    <p><span style={{ fontWeight: 'bold' }}>이름 : </span>{vitamin.name}</p>
                                                    <p style={{ marginBottom: '5px' }}>
                                                        <span style={{ fontWeight: 'bold' }}>
                                                            갯수 : 
                                                        </span>
                                                        {vitamin.count}
                                                    </p>
                                                    <hr />
                                                </div>
                                            ))
                                        ) : (
                                            <p style={{ fontStyle: 'italic', color: '#F05636' }}>기록 없음</p>
                                        )}

                                        <h4 style={{ fontWeight: 'bold', marginTop: '10px', marginBottom: '10px' }}>처방약</h4>
                                        {medicineList.length > 0 ? (
                                            medicineList.map((medicine, index) => (
                                                <div key={index} style={{ marginBottom: '10px' }}>
                                                    <p><span style={{ fontWeight: 'bold' }}>시간 : </span>{medicine.time}</p>
                                                    <p><span style={{ fontWeight: 'bold' }}>이름 : </span>{medicine.name}</p>
                                                    <p><span style={{ fontWeight: 'bold' }}>갯수 : </span>{medicine.count}</p>
                                                    <hr />
                                                </div>
                                            ))
                                        ) : (
                                            <p style={{ fontStyle: 'italic', color: '#F05636' }}>기록 없음</p>
                                        )}
                                    </div>
                                );
                            })}
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
    addButton: {padding: '8px 16px', fontSize: 20, cursor: 'pointer', display: 'flex', alignItems: 'center',
                marginLeft: 20, fontWeight: 'bold', border: '1px solid #2678E4', borderRadius: '8px', color: 'white',
                backgroundColor: '#2678E4'
            }
};

export default Medicine;