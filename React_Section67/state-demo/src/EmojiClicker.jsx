import { useState } from "react";
import { v4 as uuid } from 'uuid';

function randomEmoji() {
    const choices = ["A", "B", "C", "D", "E", "F"];
    return choices[Math.floor(Math.random() * choices.length)]
}

export default function EmojiClicker() {
    const [emojies, setEmojies] = useState([{ id: uuid(), emoji: randomEmoji() }]); // 이 곳에 무작위 id 생성
    const addEmoji = () => {
        setEmojies(oldEmojies => [...oldEmojies, { id: uuid(), emoji: randomEmoji() }]);
    };

    const deleteEmoji = (id) => {
        // 단계1.delete the emoji with the specified id(특정 아이디로 Emoji 삭제)
        setEmojies(prevEmojies => {
            return prevEmojies.filter(e => e.id !== id);    
        })
    };

    const makeEverythingA = () => {
        setEmojies((prevEmojies) => {
            return prevEmojies.map((e) => {
                return {...e, emoji: "A"}; // 원본은 유지하되 emoji 프로퍼티 자체만 바꾸게 됨
            });
        });
    };

    return (
        <div>
            {emojies.map((e) => (
                // 단계2. deleteEmoji를 호출할 때 이 곳에 ID 전달해야 함
                <span 
                    onClick={() => deleteEmoji(e.id)} 
                    key={e.id} 
                    style={{ fontSize: "4rem" }}>
                        {e.emoji}
                </span>
            ))}
            <br />
            <button onClick={addEmoji }>Add Emoji</button><br />
            <button onClick={makeEverythingA}>Make them all A</button>
        </div>
    );
}