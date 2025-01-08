export default function Die({ numSides = 6 }) { // numSides의 기본값 설정한 것
    const roll = Math.floor(Math.random() * numSides) + 1;
    return (
        <p>
            { numSides }-sided Die roll : {roll}
        </p>
    );
}