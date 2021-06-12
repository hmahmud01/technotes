import React from 'react';
import Form from './Form';

const AddNote = (props) => {
    return (
        <div>
            <div class="uk-card uk-card-default uk-margin">
                <div class="uk-card-header">
                    <div class="uk-grid-small uk-flex-middle" data-uk-grid>
                        <div class="uk-width-expand">
                            <h3 class="uk-card-title uk-margin-remove-bottom">Add A Note</h3>
                        </div>
                    </div>
                </div>
                <div class="uk-card-body">
                    <Form title={props.title} detail={props.detail} id={props.id} titleChange={props.titleChange} detailChange={props.detailChange} edit={props.edit}/>
                </div>
            </div>
        </div>
    )
}

export default AddNote;