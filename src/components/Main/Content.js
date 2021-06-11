import React, {useEffect, useState} from 'react';
import Accordion from "./Accordion";
import AddNote from './AddNote';
import Note from "./Note";
import SharedContent from './SharedContent';

const Content = (props) => {    
    const notes_url = "https://technotes-api.herokuapp.com/api/v1/note?page=1&size=10"
    const [note, setNote] = useState([]);

    const userData = localStorage.getItem("user");
    const token = JSON.parse(userData);
    const jwt_token = "Bearer " + token.data.jwt;
    useEffect( () => {
        fetch(notes_url, {
            method: 'get',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "X-Jwt-Token": jwt_token
            }
        })
            .then(response => response.json())
            .then(data => setNote(data));
    }, []);

    const noteContent = () => {
        if (note.length != 0) {
                return note.notes.map(el => <Note title={el.title} detail={el.details} key={el.id} id={el.id}/>)
            }
        }
    

    return (
        <div>
            <div class="main uk-margin uk-padding">
                <div data-uk-grid>
                    <div className="uk-width-2-3">
                        <p><span class="uk-heading-bullet uk-h1">Tech Notes</span> Application</p>     
                        <div class="uk-section-muted">
                            <div class="uk-padding">
                                <h3>Notes List</h3>                                
                                <div class="note-list">
                                    {noteContent()}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="uk-width-1-3">
                        <AddNote />
                        <SharedContent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;