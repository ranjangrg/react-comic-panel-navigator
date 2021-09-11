// import { useState, useEffect } from 'react';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PanelDisplay from './panelDisplay';
import { NavigationProvider } from './contexts/navigator';
import { changeAppSettings } from './actions';

function AppWrapper(props) {
	const appSettings = useSelector(state => state.appSettings);
	const dispatch = useDispatch();
	useEffect( () => {
		const newAppSettings = {...appSettings, ...props.settings};
		dispatch(changeAppSettings(newAppSettings));
	}, [props.settings, dispatch, changeAppSettings] ); // eslint-disable-line react-hooks/exhaustive-deps
	
	return (<div style={{textAlign: "center"}}>
		<NavigationProvider>
			<PanelDisplay />
		</NavigationProvider>
	</div>);
}

export default AppWrapper;