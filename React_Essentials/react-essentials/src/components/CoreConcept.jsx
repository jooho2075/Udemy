// Prop(속성)으로 Component 재사용
function CoreConcept({image, title, description}) {
    return (
        <li>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}

export default CoreConcept;