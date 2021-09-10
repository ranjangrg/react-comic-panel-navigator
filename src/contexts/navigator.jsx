import React from "react";
import { createContext, useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ComicData } from "../model/env";
import { changeCurrentPage, changeCurrentPanel, changeCurrentView, changePageImageLoaded } from '../actions';
import { PanelViews } from '../reducers';

const NavigationContext = createContext({});

const NavigationProvider = (props) => {
	const [comicData, changeComicData] = useState(new ComicData());
	const currentPageIdx = useSelector(state => state.currentPageIdx);
	const currentPanelIdx = useSelector(state => state.currentPanelIdx);
	const currentView = useSelector(state => state.currentView);
	const currentPageImageLoaded = useSelector(state => state.currentPageImageLoaded);
	const menuVisibile = useSelector(state => state.menuVisibility.visible);
	const appSettings = useSelector(state => state.appSettings);

	const pageImageLoadedPrmRef = useRef();
	const imgElemRef = useRef(document.getElementById("panel-img"));
	const wrapperElemRef = useRef(document.getElementById("panel-wrapper"));
	const dispatch = useDispatch();

	const gotoPage = (newPageIdx) => {
		if (newPageIdx <= 0) { newPageIdx = 0; }
		if (newPageIdx >= comicData.getPageCount()) {
			newPageIdx = comicData.getPageCount() - 1;
		}
		if (newPageIdx !== currentPageIdx) {
			dispatch(changeCurrentPage(newPageIdx));
			dispatch(changeCurrentPanel("1"));
		}
	};
	const gotoPrevPage = () => {
		gotoPage(parseInt(currentPageIdx) - 1);
	};
	const gotoNextPage = () => {
		gotoPage(parseInt(currentPageIdx) + 1);
	};
	const gotoLastPanel = () => {
		const finalPanelIdx = comicData.getPanelCount(currentPageIdx);
		dispatch(changeCurrentPanel(String(finalPanelIdx)));
	};
	const gotoPrevPanel = () => {
		let newPanelIdx = parseInt(currentPanelIdx) - 1;
		if (newPanelIdx > 0) {
			dispatch(changeCurrentPanel(String(newPanelIdx)));
		} else {
			gotoPrevPage();
			gotoLastPanel();
		}
	};
	const gotoNextPanel = () => {
		let newPanelIdx = parseInt(currentPanelIdx) + 1;
		if (newPanelIdx <= comicData.getPanelCount(currentPageIdx)) {
			dispatch(changeCurrentPanel(String(newPanelIdx)));
		} else {
			gotoNextPage();
		}
	};
	const toggleFullPageView = () => {
		let newView = PanelViews.PANEL;
		if (currentView === PanelViews.PANEL) {
			newView = PanelViews.FULL;
		}
		dispatch(changeCurrentView(newView));
	};

	const gotoPanel = (newPanelIdx) => {
		dispatch(changeCurrentView(PanelViews.PANEL));
		imgElemRef.current = document.getElementById("panel-img");
		wrapperElemRef.current = document.getElementById("panel-wrapper");
		// wait for page-image to load first
		pageImageLoadedPrmRef.current.then((_msg) => {
			const panelDims = comicData.getPanelData(currentPageIdx, newPanelIdx);
			if (panelDims) {
				const imgElem = imgElemRef.current;
				const wrapperElem = wrapperElemRef.current;
				let pageDims = { naturalWidth: imgElem.naturalWidth, naturalHeight: imgElem.naturalHeight };
				let newPanelDims = { ...panelDims };

				newPanelDims.height = appSettings.height;

				let scaleFactor = newPanelDims.height / panelDims.height;
				let widthOverflow = (panelDims.width * scaleFactor) > appSettings.width;
				if (widthOverflow) {
					scaleFactor = appSettings.width / panelDims.width;
					//console.warn("[ WARNING ] Width overflow");
				}

				newPanelDims.width = panelDims.width * scaleFactor;
				newPanelDims.height = panelDims.height * scaleFactor;

				wrapperElem.style.width = `${newPanelDims.width}px`;
				wrapperElem.style.height = `${newPanelDims.height}px`;
				imgElem.width = pageDims.naturalWidth * scaleFactor;
				imgElem.height = pageDims.naturalHeight * scaleFactor;

				let offsetX = panelDims.x * scaleFactor;
				let offsetY = panelDims.y * scaleFactor;

				imgElem.style.transform = `translate(-${offsetX}px, -${offsetY}px)`;
			}
		});
	};

	const getVisibility = () => menuVisibile ? "visible" : "hidden";

	// const updateComic = () => {
	// 	// changeComicData(newData);
	// 	console.log("Comic data updated");
	// };
	useEffect(() => {
		imgElemRef.current = document.getElementById("panel-img");
		wrapperElemRef.current = document.getElementById("panel-wrapper");
		pageImageLoadedPrmRef.current = new Promise((resolve) => {
			if (currentPageImageLoaded) { resolve("[ INFO ] Image loaded"); }
		});
	});

	useEffect(() => {
		dispatch(changePageImageLoaded(false));
	}, [currentPageIdx, dispatch]);

	useEffect(() => {
		if (currentView === PanelViews.FULL) {
			wrapperElemRef.current.style.width = `${appSettings.width}px`;
			wrapperElemRef.current.style.height = `${appSettings.height}px`;
			imgElemRef.current.width = appSettings.width;
			imgElemRef.current.height = appSettings.height;
			imgElemRef.current.style.transform = "translate(0px, 0px)";
		} else if (currentView === PanelViews.PANEL) {
			gotoPanel(currentPanelIdx);
		}
	}, [currentView]); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		const gotoCurrentPanel = () => {
			gotoPanel(currentPanelIdx);
		};
		gotoCurrentPanel();
	}, [
		currentPanelIdx, currentPageIdx, appSettings,
		comicData, currentPageImageLoaded, dispatch
	]); // eslint-disable-line react-hooks/exhaustive-deps
	return (<NavigationContext.Provider value={{
		comicData,
		gotoPage, gotoPrevPage, gotoNextPage,
		gotoLastPanel, gotoPrevPanel, gotoNextPanel,
		toggleFullPageView, gotoPanel,
		getVisibility
	}}>
		{props.children}
	</NavigationContext.Provider>);
};

export { NavigationContext, NavigationProvider };