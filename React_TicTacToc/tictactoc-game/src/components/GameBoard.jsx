function GameBoard({onSelectSquare, board}) {
    /*
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    const handleSelectSquare = (rowIndex, colIndex) => {
        setGameBoard((prevGameBoard) => {
            // memory에 저장되는 새로운 배열 객체
            // 기존 배열 요소를 자식 요소로 저장하고 있음
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]; 
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        });

        onSelectSquare();
    };
    */

    return(
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (
                        <li key={colIndex}>
                            <button 
                                onClick={() => onSelectSquare(rowIndex, colIndex)} 
                                disabled={playerSymbol !== null}
                            >
                                    {playerSymbol}
                            </button>
                        </li>
                        ))}
                    </ol>
                </li>
            ))};
        </ol>
    );
}

export default GameBoard;