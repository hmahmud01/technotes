const Content = () => {
    return (
        <div>
            <div class="main">
                <div class="uk-container">
                    <p><span class="uk-heading-bullet uk-h1">Tech Notes</span> Application</p>         
                    
                    <div class="uk-section-muted">
                        <div class="uk-padding">
                            <h3>Notes List</h3>
                            <button class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom" type="button" uk-toggle="target: #add-tech-note"><span uk-icon="icon: plus"></span> <span class="uk-margin-small-left">Add A Note</span></button>                    
                            <div id="add-tech-note" data-uk-modal>
                                <div class="uk-modal-dialog uk-modal-body">
                                    <h2 class="uk-modal-title">Add A tech note</h2>
                                    <form class="uk-form-stacked">
                                        <div class="uk-margin">
                                            <label class="uk-form-label" for="note-title">Title</label>
                                            <div class="uk-form-controls">
                                                <input class="uk-input" id="note-title" type="text" placeholder="Title" />
                                            </div>
                                        </div>

                                        <div class="uk-margin">
                                            <label class="uk-form-label" for="note-description">Descirption</label>
                                            <textarea class="uk-textarea" id="note-description" rows="5" placeholder="Descirption"></textarea>
                                        </div>

                                        <p class="uk-text-right">
                                            <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                                            <button class="uk-button uk-button-primary" type="button">Save</button>
                                        </p>
                                    </form>
                                </div>
                            </div>

                            <div class="note-list">
                                <div class="uk-card uk-card-default uk-margin">
                                    <div class="uk-card-header">
                                        <div class="uk-grid-small uk-flex-middle" uk-grid>
                                            <div class="uk-width-expand">
                                                <h3 class="uk-card-title uk-margin-remove-bottom">Title</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="uk-card-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                    </div>
                                    <div class="uk-card-footer">
                                        <a href="#" class="uk-button uk-button-text">Delete</a>
                                    </div>
                                </div>
                                <div class="uk-card uk-card-default uk-margin">
                                    <div class="uk-card-header">
                                        <div class="uk-grid-small uk-flex-middle" uk-grid>
                                            <div class="uk-width-expand">
                                                <h3 class="uk-card-title uk-margin-remove-bottom">Title</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="uk-card-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                    </div>
                                    <div class="uk-card-footer">
                                        
                                        <div class="uk-flex">
                                            <div class="uk-flex uk-flex-left">
                                                <a href="#" class="uk-button uk-button-text">Delete</a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="uk-card uk-card-default uk-margin">
                                    <div class="uk-card-header">
                                        <div class="uk-grid-small uk-flex-middle" uk-grid>
                                            <div class="uk-width-expand">
                                                <h3 class="uk-card-title uk-margin-remove-bottom">Title</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="uk-card-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                    </div>
                                    <div class="uk-card-footer">
                                        <a href="#" class="uk-button uk-button-text">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;