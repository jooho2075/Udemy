import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HealthInfo() {
    const [year, setYear] = useState();
    const [month, setMonth] = useState();
    const [day, setDay] = useState();
    const [gender, setGender] = useState();

    const navigate = useNavigate();

    return(
        <>
            <div>
                <p style={{fontSize: 50, fontWeight: 'bold', marginLeft: 40, marginBottom: 20}}>신체정보를 알려주세요</p>
            </div>

            {/* 생년월일 */}
            <div style={{display: 'flex', gap: 10}}>
                <span style={{marginLeft: 40, fontSize: 20, fontWeight: 'bold', color: 'black'}}>생년월일</span>
                <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    style={{padding: 5, fontSize: 20}}
                >
                    {Array.from({length: 201}, (_, i) => 1900 + i).map((y) => (
                        <option key={y} value={y}>
                            {y}
                        </option>
                    ))}
                </select>
                <span style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>년</span>

                <select
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    style={{padding: 5, fontSize: 20}}
                >
                    {Array.from({length: 12}, (_, i) => 1 + i).map((m) => (
                        <option key={m} value={m}>
                            {m}
                        </option>
                    ))}
                </select>

                <span style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>월</span>
                <select
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    style={{padding: 5, fontSize: 20}}
                >
                    {Array.from({length: 31}, (_, i) => 1 + i).map((d) => (
                        <option key={d} value={d}>
                            {d}
                        </option>
                    ))}
                </select>
                <span style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>일</span>
            </div>

            {/* 성별 */}
            <div>
                <span style={{marginLeft: 40, fontSize: 20, fontWeight: 'bold', color: 'black'}}>성별</span>
                <select 
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    style={{marginLeft: 55, fontSize: 20}}
                >
                    <option value="select">성별을 선택하세요</option>
                    <option value="male">남</option>
                    <option value="female">여</option>
                </select>
            </div>

            {/* 키 */}
            <div>
                <span style={{marginLeft: 40, fontSize: 20, fontWeight: 'bold', color: 'black'}}>키</span>
                <input type="text" style={{marginLeft: 85}}/><span style={{fontSize: 20, fontWeight: 'bold'}}>cm</span>
            </div>

            {/* 몸무게 */}
            <div>
                <span style={{marginLeft: 40, fontSize: 20, fontWeight: 'bold', color: 'black'}}>몸무게</span>
                <input type="text" style={{marginLeft: 45}}/><span style={{fontSize: 20, fontWeight: 'bold'}}>kg</span>
            </div>

            <button type='submit' 
                            style={{
                                marginTop: '20px',
                                marginLeft: 40,
                                padding: '10px 20px', 
                                width: '300px', 
                                outline: '2px solid #F05636',
                                borderRadius: '10px',
                                fontWeight: 'bold',
                                backgroundColor: '#F05636',
                                color: 'white',
                                marginBottom: '10px',
                                boxShadow: '1px 1px 5px rgba(0,0,0,0.2)'
                            }}
                            onClick={() => navigate('/Membership')}
            >
                이전
            </button>
            <button type='submit' 
                            style={{
                                marginTop: '20px',
                                marginLeft: 40,
                                padding: '10px 20px', 
                                width: '300px', 
                                outline: '2px solid #2678E4',
                                borderRadius: '10px',
                                fontWeight: 'bold',
                                backgroundColor: '#2678E4',
                                color: 'white',
                                marginBottom: '10px',
                                boxShadow: '1px 1px 5px rgba(0,0,0,0.2)'
                            }}
                            onClick={() => navigate('')}
            >
                다음
            </button>
        </>
    );
}

export default HealthInfo;