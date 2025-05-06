import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../assets/new_logo.png';
import searchIcon from '../assets/material-symbols_search.png';

function Header() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [searchInput, setSearchInput] = useState('');

    const navigate = useNavigate();
    
    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    const onLoginClick = () => {
        navigate('/login');
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if(sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsSidebarVisible(false);
            }
        }

        if(isSidebarVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return() => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSidebarVisible]);

    const logoClick = () => {
        navigate('/');
    };

    const handleNavigation = (path) => {
        navigate(path);
        setIsSidebarVisible(false); // 페이지 이동 후 사이드바 닫는 기능
    };

    const handleSearchClick = () => {
        const trimmedInput = searchInput.trim();

        if(!trimmedInput) {
            alert('검색어를 입력하세요');
            return;
        }
        
        navigate(`/Search?q=${encodeURIComponent(trimmedInput)}`);
    };

    return (
        <>
            <header className='flex items-center justify-center space-x-4 p-2' style={{ backgroundColor: "#D9D9D9", height: 150 }}>
                <button onClick={toggleSidebar} className='text-white bg-gray-800 p-2 rounded-md'>
                    메뉴
                </button>
                <img src={logo} onClick={logoClick} className='h-20 cursor-pointer' />
                <div style={{position: 'relative', width: '400px'}}>
                    <input 
                        type='text'
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        onKeyDown={(e) => {
                            if(e.key == 'Enter') {
                                handleSearchClick();
                            }
                        }}
                        className='w-full px-4 py-2 border border-black rounded-md pr-10 text-center placeholder:text-center focus:text-left' 
                        style={{ paddingRight: '40px' }}
                        placeholder='검색어 입력'
                    />
                    <img 
                        src={searchIcon}
                        alt="검색 버튼"
                        onClick={handleSearchClick}
                        style={{position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', width: '20px', height: '20px'}}     
                    />
                </div>
                <button 
                    className='rounded-md text-white px-4 py-2' 
                    style={{ backgroundColor: "#2678E4" }}
                    onClick={onLoginClick}
                >
                    로그인
                </button>
            </header>

            {isSidebarVisible && (
                <div ref={sidebarRef} className='fixed left-0 top-0 h-200 w-100 bg-gray-800 text-white p-4 rounded-md' style={{ marginLeft: 5, zIndex: 1000 }}>
                    <div className='flex items-center justify-between mb-4'>
                        <img src={logo} className='w-16 h-auto cursor-pointer' onClick={() => handleNavigation('/')} />
                        <button 
                            className='text-white bg-red-600 px-4 py-2 rounded-md'
                            onClick={toggleSidebar}
                        >
                            닫기
                        </button>
                    </div>
                    <div>
                        <p onClick={() => handleNavigation('/')} style={{fontSize: 20}}>홈</p>
                        <p style={{marginBottom: 20}}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
                        
                        <p onClick={() => handleNavigation('/Diet')} style={{fontSize: 20}}>식단</p>
                        <p style={{marginBottom: 20}}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>

                        <p onClick={() => handleNavigation('/Medicine')} style={{fontSize: 20}}>복약</p>
                        <p style={{marginBottom: 20}}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>

                        <p onClick={() => handleNavigation('/Exercise')} style={{fontSize: 20}}>운동</p>
                        <p style={{marginBottom: 20}}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>

                        <p onClick={() => handleNavigation('/BulletinBoard')} style={{fontSize: 20}}>게시판</p>
                        <p style={{marginBottom: 20}}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;