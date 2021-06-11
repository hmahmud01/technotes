import SharedNotes from "./SharedNotes";
import SharedUsers from "./SharedUsers";

const SharedContent = () => {
    return (
        <div>
            <div class="uk-card uk-card-default uk-margin">
                <div class="uk-card-header">
                    <div class="uk-grid-small uk-flex-middle" data-uk-grid>
                        <div class="uk-width-expand">
                            <h3 class="uk-card-title uk-margin-remove-bottom">Shared Information</h3>
                        </div>
                    </div>
                </div>
                <div class="uk-card-body">
                    <ul data-uk-accordion>
                        <li>
                            <a class="uk-accordion-title" href="#">With Users</a>
                            <div class="uk-accordion-content">
                                <SharedUsers />
                            </div>
                        </li>
                        <li>
                            <a class="uk-accordion-title" href="#">Of Notes</a>
                            <div class="uk-accordion-content">
                                <SharedNotes />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default SharedContent;