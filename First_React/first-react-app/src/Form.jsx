function handleFormSubmit(evt) {
    evt.preventDefault();
    console.log("Submitted the Form");
}

function Form() {
    return(
        <form onSubmit={handleFormSubmit}>
            <button>Submit</button>
        </form>
    );
}

export default Form;