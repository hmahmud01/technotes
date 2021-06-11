const SharedNote = (props) => {
    return(
        <li>{props.note} - {props.user}</li>
    )
}

export default SharedNote;