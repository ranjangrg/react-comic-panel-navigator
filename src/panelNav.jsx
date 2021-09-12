import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { IoMdSkipBackward, IoMdArrowBack, IoMdArrowForward, IoMdSkipForward } from 'react-icons/io';
import { BsFullscreen, BsFullscreenExit } from 'react-icons/bs';

import { PanelViews } from './reducers';
import { NavigationContext } from './contexts/navigator';

import Tooltip from './utils/tooltip';

const styles = {
	panel: {
		position: "absolute",
		top: "0", left: "0", right: "0"
	},
	navContainer: {
		display: "flex",
		flexWrap: "nowrap",
		justifyContent: "center",
		alignContent: "center",
		backgroundColor: "rgba(0,0,0, 0.4)"
	},
	navItem: {
		color: "gainsboro",
		margin: "4px",
		padding: "4px",
		fontSize: "30px",
		cursor: "pointer"
	}
};

function PanelNav(props) {
	const { gotoPrevPage, gotoNextPage, 
		gotoPrevPanel, gotoNextPanel, 
		toggleFullPageView, getVisibility } = useContext(NavigationContext);
	const currentView = useSelector(state => state.comicApp.currentView);

	return (<div style={{...styles.panel, ...{visibility: getVisibility()}}}>
		<div style={styles.navContainer}> 
			<div onClick={() => gotoPrevPage()} style={styles.navItem} aria-label="previous page"> 
				<Tooltip title={<IoMdSkipBackward />} msg="Show previous page" placement="bottom" />
			</div>
			<div onClick={() => gotoPrevPanel()} style={styles.navItem} aria-label="previous panel"> 
				<Tooltip title={<IoMdArrowBack />} msg="Show previous panel" placement="bottom" />
			</div> 
			<div onClick={() => toggleFullPageView()} style={styles.navItem} aria-label="full page"> 
				{ 
				currentView === PanelViews.FULL ?
				<Tooltip title={<BsFullscreenExit />} msg="Exit full-page view" placement="bottom" /> :
				<Tooltip title={<BsFullscreen />} msg="Show full-page" placement="bottom" />
				}
			</div> 
			<div onClick={() => gotoNextPanel()} style={styles.navItem} aria-label="next panel"> 
				<Tooltip title={<IoMdArrowForward />} msg="Show next panel" placement="bottom" />
			</div>
			<div onClick={() => gotoNextPage()} style={styles.navItem} aria-label="next page"> 
				<Tooltip title={<IoMdSkipForward />} msg="Show next page" placement="bottom" />
			</div>
		</div>
	</div>);
}

export default PanelNav;