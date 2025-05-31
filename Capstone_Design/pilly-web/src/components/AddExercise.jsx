import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import addImage from '../assets/ic_baseline-plus.png';

function AddExercise() {
    const navigate = useNavigate();

    const [exercises, setExercises] = useState([{ part: '', name: '' }]);
    const [saved, setSaved] = useState(false);

    const handleAddExercise = () => {
        setExercises([...exercises, { part: '', name: '' }]);
        setSaved(false);
    };

    const handleRemoveExercise = (index) => {
        const newExercises = exercises.filter((_, i) => i !== index);
        setExercises(newExercises.length === 0 ? [{ part: '', name: '' }] : newExercises);
        setSaved(false);
    };

    const handleChange = (index, field, value) => {
        const updated = [...exercises];
        updated[index][field] = value;
        setExercises(updated);
        setSaved(false);
    };

    const handleSave = () => {
        for (let i = 0; i < exercises.length; i++) {
            if (!exercises[i].part) {
                alert(`운동 부위를 선택해주세요`);
                return;
            }
            if (!exercises[i].name.trim()) {
                alert(`운동 이름을 입력해주세요`);
                return;
            }
        }

        localStorage.setItem('exercises', JSON.stringify(exercises));
        alert('저장 되었습니다.');
        setSaved(true);
    };

    const handleComplete = () => {
        if (!saved) {
            alert('아직 저장 전입니다.');
            return;
        }
        alert('완료! Exercise.jsx 화면으로 이동합니다.');
        navigate('/Exercise');
    };

    return (
        <div style={{ padding: 40 }}>
            <h1 style={{ fontSize: 40, fontWeight: 'bold', textAlign: 'center' }}>오늘의 운동</h1>

        <div style={{border: '1px solid gray', borderRadius: 6, padding: 20, width: 800, margin: '40px auto'}}>
        
            {/* 상단 텍스트 및 버튼 */}
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
                <p style={{ fontSize: 30, fontWeight: 'bold', margin: 0 }}>
                    오늘의 운동을 기록하세요
                </p>
                <div>
                    <button onClick={handleSave}
                            style={{padding: '6px 12px', backgroundColor: '#2678E4', border: '1px solid #2678E4', borderRadius: 6,
                                    color: 'white', cursor: 'pointer', marginRight: 10
                                }}
                    >
                        저장
                    </button>
                    <button onClick={handleComplete}
                            style={{padding: '6px 12px', backgroundColor: '#52c41a', border: '1px solid #52c41a', borderRadius: 6,
                                    color: 'white', cursor: 'pointer'
                                }}
                    >
                        완료
                    </button>
                </div>
            </div>

            {/* 고정된 첫 번째 줄: 운동 항목 0번 + 추가 버튼 */}
            <div style={{display: 'flex', alignItems: 'center', marginBottom: 10, gap: 10, width: '100%'}}>
                <label style={{ fontSize: 20, fontWeight: 'bold' }}>운동 부위:</label>
                <select value={exercises[0].part}
                        onChange={(e) => handleChange(0, 'part', e.target.value)}
                        style={{border: '1px solid gray', backgroundColor: '#f0f3f6', borderRadius: 6, fontSize: 15, 
                                textAlign: 'center', width: 100
                            }}
                >
                    <option value="">선택</option>
                    <option value="하체">하체</option>
                    <option value="어깨">어깨</option>
                    <option value="가슴">가슴</option>
                    <option value="팔">팔</option>
                </select>

                <label style={{ fontSize: 20, fontWeight: 'bold' }}>운동 이름:</label>
                <input type="text" value={exercises[0].name} onChange={(e) => handleChange(0, 'name', e.target.value)}
                        style={{border: '1px solid black', borderRadius: 6, fontSize: 15, textAlign: 'center', width: 200}}
                        placeholder="운동이름을 입력하세요"
                />

                {/* 삭제 버튼 */}
                <button onClick={() => handleRemoveExercise(0)}
                        style={{backgroundColor: '#ff4d4f', border: 'none', color: 'white', borderRadius: 6,
                                padding: '4px 8px', cursor: 'pointer', fontWeight: 'bold'
                            }}
                >
                    삭제
                </button>

                {/* + 버튼 */}
                <img src={addImage} alt="추가" style={{ width: 30, height: 30, cursor: 'pointer' }} onClick={handleAddExercise}/>
            </div>

            {/* 나머지 운동 항목들 */}
            {exercises.slice(1).map((exercise, idx) => (
                <div key={idx + 1}
                        style={{display: 'flex', alignItems: 'center', marginBottom: 10, gap: 10, width: '100%'}}
                >
                    <label style={{ fontSize: 20, fontWeight: 'bold' }}>운동 부위:</label>
                    <select value={exercise.part} onChange={(e) => handleChange(idx + 1, 'part', e.target.value)}
                            style={{border: '1px solid gray', backgroundColor: '#f0f3f6', borderRadius: 6,
                                    fontSize: 15, textAlign: 'center', width: 100
                                }}
                    >
                        <option value="">선택</option>
                        <option value="하체">하체</option>
                        <option value="어깨">어깨</option>
                        <option value="가슴">가슴</option>
                        <option value="팔">팔</option>
                    </select>

                    <label style={{ fontSize: 20, fontWeight: 'bold' }}>운동 이름:</label>
                    <input type="text" value={exercise.name} onChange={(e) => handleChange(idx + 1, 'name', e.target.value)}
                            style={{border: '1px solid black', borderRadius: 6, fontSize: 15, textAlign: 'center', width: 200}}
                            placeholder="운동이름을 입력하세요"
                    />

                    <button onClick={() => handleRemoveExercise(idx + 1)}
                            style={{backgroundColor: '#ff4d4f', border: 'none', color: 'white', borderRadius: 6,
                                    padding: '4px 8px', cursor: 'pointer', fontWeight: 'bold'
                                }}
                    >
                        삭제
                    </button>
                </div>
            ))}
        </div>
    </div>
    );
}

export default AddExercise;
