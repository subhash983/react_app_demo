"use strict";

import Dispatcher from '../dispatcher/appDispatcher';
import AuthorApi from '../api/authorApi';
import ActionTypes from '../constants/actionTypes';

let AuthorActions = {
    createAuthor: (author) => {
        let newAuthor = AuthorApi.saveAuthor(author);

        Dispatcher.dispatch({actionType: ActionTypes.CREATE_AUTHOR, author: newAuthor});
    };
};

export default AuthorActions;
