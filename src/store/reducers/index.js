import { combineReducers } from 'redux';

import Todo from './Todo';

export default combineReducers({
    tasks: Todo
});