import React from 'react';
import { createStore} from 'redux';
import { Provider } from 'react-redux';

import '../style.css';
import allReducers from './reducers';
import AppWrapper from './appWrapper';

const appStore = createStore(
	allReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

function ComicPanelNavigatorApp(props) {
	return (<Provider store={appStore}>
		<AppWrapper settings={props}/>
	</Provider>);
}

export default ComicPanelNavigatorApp;