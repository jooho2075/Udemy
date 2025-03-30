function Main() {
    return(
        <>
            <h1 style={{fontSize: "100px", fontWeight: "bold"}}>캡스톤 디자인</h1>
            <div>
                <p style={{fontSize: "50px"}}>무엇이 궁금하세요?</p>
                <div>
                    <input 
                        type="text" 
                        className='px-4 py-2  border border-black rounded-md w-80 text-center placeholder:text-center focus:text-left' 
                        style={{width: "600px"}} 
                        placeholder='검색하고 싶은 내용 입력해보세요!'
                    />
                </div>
            </div>
        </>
    );
}

export default Main;