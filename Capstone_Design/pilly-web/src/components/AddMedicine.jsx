import { useLocation, useNavigate } from "react-router-dom";
import { useState } from 'react';
import addImage from '../assets/ic_baseline-plus.png';

function AddMedicine() {
    const location = useLocation();
    const selectedDate = location.state?.selectedDate;

    const navigate = useNavigate();

    const [vitaminForms, setVitaminForms] = useState([]);
    const [medicineForms, setMedicineForms] = useState([]);
    const [showMedicineDropDown, setShowMedicineDropDown] = useState(false);

    const handleAddVitaminForm = () => {
        setVitaminForms(prev => [...prev, { time: null, name: '', count: '', saved: false }]);
        setShowMedicineDropDown(false);
    };

    const handleAddMedicineForm = () => {
        setMedicineForms(prev => [...prev, { time: null, name: '', count: '', saved: false }]);
    };

    const handleVitaminInputChange = (index, field, value) => {
        const updated = [...vitaminForms];
        updated[index][field] = value;
        setVitaminForms(updated);
    };

    const handleMedicineInputChange = (index, field, value) => {
        const updated = [...medicineForms];
        updated[index][field] = value;
        setMedicineForms(updated);
    };

    const handleSaveVitamin = (index) => {
        const updated = [...vitaminForms];
        updated[index].saved = true;
        setVitaminForms(updated);
    };

    const handleSaveMedicine = (index) => {
        const updated = [...medicineForms];
        updated[index].saved = true;
        setMedicineForms(updated);
    };

    const handleVitaminTimeSelect = (index, time) => {
        const updated = [...vitaminForms];
        updated[index].time = time;
        setVitaminForms(updated);
    };

    const handleMedicineTimeSelect = (index, time) => {
        const updated = [...medicineForms];
        updated[index].time = time;
        setMedicineForms(updated);
    };

    return (
        <div style={{ padding: 40 }}>
            <h1 style={{ fontSize: 40, fontWeight: 'bold', textAlign: 'center' }}>나의 복약</h1>
            {selectedDate && <p style={{ textAlign: 'center' }}>{selectedDate}</p>}

            {/* 영양제 섹션 */}
            <div style={{
                border: '1px solid gray',
                borderRadius: 6,
                padding: 20,
                width: 600,
                margin: '40px auto',
                position: 'relative'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start'
                }}>
                    <h2 style={{ fontWeight: 'bold', margin: 0 }}>영양제</h2>
                    <img
                        src={addImage}
                        alt="추가"
                        onClick={handleAddVitaminForm}
                        style={{ width: 30, height: 30, cursor: 'pointer' }}
                    />
                </div>

                {vitaminForms.map((form, index) => (
                    <div key={index} style={{
                        marginTop: 20,
                        borderTop: '1px solid #ddd',
                        paddingTop: 10
                    }}>
                        {form.saved ? (
                            <div>
                                <p style={{ fontWeight: 'bold' }}>시간대: {form.time}</p>
                                <p style={{ fontWeight: 'bold' }}>이름: {form.name}</p>
                                <p style={{ fontWeight: 'bold' }}>개수: {form.count}</p>
                            </div>
                        ) : (
                            <>
                                <select
                                    value={form.time || ''}
                                    onChange={e => handleVitaminTimeSelect(index, e.target.value)}
                                    style={{
                                        marginBottom: 10,
                                        padding: 6,
                                        width: 200,
                                        borderRadius: 6,
                                        border: '1px solid gray'
                                    }}
                                >
                                    <option value="" disabled>시간대 선택</option>
                                    {["아침", "점심", "저녁"].map(t => (
                                        <option key={t} value={t}>{t}</option>
                                    ))}
                                </select>
                                <div style={{ marginTop: 8 }}>
                                    <input
                                        type="text"
                                        placeholder="영양제 이름"
                                        value={form.name}
                                        onChange={e => handleVitaminInputChange(index, 'name', e.target.value)}
                                        style={{
                                            marginBottom: 8,
                                            width: 200,
                                            padding: 4,
                                            borderRadius: 6,
                                            border: '1px solid gray',
                                            display: 'block'
                                        }}
                                    />
                                    <input
                                        type="number"
                                        placeholder="개수"
                                        value={form.count}
                                        onChange={e => handleVitaminInputChange(index, 'count', e.target.value)}
                                        style={{
                                            marginBottom: 8,
                                            width: 200,
                                            padding: 4,
                                            borderRadius: 6,
                                            border: '1px solid gray',
                                            display: 'block'
                                        }}
                                    />
                                    <button
                                        onClick={() => handleSaveVitamin(index)}
                                        disabled={!form.time || !form.name.trim() || !form.count}
                                        style={{
                                            marginTop: 8,
                                            padding: '6px 12px',
                                            backgroundColor: (!form.time || !form.name.trim() || !form.count) ? 'gray' : '#2678E4',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: 6,
                                            cursor: (!form.time || !form.name.trim() || !form.count) ? 'not-allowed' : 'pointer'
                                        }}
                                    >
                                        저장
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>

            {/* 처방약 섹션 + 버튼을 감싸는 래퍼 */}
            <div style={{
                position: 'relative',
                width: 600,
                margin: '40px auto'
            }}>
                {/* 처방약 박스 */}
                <div style={{
                    border: '1px solid gray',
                    borderRadius: 6,
                    padding: 20,
                    position: 'relative',
                    
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start'
                    }}>
                        <h2 style={{ fontWeight: 'bold', margin: 0 }}>처방약</h2>
                        <img
                            src={addImage}
                            alt="추가"
                            onClick={handleAddMedicineForm}
                            style={{ width: 30, height: 30, cursor: 'pointer' }}
                        />
                    </div>

                    {medicineForms.map((form, index) => (
                        <div key={index} style={{
                            marginTop: 20,
                            borderTop: '1px solid #ddd',
                            paddingTop: 10
                        }}>
                            {form.saved ? (
                                <div>
                                    <p style={{ fontWeight: 'bold' }}>시간대: {form.time}</p>
                                    <p style={{ fontWeight: 'bold' }}>이름: {form.name}</p>
                                    <p style={{ fontWeight: 'bold' }}>개수: {form.count}</p>
                                </div>
                            ) : (
                                <>
                                    <select
                                        value={form.time || ''}
                                        onChange={e => handleMedicineTimeSelect(index, e.target.value)}
                                        style={{
                                            marginBottom: 10,
                                            padding: 6,
                                            width: 200,
                                            borderRadius: 6,
                                            border: '1px solid gray'
                                        }}
                                    >
                                        <option value="" disabled>시간대 선택</option>
                                        {["아침", "점심", "저녁"].map(t => (
                                            <option key={t} value={t}>{t}</option>
                                        ))}
                                    </select>
                                    <div style={{ marginTop: 8 }}>
                                        <input
                                            type="text"
                                            placeholder="처방약 이름"
                                            value={form.name}
                                            onChange={e => handleMedicineInputChange(index, 'name', e.target.value)}
                                            style={{
                                                marginBottom: 8,
                                                width: 200,
                                                padding: 4,
                                                borderRadius: 6,
                                                border: '1px solid gray',
                                                display: 'block'
                                            }}
                                        />
                                        <input
                                            type="number"
                                            placeholder="개수"
                                            value={form.count}
                                            onChange={e => handleMedicineInputChange(index, 'count', e.target.value)}
                                            style={{
                                                marginBottom: 8,
                                                width: 200,
                                                padding: 4,
                                                borderRadius: 6,
                                                border: '1px solid gray',
                                                display: 'block'
                                            }}
                                        />
                                        <button
                                            onClick={() => handleSaveMedicine(index)}
                                            disabled={!form.time || !form.name.trim() || !form.count}
                                            style={{
                                                marginTop: 8,
                                                padding: '6px 12px',
                                                backgroundColor: (!form.time || !form.name.trim() || !form.count) ? 'gray' : '#2678E4',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: 6,
                                                cursor: (!form.time || !form.name.trim() || !form.count) ? 'not-allowed' : 'pointer'
                                            }}
                                        >
                                            저장
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                {/* 기록하기 버튼 - 처방약 우측 하단 바깥에 위치 */}
                <button
                    onClick={() => navigate('/Medicine')}
                    style={{
                        position: 'absolute',
                        right: -120,
                        bottom: 20,
                        padding: '10px 20px',
                        backgroundColor: '#2678E4',
                        color: 'white',
                        border: 'none',
                        borderRadius: 6,
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}
                >
                    기록하기
                </button>
            </div>
        </div>
    );
}

const styles = {
    wrapper: { display: 'flex', flexDirection: 'column', minHeight: '100vh', padding: '30px' },
    titleRow: {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: 40, 
        flexWrap: 'wrap', 
        minHeight: 120
    },
    container: { flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#F3F0F6' },
    content: { flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: 50 },
    textContainer: { display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 20 }, 
    dateText: { fontSize: 40, fontWeight: 'bold', color: 'black' },
    recordButton: {padding: '10px 20px', fontSize: 18, cursor: 'pointer', borderRadius: '6px',
        border: '1px solid #2678E4', backgroundColor: '#2678E4', color: 'white'
    },
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

export default AddMedicine;