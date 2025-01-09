export default function Slots({/*num1, num2, num3, num4, num5, num6*/}) {
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
    const num3 = Math.floor(Math.random() * 3) + 1;

    const isWinner = num1 === num2 === num3;
    return (
        <div>
            <h1>{num1} {num2} {num3}</h1>
            <h2 style={{color: isWinner ? "green" : "red"}}>{isWinner? "You Win!!" : "You Lose..."}</h2>
            <h3>{isWinner? "Congratulation" : "Sad..."}</h3>
        </div>
    );
}