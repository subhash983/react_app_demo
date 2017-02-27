"use strict";

import React from 'react';
import AuthorForm from './authorForm';
import AuthorApi from '../../api/authorApi';
import toastr from 'toastr';
import {withRouter} from 'react-router';

class ManageAuthor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: {
                id: '',
                firstName: '',
                lastName: ''
            },
            errors: {
                firstName: '',
                lastName: ''
            },
            dirty: false
        };
        this.setAuthorState = this.setAuthorState.bind(this);
        this.saveAuthor = this.saveAuthor.bind(this);
        this.authorFormIsValid = this.authorFormIsValid.bind(this);
    }

    componentWillMount() {
        var authorId = this.props.params.id;
        if (authorId) {
            var author = AuthorApi.getAuthorById(authorId);
            this.setState({author: author});
        }
    }

    componentDidMount() {
        this.props.router.setRouteLeaveHook(this.props.route, () => {
            if (this.state.dirty) {
                return "You have unsaved data, are you sure you want to leave this page?"
            }
        });
    }

    setAuthorState(event) {
        this.setState({dirty: true});
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({author: this.state.author});
    }

    authorFormIsValid() {
        var formIsValid = true;
        this.state.errors = {};

        if (this.state.author.firstName.length < 3) {
            this.state.errors.firstName = 'First Name must be at least 3 characters';
            formIsValid = false;
        }

        if (this.state.author.lastName.length < 3) {
            this.state.errors.lastName = 'Last Name must be at least 3 characters';
            formIsValid = false;
        }

        this.setState({errors: this.state.errors});
        return formIsValid;
    }

    saveAuthor(event) {
        event.preventDefault();
        if (!this.authorFormIsValid()) {
            return;
        }
        AuthorApi.saveAuthor(this.state.author);

        this.state.dirty = false;

        this.setState({dirty: false});
        toastr.success('Author Saved');

        this.props.router.push('authors');
    }

    render() {
        return (<AuthorForm author={this.state.author} onChange={this.setAuthorState} onSave={this.saveAuthor} error={this.state.errors}/>);
    }
}

export default withRouter(ManageAuthor);
