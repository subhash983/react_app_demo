"use strict";

import Dispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';
import {EventEmitter} from 'events';
const CHANGE_EVENT = 'change';

let _authors = [];

let AuthorStore = Object.assign({}, EventEmitter.prototype, {
    addChangeListener: (callback) => {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: (callback) => {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: () => {
        this.emit(CHANGE_EVENT);
    }
});

Dispatcher.register((action) => {
    switch (action.actionType) {
        case ActionTypes.CREATE_AUTHOR:
            _authors.push(action.Author);
            AuthorStore.emitChange();
            break;
        default:

    }
});

export default AuthorStore;
