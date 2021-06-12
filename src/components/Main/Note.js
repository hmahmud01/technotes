import {useState} from 'react'

const Note = (props) => {
    const [share, setShare] = useState("");
    const deleteNote = () => {
        var delete_url = "https://technotes-api.herokuapp.com/api/v1/note/";
        delete_url = delete_url+props.id;

        const userData = localStorage.getItem("user");
        const token = JSON.parse(userData);
        const jwt_token = "Bearer " + token.data.jwt;

        fetch(delete_url, {
            method: 'delete',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "X-Jwt-Token": jwt_token
            }
        })
        .then(response => response.json())
        .then(setTimeout(() => {window.location.reload()}, 3000));
    }

    const shareNote = (event) => {
        event.preventDefault();
        var data = {
            shared_to: share,
            note_id: props.id
        }

        var share_api = "https://technotes-api.herokuapp.com/api/v1/note/share";

        const userData = localStorage.getItem("user");
        const token = JSON.parse(userData);
        const jwt_token = "Bearer " + token.data.jwt;

        fetch(share_api, {
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

    function handleChange(e) {
        setShare(e.target.value);
    }

    function editNote(){
        props.setEdit(true);
        props.setTitle(props.title);
        props.setDetail(props.detail);
        props.setId(props.id);
    }

    return(
        <div>
            <div class="uk-card uk-card-default uk-margin">
                <div class="uk-card-header">
                    <div class="uk-grid-small uk-flex-middle" data-uk-grid>
                        <div class="uk-width-expand">
                            <h3 class="uk-card-title uk-margin-remove-bottom">{props.title}</h3>
                        </div>
                    </div>
                </div>
                <div class="uk-card-body">
                    <p>{props.detail}</p>
                    <ul data-uk-accordion>
                        <li>
                            <a class="uk-accordion-title" href="#">Share This Note</a>
                            <div class="uk-accordion-content">
                                <form className="uk-form-stacked">
                                    <div className="uk-margin">
                                        <div className="uk-form-controls">
                                            <input className="uk-input" id="shared_to" onChange={handleChange} type="email" placeholder="Share With" />
                                        </div>
                                    </div>
                                    <div className="uk-text-right">
                                        <button className="uk-button uk-button-primary uk-button-small" onClick={shareNote} type="button">Share</button>
                                    </div>
                                </form>    
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="uk-card-footer">
                    <div class="uk-button-group">
                        <button onClick={deleteNote} class="uk-button uk-button-danger uk-button-small">Delete</button>
                        <button onClick={editNote} class="uk-button uk-button-secondary uk-button-small">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Note