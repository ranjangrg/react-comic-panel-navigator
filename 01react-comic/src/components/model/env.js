
const comicData = [
	{
		"pageUrl": "/comic-sample-0.jpg", 
		"panelData": [
			{"id":"1","x":"25","y":"25","width":"359","height":"380"},
			{"id":"2","x":"385","y":"21","width":"147","height":"382"},
			{"id":"3","x":"544","y":"16","width":"329","height":"385"},
			{"id":"4","x":"16","y":"413","width":"373","height":"390"},
			{"id":"5","x":"408","y":"420","width":"465","height":"383"},
			{"id":"6","x":"30","y":"814","width":"316","height":"387"},
			{"id":"7","x":"346","y":"813","width":"191","height":"392"},
			{"id":"8","x":"543","y":"811","width":"331","height":"397"}
		],
		"naturalDims": {naturalHeight: 1233, naturalWidth: 905}
	}, {
		"pageUrl": "/comic-sample-1.jpg", 
		"panelData": [
			{"id":"1","x":"30","y":"19","width":"565","height":"395"},
			{"id":"2","x":"599","y":"21","width":"277","height":"396"},
			{"id":"3","x":"24","y":"425","width":"363","height":"427"},
			{"id":"4","x":"394","y":"423","width":"483","height":"392"},
			{"id":"5","x":"29","y":"858","width":"122","height":"358"},
			{"id":"6","x":"159","y":"860","width":"275","height":"358"},
			{"id":"7","x":"448","y":"814","width":"430","height":"405"}
		],
		"naturalDims": {naturalHeight: 1233, naturalWidth: 905}
	}, {
		"pageUrl": "/comic-sample-2.jpg", 
		"panelData": [
			{"id":"1","x":"29","y":"22","width":"359","height":"393"},
			{"id":"2","x":"384","y":"21","width":"503","height":"409"},
			{"id":"3","x":"28","y":"428","width":"555","height":"394"},
			{"id":"4","x":"586","y":"432","width":"305","height":"398"},
			{"id":"5","x":"19","y":"827","width":"447","height":"410"},
			{"id":"6","x":"465","y":"824","width":"417","height":"420"}
		],
		"naturalDims": {naturalHeight: 1233, naturalWidth: 905}
	}
];

const PanelViews = Object.freeze({
	"FULL": 1, "PANEL": 2
});

class ComicData {
	constructor() {
		this.comicData = comicData;
	}
	getPageUrl = (pageIdx) => {
		return this.comicData[pageIdx].pageUrl;
	};
	getPageNaturalDims = (pageIdx) => {
		return this.comicData[pageIdx].naturalDims;
	};
	getPanelData = (pageIdx, panelIdx) => {
		return this.comicData[pageIdx].panelData.find(pd => pd.id === String(panelIdx));
	};
	getAllPanelData = (pageIdx) => {
		return this.comicData[pageIdx].panelData;
	};
	getPageCount = () => this.comicData.length;
	getPanelCount = (pageIdx) => {
		let count = 0;
		if (this.comicData[pageIdx] && this.comicData[pageIdx].panelData) {
			count = this.comicData[pageIdx].panelData.length;
		}
		return count;
	};
}

export { ComicData, PanelViews };