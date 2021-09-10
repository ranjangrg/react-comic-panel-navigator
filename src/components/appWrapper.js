// import { useState, useEffect } from 'react';
import PanelDisplay from './panelDisplay';
import { NavigationProvider } from './contexts/navigator';

function AppWrapper(props) {
	return (<div style={{textAlign: "center"}}>
		<NavigationProvider>
			<PanelDisplay />
		</NavigationProvider>
	</div>);
}

export default AppWrapper;