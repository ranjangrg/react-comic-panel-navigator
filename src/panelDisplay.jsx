import React  from 'react';
import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PanelImage from './panelImage';
import PanelInfo from './panelInfo';
import PanelNav from './panelNav';

import { toggleMenuVisibility } from './actions';

import { NavigationContext } from './contexts/navigator';

// TESTING context providers
// const TestComponent1 = () => {
// 	const { comicData } = useContext(NavigationContext);
// 	return (<div style={{ position: "fixed", bottom: 0 }}>
// 		<button onClick={() => console.log(comicData)}> Print </button>
// 	</div>);
// };

function PanelDisplay() {
	// const { comicData } = useContext(NavigationContext);
	const { comicData, gotoPrevPanel, gotoNextPanel, 
		toggleFullPageView } = useContext(NavigationContext);
	const appSettings = useSelector(state => state.comicApp.appSettings);
	const dispatch = useDispatch();

	const rootStyles = {
		position: "relative",
		display: "inline-block",
		width: parseFloat(appSettings.width),
		height: parseFloat(appSettings.height),
		overflow: "hidden",
		backgroundColor: appSettings.backgroundColor,
	};
	const hoverInHandler = (e) => {
		dispatch(toggleMenuVisibility(true));
	};
	const hoverOutHandler = (e) => {
		setTimeout(() => {
			dispatch(toggleMenuVisibility(false));
		}, appSettings.menuVisibilityDuration);
	};
	const handleKeyDown = (e) => {
		console.log(e.key, e.code);
		// e.key OR e.code ??
		switch (e.code) {
			case "ArrowRight":
				gotoNextPanel(); break;
			case "ArrowLeft":
				gotoPrevPanel(); break;
			case "KeyF":
				toggleFullPageView(); break;
			default:
				// do nothing
		}
	};
	return (<div
		style={rootStyles}
		onKeyDown={handleKeyDown} tabIndex="-1"
		onMouseMove={(e) => hoverInHandler(e)}
		onMouseEnter={(e) => hoverInHandler(e)}
		onMouseLeave={(e) => hoverOutHandler(e)}>
			<PanelImage comicData={comicData} />
			<PanelNav comicData={comicData} />
			<PanelInfo comicData={comicData} />
	</div>);
}

export default PanelDisplay;