import { useDispatch, useSelector } from 'react-redux';
import { useContext } from 'react';

import { PanelViews } from './reducers';
import { 
	changePageImageLoaded, changeCurrentPanel, 
	changeCurrentView
} from './actions';
import { NavigationContext } from './contexts/navigator';

function PanelImage(props) {
	const { comicData } = useContext(NavigationContext);
	const currentPageIdx = useSelector(state => state.currentPageIdx);
	const currentPanelIdx = useSelector(state => state.currentPanelIdx);
	const currentView = useSelector(state => state.currentView);
	const appSettings = useSelector(state => state.appSettings);
	const dispatch = useDispatch();

	const styles = {
		panelRoot: {
			position: "relative",
			height: `${appSettings.height}px`,
			minHeight: `${appSettings.height}px`,
			width: `${appSettings.width}px`,
			marginLeft: "auto",
			marginRight: "auto",
			overflow: "hidden"
		},
		panelWrapper: {
			position: "absolute",
			top: "50%",
			left: "50%",
			transform: "translate(-50%, -50%)",
			height: `${appSettings.height}px`,
			width: `${appSettings.width}px`,
			overflow: "hidden",
			transition: "ease-in 0.5s"
		},
		panelImg: {
			objectFit: "contain",
			transition: "ease-in 0.5s",
		}
	};
	const imgLoaded = () => {
		dispatch(changePageImageLoaded(true));
	};
	const clickHandler = (event) => {
		// handle only while fullscreen
		if (currentView === PanelViews.FULL) {
			const imageElem = document.querySelector("#panel-root #panel-wrapper #panel-img");
			const imageElemDims = imageElem.getBoundingClientRect();

			const scaleFactor = imageElem.width / imageElem.naturalWidth;
			let clickedPosition = {
				x: (event.clientX - imageElemDims.left) / scaleFactor, 
				y: (event.clientY - imageElemDims.top) / scaleFactor
			};

			let clickedPanelId = undefined;
			const allPanelData = comicData.getAllPanelData(currentPageIdx);
			for (let panelIdx in allPanelData) {
				/* loop through all panels within current page */
				const currentPanel = allPanelData[panelIdx];
				const pointA = {x: currentPanel.x, y: currentPanel.y};
				const pointB = {
					x: parseFloat(pointA.x) + parseFloat(currentPanel.width), 
					y: parseFloat(pointA.y) + parseFloat(currentPanel.height)
				};
				// check if clicked within this panel
				if (
					( clickedPosition.x > pointA.x && clickedPosition.x < pointB.x ) &&
					( clickedPosition.y > pointA.y && clickedPosition.y < pointB.y )
				) {
					clickedPanelId = currentPanel.id;
					break;	// found so no need to continue loop
				}
			}
			if (clickedPanelId !== undefined) {
				if (currentPanelIdx === clickedPanelId) {
					dispatch(changeCurrentView(PanelViews.PANEL));
				} else {
					dispatch(changeCurrentPanel(clickedPanelId));
				}
			}
		}
	};

	return (<div id="panel-root" style={styles.panelRoot}>
		<div id="panel-wrapper" onClick={clickHandler} style={styles.panelWrapper}>
			<img 
				id="panel-img"
				src={comicData.getPageUrl(currentPageIdx)} 
				alt='comic page' 
				width="auto"
				onLoad={() => imgLoaded()}
				style={styles.panelImg}>
			</img>
		</div>
	</div>);
}

export default PanelImage;