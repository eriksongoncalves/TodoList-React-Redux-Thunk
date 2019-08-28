import React from 'react';
import Todo from './components/Todo';
import { Provider } from 'react-redux';
import store from './store';

import GlobalStyle from './style';

const App = () => (
    <Provider store={store}>
        <GlobalStyle />
        <Todo />
    </Provider>
)

export default App;
