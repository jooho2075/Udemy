import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function BulletinBoard() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;

    useEffect(() => {
        const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        setPosts(storedPosts);
    }, []);

    const handleDelete = (indexToDelete) => {
        const updatedPosts = posts.filter((_, index) => index !== indexToDelete);
        setPosts(updatedPosts);
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
    };

    const handleEdit = (index) => {
        navigate('/WriteBulletinBoard', {
            state: {
                post: posts[index],
                index: index
            }
        });
    };

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const totalPages = Math.ceil(posts.length / postsPerPage);

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
                    alignItems: 'center', minHeight: '100vh', textAlign: 'center', padding: '40px', width: '100%', boxSizing: 'border-box'
                }}
        >
            <p style={{ fontSize: 40, fontWeight: 'bold' }}>게시판</p>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',
                        justifyContent: 'space-between', maxWidth: 800, width: '100%'
                        }}
            >
                <div style={{ flex: 1, textAlign: 'center' }}>
                    <p style={{ fontSize: 30, fontWeight: 'bold', margin: 20 }}>
                        무엇이든 작성할 수 있습니다~~
                    </p>
                </div>
                <button type='submit' onClick={() => navigate('/WriteBulletinBoard')}
                        style={{padding: '10px 20px', backgroundColor: '#2678E4', color: '#fff',
                                border: 'none', borderRadius: 10, fontWeight: 'bold'
                                }}
                >
                    글쓰기
                </button>
            </div>

            {/* 글 목록 */}
            <div style={{ width: '100%', maxWidth: 800 }}>
                {currentPosts.map((post, idx) => {
                    const actualIndex = indexOfFirstPost + idx;
                    return (
                        <div key={actualIndex} style={{padding: 20, marginBottom: 20, border: '1px solid lightgray',
                                                        borderRadius: 10, textAlign: 'left'
                                                    }}
                        >
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10}}>
                                <h3 style={{ margin: 0, fontSize: 18 }}>
                                    <span style={{ fontSize: 20, fontWeight: 'bold' }}>제목 :</span> {post.title}
                                </h3>
                                <p style={{ margin: 0, fontSize: 18 }}>
                                    <span style={{ fontSize: 20, fontWeight: 'bold' }}>작성자:</span> {post.author}
                                </p>
                                <p style={{ margin: 0 }}>
                                    <span style={{ fontSize: 20, fontWeight: 'bold' }}>날짜:</span> {post.date}
                                </p>
                            </div>
                            <p style={{ margin: 0 }}>
                                <span style={{ fontSize: 20, fontWeight: 'bold' }}>내용 :</span> {post.content}
                            </p>

                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
                                <button onClick={() => handleEdit(actualIndex)}
                                    style={{marginRight: 10, padding: '6px 12px', backgroundColor: '#2678E4', color: 'white',
                                            border: 'none', borderRadius: 5
                                        }}
                                >
                                    수정
                                </button>
                                <button onClick={() => handleDelete(actualIndex)}
                                    style={{padding: '6px 12px', backgroundColor: '#F05636',
                                            color: 'white', border: 'none', borderRadius: 5
                                            }}
                                >
                                    삭제
                                </button>
                            </div>
                        </div>
                    )
                })}
                {posts.length === 0 && <p>아직 작성된 글이 없습니다.</p>}

                {/* 페이지네이션 */}
                {posts.length > postsPerPage && (
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                        <button onClick={goToPreviousPage} disabled={currentPage === 1}
                            style={{padding: '8px 12px', marginRight: '10px', backgroundColor: currentPage === 1 ? '#ccc' : '#2678E4',
                                    color: '#fff', border: 'none', borderRadius: 5
                                }}
                        >
                            이전
                        </button>

                        {[...Array(totalPages)].map((_, index) => (
                            <button key={index + 1} onClick={() => goToPage(index + 1)}
                                style={{padding: '8px 12px', margin: '0 5px',
                                        backgroundColor: currentPage === index + 1 ? '#2678E4' : '#f0f0f0',
                                        color: currentPage === index + 1 ? '#fff' : '#000',
                                        border: 'none', borderRadius: 5, fontWeight: 'bold'
                                    }}
                            >
                                {index + 1}
                            </button>
                        ))}

                        <button onClick={goToNextPage} disabled={currentPage === totalPages}
                            style={{padding: '8px 12px', marginLeft: '10px',
                                    backgroundColor: currentPage === totalPages ? '#ccc' : '#2678E4',
                                    color: '#fff', border: 'none', borderRadius: 5
                                    }}
                        >
                            다음
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BulletinBoard;