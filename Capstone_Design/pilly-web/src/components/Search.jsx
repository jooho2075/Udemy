import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const API_KEY = 'AIzaSyCLvOnLthve3nFw1CcPMz2HvPJf6AjsQM4';
const SEARCH_ENGINE_ID = '87718dcf8736842bc';

function Search() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('q');

    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // 검색어가 없다면 API 호출하지 않음
        if(!searchQuery || !searchQuery.trim()) {
            return;
        }

        const fetchResults = async () => {
            setLoading(true);
            setError(null); // 에러 초기화화

            try {
                const response = await fetch(
                    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${encodeURIComponent(searchQuery)}`
                );

                const data = await response.json();

                if(data.error) {
                    throw new Error(data.error.message); // 에러가 있으면 예외 처리
                }

                setResults(data.items || []); // 검색 결과 처리
            } catch(err) {
                setError(err.message || '알 수 없는 오류 발생'); // 에러 처리
            } finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, [searchQuery]);

    return(
        <div style={{padding: '2rem'}}>
            <h2 style={{fontSize: 40, fontWeight: 'bold', marginBottom: '50px'}}>{searchQuery ? `${searchQuery}에 대한 검색 결과` : '검색어를 입력하세요'}</h2>
            
            {loading ? (
                <p style={{fontSize: 40, fontWeight: 'bold'}}>로딩 중...</p>
            ) : error ? (
                <p style={{fontSize: 40, fontWeight: 'bold'}}>에러 발생 : {error}</p> // 에러 메시지 출력
            ) : results.length === 0 ? (
                <p style={{fontSize: 40, fontWeight: 'bold'}}>검색 결과가 없습니다...</p>
            ) : (
                <ul style={{listStyleType: 'disc', paddingLeft: '20px'}}>
                    {results.map((item, idx) => (
                        <li key={idx} style={{marginBottom: '20px'}}>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <h3>{item.title}</h3>
                            </a>
                            <p>{item.snippet}</p>
                            <small>{item.displayLink}</small>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Search;