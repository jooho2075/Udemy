import { useState } from "react";

export default function EmojiClicker() {
    const [emojies, setEmojies] = useState([":("]);
    const addEmoji = () => {
        setEmojies(oldEmojies => [...oldEmojies, ":)"]);
    };
    return (
        <div>
            {emojies.map((e) => (
                <span style={{ fontSize: "4rem" }}>{e}</span>
            ))}
            <button onClick={addEmoji }>Add Emoji</button>
        </div>
    );
}