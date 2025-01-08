export default function Greeter({ person="Everyone", from="anonymous" }) {
    return (
        <>
            <h1>Hello, {person}</h1>
            <h2>from {from}</h2>
        </>
    );
}