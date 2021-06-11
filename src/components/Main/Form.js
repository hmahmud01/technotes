const Form = () => {

    const submitHandler = (event) => {
        console.log("checking event");
        event.preventDefault();

        const userData = localStorage.getItem("user");
        const token = JSON.parse(userData);
        const jwt_token = "Bearer " + token.data.jwt;

        console.log(jwt_token);

        const data = {
            title: document.getElementById("note-title").value,
            details: document.getElementById("note-description").value
        }

        var post_note_url = "https://technotes-api.herokuapp.com/api/v1/note";
        fetch(post_note_url, {
            method: 'post',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "X-Jwt-Token": jwt_token
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .then(() => {
            window.location.reload();
        });


    }

    return(
        <form className="uk-form-stacked">
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="note-title">Title</label>
                <div className="uk-form-controls">
                    <input className="uk-input" id="note-title" type="text" placeholder="Title" />
                </div>
            </div>

            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="note-description">Descirption</label>
                <textarea className="uk-textarea" id="note-description" rows="5" placeholder="Descirption"></textarea>
            </div>

            <div className="uk-text-right">
                <button className="uk-button uk-button-default uk-modal-close" type="button" >Cancel</button>
                <button className="uk-button uk-button-primary" onClick={submitHandler} type="button">Save</button>
            </div>
        </form>
    )

}

export default Form;