import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import HorizontalCalendar from './Calendar';
import addMealImage from '../assets/fluent_food-24-regular.png';

function Diet() {
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });

  const [groupedDiet, setGroupedDiet] = useState({});

  useEffect(() => {
    if (selectedDate) {
      const stored = JSON.parse(localStorage.getItem("dietList")) || [];
      const filtered = stored.filter(item => item.date === selectedDate);

      const group = filtered.reduce((acc, curr) => {
        if (!acc[curr.time]) acc[curr.time] = [];
        acc[curr.time].push(curr.menu);
        return acc;
      }, {});

      setGroupedDiet(group);
    }
  }, [selectedDate]);

  const handleEdit = (mealTime) => {
    navigate('/AddDiet', {
        state: {
            time: mealTime,
            date: selectedDate
        }
    });
  };

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
                <img
                  src={addMealImage}
                  alt="식단 아이콘"
                  style={{ verticalAlign: 'middle', marginLeft: 5, display: 'inline-block' }}
                />
              </span>
              <button style={styles.addButton} onClick={() => navigate('/AddDiet')}>
                메뉴 추가
              </button>
            </div>

            {/* 식사별 박스: 가로 정렬 */}
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, marginTop: 20 }}>
              {['아침', '점심', '저녁'].map(mealTime => (
                <div key={mealTime} style={styles.mealBox}>
                  {/* 식사명 + 이미지 한 줄 */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                    <span style={{ fontWeight: 'bold', fontSize: 20 }}>{mealTime}</span>
                    <img src={addMealImage} alt="식사 아이콘" style={{ width: 24, height: 24, marginLeft: 8 }}/>
                  </div>

                  {/* 해당 식사의 메뉴 표시 */}
                  {groupedDiet[mealTime]?.length > 0 ? (
                    <ul style={{ paddingLeft: 16 }}>
                      {groupedDiet[mealTime].map((menu, idx) => (
                        <li key={idx} style={{ fontSize: 16 }}>{menu}</li>
                      ))}
                    </ul>
                  ) : (
                    <p style={{ fontSize: 16, color: 'gray', textAlign: 'center' }}>
                      저장된 메뉴가 없습니다...
                    </p>
                  )}

                  {/*수정 버튼*/}
                  <button style={styles.editButton} onClick={() => handleEdit(mealTime)}>
                    수정
                  </button>
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
  wrapper: {padding: 40},
  container: {maxWidth: 900, margin: '0 auto', backgroundColor: '#ffffff', borderRadius: 10, 
            padding: 24, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        },
  content: {display: 'flex', flexDirection: 'column', alignItems: 'center'},
  textContainer: {width: '100%', marginTop: 20},
  dateText: {fontSize: 24, fontWeight: 'bold', textAlign: 'center'},
  mealRow: {display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, marginBottom: 20},
  mealText: {fontSize: 20, fontWeight: 'bold'},
  addButton: {padding: '8px 16px', backgroundColor: '#2678E4', color: 'white', border: 'none', 
            borderRadius: 6, fontSize: 16, cursor: 'pointer'
        },
  mealBox: {flex: 1, position: 'relative', border: '1px solid #ccc', borderRadius: 10, padding: 16, minHeight: 200, 
            backgroundColor: '#f9f9f9', boxShadow: '2px 2px 6px rgba(0,0,0,0.1)'},
  editButton: {position: 'absolute', bottom: 12, right: 12, padding: '6px 12px', fontSize: 14, border: 'none',
                borderRadius: 6, backgroundColor: '#f05636', color: 'white', cursor: 'pointer'}
};

export default Diet;
