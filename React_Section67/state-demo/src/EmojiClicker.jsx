import { useState } from "react";
import { v4 as uuid } from 'uuid';

export default function EmojiClicker() {
    const [emojies, setEmojies] = useState([{ id: uuid(), emoji: ":(" }]); // 이 곳에 무작위 id 생성
    const addEmoji = () => {
        setEmojies(oldEmojies => [...oldEmojies, { id: uuid(), emoji: ":)" }]);
    };
    return (
        <div>
            {emojies.map((e) => (
                <span key={e.id} style={{ fontSize: "4rem" }}>{e.emoji}</span>
            ))}
            <button onClick={addEmoji }>Add Emoji</button>
        </div>
    );
}