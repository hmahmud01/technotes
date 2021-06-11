import {useState, useEffect} from 'react';
import SharedUser from './SharedUser';
const SharedUsers = () => {
    const shared_user_url = "https://technotes-api.herokuapp.com/api/v1/note/user/shared-by-me"
    const [users, setUsers] = useState([]);

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
            .then(data => setUsers(data.models));
    }, []);

    const usersContent = users.map(el=> <SharedUser user={el.user.mail} key={el.user.id}/>)

    return (
        <div>
            <ul class="uk-list">
                {usersContent}
            </ul>
        </div>
    )
}

export default SharedUsers;