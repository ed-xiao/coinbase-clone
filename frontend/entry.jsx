import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

let yoda = (<img src="https://media1.tenor.com/images/709f58a3fad3e65122487a8cc4f12490/tenor.gif?itemid=15739229"></img>)

document.addEventListener('DOMContentLoaded', () => {
    
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    //REMOVE LATER
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //REMOVE LATER

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});