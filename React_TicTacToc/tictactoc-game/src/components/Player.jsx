import { useState } from "react";

function Player({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true); // button을 클릭한 시점이기 때문에 true로 설정
    };

    let playerName = <span className="player-name">{name}</span>;

    if(isEditing === true) {
        playerName = <input type="text" required></input>
    }

    return (
        <li>
            <span className="playe-info">
              {playerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>Edit</button>
        </li>
    );
}

export default Player;