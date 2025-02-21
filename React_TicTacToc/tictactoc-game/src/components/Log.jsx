function Log({turns}) { // Log component는 순서가 있는 목록(ol)을 반환할 예정

    return (
        <ol id="log">
            {turns.map((turn) => (
                <li key={`${turn.square.row}${turn.square.col}`}>
                    {turn.player} selected {turn.square.row}, {turn.square.col}
                </li>
            ))}
        </ol>
    );
}

export default Log;