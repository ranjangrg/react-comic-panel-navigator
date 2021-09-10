import { useSelector } from "react-redux";
import { useEffect, useRef, useContext } from "react";
import { FaSpinner } from 'react-icons/fa';
import { NavigationContext } from './contexts/navigator';

const styles = {
	position: "absolute",
	bottom: "0", left: "0", right: "0",
	textAlign: "center",
	color: "gainsboro",
	backgroundColor: "rgba(0,0,0, 0.4)",
	fontFamily: "'Bangers', sans-serif"
};
const tableStyles = {
	width: "100%"
};

function PanelInfo(props) {
	const { comicData } = useContext(NavigationContext);
	const currentPageIdx = useSelector(state => state.currentPageIdx);
	const currentPanelIdx = useSelector(state => state.currentPanelIdx);
	const currentPageImageLoaded = useSelector(state => state.currentPageImageLoaded);
	const menuVisibile = useSelector(state => state.menuVisibility.visible);

	const currentPanelData = useSelector(state => comicData.getPanelData(state.currentPageIdx, state.currentPanelIdx));

	const currentPanelDataRef = useRef(comicData.getPanelData(currentPageIdx, currentPanelIdx));
	useEffect( () => {
		currentPanelDataRef.current = comicData.getPanelData(currentPageIdx, currentPanelIdx);
	}, [comicData, currentPageIdx, currentPanelIdx] );
	const getVisibility = () => menuVisibile ? "visible" : "hidden";
	return (<div style={{...styles, ...{visibility: getVisibility()}}}>
		<h1> 
			<span> 
				{ currentPageImageLoaded ? '' : 
				<FaSpinner className="spin"/> } 
			</span>
			Page {currentPageIdx} of {comicData.getPageCount() - 1}
		</h1>
		<table style={tableStyles}>
			<thead>
				<tr>
					<th>#</th> 
					<th>x</th>
					<th>y</th>
					<th>width</th>
					<th>height</th>
				</tr>
			</thead>
			<tbody>
				<tr> 
					<td>{currentPanelData ? currentPanelData['id'] : '-'}</td>
					<td>{currentPanelData ? currentPanelData['x'] : '-'}</td>
					<td>{currentPanelData ? currentPanelData['y'] : '-'}</td>
					<td>{currentPanelData ? currentPanelData['width'] : '-'}</td>
					<td>{currentPanelData ? currentPanelData['height'] : '-'}</td>
				</tr>
			</tbody>
		</table>
	</div>);
}

export default PanelInfo;