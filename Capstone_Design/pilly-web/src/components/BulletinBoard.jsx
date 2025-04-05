import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function BulletinBoard() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    // 백엔드 부분이 없기 때문에 우선 로컬에 저장
    useEffect(() => {
        const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        setPosts(storedPosts);
    }, []);

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', minHeight: '100vh', textAlign: 'center', padding: '40px', width: '100%', boxSizing: 'border-box' }}>
            <p style={{fontSize: 40, fontWeight: 'bold'}}>게시판</p>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', maxWidth: 800, width: '100%'}}>
                <div style={{flex: 1, textAlign: 'center'}}>
                    <p style={{fontSize: 30, fontWeight: 'bold', margin: 20}}>
                        무엇이든 작성할 수 있습니다~~
                    </p>
                </div>
                <button
                    type='submit'
                    onClick={() => navigate('/WriteBulletinBoard')}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#2678E4',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 10,
                        fontWeight: 'bold'
                    }}
                >
                    글쓰기
                </button>
            </div>

            {/* 글 목록 */}
            <div style={{ width: '100%', maxWidth: 800 }}>
                {posts.map((post, index) => (
                    <div key={index} style={{ padding: 20, marginBottom: 20, border: '1px solid lightgray', borderRadius: 10, textAlign: 'left' }}>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10}}>
                            <h3 style={{ margin: 0, fontSize: 18}}>
                                <span style={{fontSize: 20, fontWeight: 'bold'}}>제목 :</span> {post.title}
                            </h3>
                            <p style={{ margin: 0, fontSize: 18}}>
                                <span style={{fontSize: 20, fontWeight: 'bold'}}>작성자:</span> {post.author}
                            </p>
                            <p style={{ margin: 0}}>
                                <span style={{fontSize: 20, fontWeight: 'bold'}}>날짜:</span> {post.date}</p>
                        </div>
                        <p style={{ margin: 0 }}>
                            <span style={{fontSize: 20, fontWeight: 'bold'}}>내용 :</span> {post.content}
                        </p>
                    </div>
                ))}
                {posts.length === 0 && <p>아직 작성된 글이 없습니다.</p>}
            </div>
        </div>
    );
}

export default BulletinBoard;
