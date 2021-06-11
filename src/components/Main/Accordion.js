import Form from "./Form"


const Accordion = () => {
    return(
        <ul data-uk-accordion>
            <li>
                <a class="uk-accordion-title" href="#">Add A New Note</a>
                <div class="uk-accordion-content">
                    <Form />
                </div>
            </li>
        </ul>
    )
}

export default Accordion;