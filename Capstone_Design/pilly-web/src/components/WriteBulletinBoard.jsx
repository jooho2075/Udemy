import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function WriteBulletinBoard() {
    const [title, setTitle] = useState(''); // 제목 부분
    const [author, setAuthor] = useState(''); // 작성자 부분
    const [content, setContent] = useState(''); // 내용 부분
    const [selectedFileName, setSelectedFileName] = useState(''); // 파일 첨부

    const maxContentLength = 500; // 내용 최대 글자수
    const textareaRef = useRef(null);

    const navigate = useNavigate();

    // 파일 선택 시 실행되는 함수
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFileName(file.name);
        } else {
            setSelectedFileName('');
        }
    };

    const handleSubmit = () => {
        if(!title || !author || !content) {
            alert('제목, 작성자, 내용을 모두 입력해주세요...');
            return;
        }

        const newPost = {title, author, content, file: selectedFileName, date: new Date().toLocaleDateString()};

        // 기존 글들 불러오기
        const existingPosts = JSON.parse(localStorage.getItem('posts')) || [];

        // 새 글 추가
        const updatedPosts = [newPost, ...existingPosts];

        // localStorage에 저장
        localStorage.setItem('posts', JSON.stringify(updatedPosts));

        alert('제출 완료!');
        navigate('/BulletinBoard', {
            state: {
                title, author
            }
        }); 
    };

    return (
        <>
            <div
                style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center',
                        minHeight: '100vh', padding: '40px', width: '100%', boxSizing: 'border-box'
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px', width: '600px' }}>
                    <input
                        type="text"
                        placeholder="제목"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} // 제목 입력값 저장
                        style={{marginRight: '20px', flex: 1, height: '50px', paddingLeft: '10px', border: '2px solid black', borderRadius: '5px'}}
                    />
                    <input
                        type="text"
                        placeholder="작성자"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)} // 작성자 입력값 저장
                        style={{width: '150px', height: '50px', paddingLeft: '10px', border: '2px solid black', borderRadius: '5px'}}
                    />
                </div>

                <input
                    type="text"
                    placeholder="날짜"
                    style={{marginBottom: '20px', width: '600px', height: '50px', paddingLeft: '10px', border: '2px solid black', borderRadius: '5px'}}
                />

                {/* 내용 입력 textarea + 글자수 표시 */}
                <div style={{ position: 'relative', width: '600px' }}>
                    <textarea
                        ref={textareaRef}
                        placeholder="내용"
                        value={content}
                        maxLength={maxContentLength}
                        onChange={(e) => setContent(e.target.value)}
                        style={{width: '100%', height: '350px', padding: '10px', fontSize: '16px', border: '2px solid black', borderRadius: '5px',
                                resize: 'none', boxSizing: 'border-box', lineHeight: '1.5', overflow: 'auto',
                        }}
                    />
                    <div style={{position: 'absolute', bottom: '10px', right: '10px', fontSize: '12px', color: 'gray', opacity: 0.7, pointerEvents: 'none'}}>
                        {content.length} / {maxContentLength}
                    </div>
                </div>

                {/* 파일 첨부 + 파일명 + 완료 버튼 */}
                <div style={{width: '600px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px'}}>
                    {/* 왼쪽: 파일첨부 + 파일 이름 */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <label
                            style={{display: 'inline-block', padding: '10px 20px', backgroundColor: '#2678E4', color: 'white', borderRadius: '5px', 
                                cursor: 'pointer', textAlign: 'left', marginRight: '15px', height: '40px'
                            }}
                        >
                            파일 첨부
                            <input type="file" style={{ display: 'none' }} onChange={handleFileChange} />
                        </label>
                        {selectedFileName && (
                            <span
                                style={{fontSize: '14px', color: 'black', height: '40px', display: 'flex', alignItems: 'center', borderBottom: '1px solid gray', padding: '0 5px'}}
                            >
                                {selectedFileName}
                            </span>
                        )}
                    </div>

                    {/* 오른쪽: 완료 버튼 */}
                    <button style={{height: '40px', padding: '0 20px', backgroundColor: '#2678E4', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer'}}
                        onClick={handleSubmit}
                    >
                        완료
                    </button>
                </div>
            </div>
        </>
    );
}

export default WriteBulletinBoard;
