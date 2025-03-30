const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '400px'
    },
    box: {
        padding: '90px',
        border: '2px solid #8300ff',
        borderRadius: '30px',
        backgroundColor: '#8300ff',
        width: '100%',
        textAlign: 'center'
    },
    text: {
        fontSize: '40px',
        fontWeight: 'bold',
        color: 'white',
        whiteSpace: 'nowrap'
    }
};

function Main() {
    return(
        <>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'ceter', alignItems: 'center', height: '100vh'}}>
                <div style={styles.container}>
                    <div style={styles.box}>
                        <p style={styles.text}>건강 걱정 끝, 바디케어에 오신 것을 환영합니다</p>
                    </div>
                </div>
                <p style={{fontSize: "50px", fontWeight: 'bold', marginBottom: '10px'}}>무엇이 궁금하세요?</p>
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