"use strict";

import React from 'react';
import Input from '../common/textInput';

class AuthorForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <form>
                <h1>Manage Author</h1>
                <Input name="firstName" label="First Name" value={this.props.author.firstName} onChange={this.props.onChange} error={this.props.error.firstName}/>

                <Input name="lastName" label="Last Name" value={this.props.author.lastName} onChange={this.props.onChange} error={this.props.error.lastName}/>

                <input type="submit" value="Save" className="btn btn-dafault" onClick={this.props.onSave}/>
            </form>
        );
    }
}

AuthorForm.propTypes = {
    author: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSave: React.PropTypes.func.isRequired,
    error: React.PropTypes.object
}

export default AuthorForm;
