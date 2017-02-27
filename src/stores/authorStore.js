"use strict";

import Dispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';
import {EventEmitter} from 'events';
const CHANGE_EVENT = 'change';

var AuthorStore = Object.assign({}, EventEmitter.prototype, {
    addChangeListener: (callback) => {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: (callback) => {
        thid.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: () => {
        this.emit(CHANGE_EVENT);
    }
});

Dispatcher.register((action)=>{
  switch (action.actionType) {
    case expression:

      break;
    default:

  }
});

e
