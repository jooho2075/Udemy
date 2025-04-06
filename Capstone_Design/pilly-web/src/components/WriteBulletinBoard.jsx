import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function WriteBulletinBoard() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [selectedFileName, setSelectedFileName] = useState('');

    const maxContentLength = 500;
    const textareaRef = useRef(null);

    const navigate = useNavigate();
    const location = useLocation();

    const editingPost = location.state?.post;
    const editingIndex = location.state?.index;

    // 수정 모드라면 기존 데이터 입력란에 채우기
    useEffect(() => {
        if (editingPost) {
            setTitle(editingPost.title);
            setAuthor(editingPost.author);
            setContent(editingPost.content);
            if (editingPost.file) {
                setSelectedFileName(editingPost.file);
            }
        }
    }, [editingPost]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFileName(file.name);
        } else {
            setSelectedFileName('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !author || !content) {
            alert('제목, 작성자, 내용을 모두 입력해주세요...');
            return;
        }

        const newPost = {
            title,
            author,
            content,
            file: selectedFileName,
            date: new Date().toLocaleDateString(),
        };

        const existingPosts = JSON.parse(localStorage.getItem('posts')) || [];
        let updatedPosts;

        if (editingIndex !== undefined) {
            // 수정 모드
            existingPosts[editingIndex] = {
                ...existingPosts[editingIndex],
                ...newPost
            };
            updatedPosts = existingPosts;
        } else {
            // 새 글 작성 모드
            updatedPosts = [newPost, ...existingPosts];
        }

        localStorage.setItem('posts', JSON.stringify(updatedPosts));

        alert(editingIndex !== undefined ? '수정 완료!' : '제출 완료!');
        navigate('/BulletinBoard', {
            state: { title, author }
        });
    };

    return (
        <div style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
            alignItems: 'center', minHeight: '100vh', padding: '40px',
            width: '100%', boxSizing: 'border-box'
        }}>
            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px', width: '600px' }}>
                <input
                    type="text"
                    placeholder="제목"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{
                        marginRight: '20px', flex: 1, height: '50px',
                        paddingLeft: '10px', border: '2px solid black', borderRadius: '5px'
                    }}
                />
                <input
                    type="text"
                    placeholder="작성자"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    style={{
                        width: '150px', height: '50px',
                        paddingLeft: '10px', border: '2px solid black', borderRadius: '5px'
                    }}
                />
            </div>

            <input
                type="text"
                placeholder="날짜"
                value={new Date().toLocaleDateString()}
                readOnly
                style={{
                    marginBottom: '20px', width: '600px', height: '50px',
                    paddingLeft: '10px', border: '2px solid black', borderRadius: '5px'
                }}
            />

            <div style={{ position: 'relative', width: '600px' }}>
                <textarea
                    ref={textareaRef}
                    placeholder="내용"
                    value={content}
                    maxLength={maxContentLength}
                    onChange={(e) => setContent(e.target.value)}
                    style={{
                        width: '100%', height: '350px', padding: '10px', fontSize: '16px',
                        border: '2px solid black', borderRadius: '5px',
                        resize: 'none', boxSizing: 'border-box',
                        lineHeight: '1.5', overflow: 'auto'
                    }}
                />
                <div style={{
                    position: 'absolute', bottom: '10px', right: '10px',
                    fontSize: '12px', color: 'gray', opacity: 0.7, pointerEvents: 'none'
                }}>
                    {content.length} / {maxContentLength}
                </div>
            </div>

            <div style={{
                width: '600px', display: 'flex', alignItems: 'center',
                justifyContent: 'space-between', marginTop: '20px'
            }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <label style={{
                        display: 'inline-block', padding: '10px 20px',
                        backgroundColor: '#2678E4', color: 'white',
                        borderRadius: '5px', cursor: 'pointer', textAlign: 'left',
                        marginRight: '15px', height: '40px'
                    }}>
                        파일 첨부
                        <input type="file" style={{ display: 'none' }} onChange={handleFileChange} />
                    </label>
                    {selectedFileName && (
                        <span style={{
                            fontSize: '14px', color: 'black', height: '40px',
                            display: 'flex', alignItems: 'center', borderBottom: '1px solid gray',
                            padding: '0 5px'
                        }}>
                            {selectedFileName}
                        </span>
                    )}
                </div>

                <button style={{
                    height: '40px', padding: '0 20px',
                    backgroundColor: '#2678E4', color: 'white',
                    border: 'none', borderRadius: '5px', cursor: 'pointer'
                }}
                    onClick={handleSubmit}
                >
                    완료
                </button>
            </div>
        </div>
    );
}

export default WriteBulletinBoard;