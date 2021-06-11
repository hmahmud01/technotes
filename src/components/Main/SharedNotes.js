import {useState, useEffect} from 'react'
import SharedNote from "./SharedNote";

const SharedNotes = () => {
    const shared_user_url = "https://technotes-api.herokuapp.com/api/v1/note/share"
    const [notes, setNotes] = useState([]);

    const userData = localStorage.getItem("user");
    const token = JSON.parse(userData);
    const jwt_token = "Bearer " + token.data.jwt;
    useEffect( () => {
        fetch(shared_user_url, {
            method: 'get',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "X-Jwt-Token": jwt_token
            }
        })
            .then(response => response.json())
            .then(data => setNotes(data.models));
    }, []);

    if(notes){
        var notesContent = notes.map(el=> <SharedNote note={el.note.title} user={el.target_user.mail} key={el.id}/>)
    }else{
        var notesContent = "No Notes"
    }
    

    return (
        <div>
            <ul class="uk-list">
                {notesContent}
            </ul>
        </div>
    )
}

export default SharedNotes;