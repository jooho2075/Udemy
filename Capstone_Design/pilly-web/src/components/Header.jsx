import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../assets/new_logo.png';

function Header() {
    const [isSidebarVisible, setIsSidebarVisible] = useState();
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    const onLoginClick = () => {
        navigate('/login')
    };

    return(
        <>
            <header className='flex items-center justify-between p-0.5' style={{ backgroundColor: "#D9D9D9"}}>
                <div className='mr-2'>
                    <button onClick={toggleSidebar} className='text-white bg-gray-800 p-2 rounded-md'>
                        메뉴
                    </button>
                </div>
                <div className='flex justify-center flex-1'>
                    <img src={logo} />
                </div>
                <div>
                    <input 
                        type="text" 
                        className='px-4 py-2  border border-black rounded-md w-80 text-center placeholder:text-center focus:text-left' 
                        style={{width: "600px"}} 
                        placeholder='검색어 입력'
                    />
                </div>
                <div className='flex-1 flex justify-end'>
                    <button 
                        className='rounded-md text-white px-4 py-2' 
                        style={{backgroundColor: "#2c2c2c", width: "200px"}}
                        onClick={onLoginClick}
                    >
                        로그인
                    </button>    
                </div>
            </header>

            {isSidebarVisible && (
                <div className='fixed left-0 top-0 h-full w-64 bg-gray-800 text-white p-4' style={{zIndex: 1000}}>
                    <img src={logo} className='w-16 h-auto'/>
                    <div>
                        <p>홈</p>
                        <p>식단</p>
                        <p>복약</p>
                        <p>운동</p>
                        <p>수면</p>
                    </div>
                    <button 
                        className='text-white bg-red-600 px-4 py-2 rounded-md'
                        onClick={toggleSidebar}
                    >
                        닫기
                    </button>
                </div>
            )}
        </>
    );
}

export default Header;