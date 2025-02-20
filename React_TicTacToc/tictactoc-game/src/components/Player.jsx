import { useState } from "react";

function Player({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(editing => !editing); // => schedules a state update to true
        setIsEditing(editing => !editing); // => schedules a state update to true
    };

    let playerName = <span className="player-name">{name}</span>;
    // let btnCaption = 'Edit';
    if(isEditing === true) {
        playerName = <input type="text" required value={name}></input>
        // btnCaption = 'Save';
    }

    return (
        <li>
            <span className="playe-info">
              {playerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}

export default Player;