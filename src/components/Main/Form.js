const Form = (props) => {

    const submitHandler = (event) => {
        event.preventDefault();

        const userData = localStorage.getItem("user");
        const token = JSON.parse(userData);
        const jwt_token = "Bearer " + token.data.jwt;

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

    const editHandler = (event) => {
        event.preventDefault();

        const userData = localStorage.getItem("user");
        const token = JSON.parse(userData);
        const jwt_token = "Bearer " + token.data.jwt;

        const data = {
            title: document.getElementById("note-title").value,
            details: document.getElementById("note-description").value
        }

        var edit_note_url = "https://technotes-api.herokuapp.com/api/v1/note/";
        edit_note_url = edit_note_url+props.id;

        fetch(edit_note_url, {
            method: 'put',
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

    const buttonVal = props.edit ? "Edit" : "Save";

    const buttonFunc = props.edit? editHandler : submitHandler;

    return(
        <form className="uk-form-stacked">
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="note-title">Title</label>
                <div className="uk-form-controls">
                    <input className="uk-input" id="note-title" type="text" placeholder="Title" value={props.title} onChange={props.titleChange}/>
                </div>
            </div>

            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="note-description">Descirption</label>
                <textarea className="uk-textarea" id="note-description" rows="5" placeholder="Descirption" value={props.detail} onChange={props.detailChange}></textarea>
            </div>

            <div className="uk-text-right">
                <button className="uk-button uk-button-default uk-modal-close" type="button" >Cancel</button>
                <button className="uk-button uk-button-primary" onClick={buttonFunc} type="button">{buttonVal}</button>
            </div>
        </form>
    )

}

export default Form;