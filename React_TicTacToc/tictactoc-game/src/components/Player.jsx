import { useState } from "react";

function Player({initialName, symbol, isActive, onChangeName}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    const handleEditClick = () => {
        setIsEditing((editing) => !editing); // => schedules a state update to true
    };

    const handleChange = (event) => {
        setPlayerName(event.target.value);

        if(isEditing) {
            onChangeName(symbol, playerName);
        }
    };

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    // let btnCaption = 'Edit';
    
    if(isEditing === true) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}></input>
        // btnCaption = 'Save';
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="playe-info">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}

export default Player;