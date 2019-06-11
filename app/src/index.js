/* *
  title: index.js 

  date: 6/7/2019

  author:  javier olaya

  description: component that is as the index of the application 
         
 */
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers';
import App from './components/App';
import Main from './components/Main';
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* define the state properties of the index */
ReactDom.render((
    <Provider store={store}>
    <App></App>
    </Provider>
), document.getElementById("app"));