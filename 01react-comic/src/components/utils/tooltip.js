import './tooltip.css';

function Tooltip(props) {
	const styles = {
		fontSize: "1rem",
		fontFamily: "'Bangers', sans-serif"
	};
	const tooltiptextClasses = `comic-app-util-tooltiptext ${props.placement}`;
	return (<div className="comic-app-util-tooltip">
		{props.title}
		<span className={tooltiptextClasses} style={styles}>  
			{props.msg}
		</span>
	</div>);
}

export default Tooltip;