import { useState } from "react";
import { useNavigate } from "react-router-dom";

import addImage from '../assets/ic_baseline-plus.png';

function AddDiet() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState([]);
  const [showSaveButton, setShowSaveButton] = useState(false); // 저장 버튼
  const [showModal, setShowModal] = useState(false); // 모달 보여주기
  const [modalMessage, setModalMessage] = useState(""); // 모달 메시지 전달
  const [isSaved, setIsSaved] = useState(false); // 저장 여부

  const handleAddInput = () => {
    setInputs([...inputs, ""]);
    setIsSaved(false); // input에 내용이 추가되면 저장 여부 상태 추가
    if (!showSaveButton) setShowSaveButton(true);
  };

  const handleChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
    setIsSaved(false); // 입력 변경 시 다시 저장이 필요함
  };

  const handleDeleteInput = (indexToDelete) => {
    const newInputs = inputs.filter((_, index) => index !== indexToDelete);
    setInputs(newInputs);
    setIsSaved(false); // 삭제 시 다시 저장 필요
    if (newInputs.length === 0) setShowSaveButton(false);
  };

  const handleSave = () => {
    const hasEmpty = inputs.some(input => input.trim() === "");
    if (hasEmpty) {
      setModalMessage("저장이 불가합니다 모든 내용을 작성해주세요");
      setShowModal(true);
      return;
    }

    // 저장 성공
    setIsSaved(true);
    setShowModal("내용이 저장되었습니다");
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFinish = () => {
    if(!isSaved) {
        setModalMessage("아직 저장 전입니다...");
        setShowModal(true);
        return;
    }

    navigate('/Diet'); // 경로이동(저장된 경우에만)
  };

  return (
    <div style={{ padding: 40 }}>
      <h1 style={{ fontSize: 40, fontWeight: 'bold', textAlign: 'center' }}>오늘의 식단</h1>
      <div style={{border: '1px solid gray', borderRadius: 6, padding: 20, width: 600, margin: '40px auto', position: 'relative'}}>
        {/* 상단 select + 플러스 버튼 + 완료 버튼 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          {/* select (크기 원상복구) */}
          <select defaultValue=""
                    style={{width: 140, textAlign: 'center', border: '1px solid black', padding: '8px 12px', fontSize: 16, marginRight: 'auto'}}
          >
            <option value="" disabled>-- 선택 --</option>
            <option value="breakfast">아침</option>
            <option value="lunch">점심</option>
            <option value="dinner">저녁</option>
          </select>

          {/* 플러스 + 완료 버튼 수직 정렬 */}
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 10}}>
            <img src={addImage} alt="추가" style={{ width: 30, height: 30, cursor: 'pointer' }} onClick={handleAddInput} />
            <button onClick={handleFinish}
              style={{marginTop: 8, padding: '6px 12px', backgroundColor: "#2678E4", border: '1px solid #2678E4',
                        borderRadius: 6, color: 'white', cursor: 'pointer'
              }}
            >
              완료
            </button>
          </div>
        </div>

        {/* 입력 필드들 */}
        <div style={{ marginTop: 16 }}>
          {inputs.map((value, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
              <input type="text" placeholder="식단 내용을 입력하세요" value={value}
                onChange={(e) => handleChange(index, e.target.value)}
                style={{flex: 1, padding: 8, fontSize: 16, border: '1px solid black', borderRadius: 4, textAlign: 'center'}}
              />
              <button onClick={() => handleDeleteInput(index)}
                        style={{marginLeft: 10, padding: '6px 12px', backgroundColor: "#F05636", border: '1px solid #F05636',
                                borderRadius: 6, color: 'white', cursor: 'pointer'
                        }}
              >
                삭제
              </button>
            </div>
          ))}
        </div>

        {/* 저장 버튼 */}
        {showSaveButton && (
          <div style={{ textAlign: 'center', marginTop: 20 }}>
            <button onClick={handleSave}
                    style={{padding: '10px 20px', backgroundColor: '#2678E4', color: 'white', border: 'none',
                            borderRadius: 6, fontSize: 16, cursor: 'pointer'
                    }}
            >
              저장
            </button>
          </div>
        )}

        {/* 모달창 */}
        {showModal && (
          <div style={{position: 'fixed', top: 20, left: '50%', transform: 'translateX(-50%)', backgroundColor: 'white',
                        border: '1px solid #2678E4', padding: '20px 30px', borderRadius: 8, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                        zIndex: 9999, textAlign: 'center'
          }}>
            <p style={{ marginBottom: 16, fontSize: 16 }}>{modalMessage}</p>
            <button onClick={handleCloseModal}
                    style={{padding: '6px 16px', backgroundColor: '#2678E4', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer'}}
            >
              확인
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddDiet;