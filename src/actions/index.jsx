
const changeAppSettings = (newSettings) => {
	return {
		type: "APP_SETTINGS_UPDATE",
		payload: newSettings
	};
}

const changeCurrentPage = (newPageIdx) => {
	return {
		type: "CHANGE_PAGE",
		payload: newPageIdx
	};
}

const loadComicData = (newComicData) => {
	return {
		type: "LOAD_COMIC",
		payload: newComicData
	};
};

const changeCurrentPanel = (newPanelIdx) => {
	return {
		type: "CHANGE_PANEL",
		payload: newPanelIdx
	};
};

const changeCurrentView = (newView) => {
	return {
		type: "CHANGE_VIEW",
		payload: newView
	};
};

const changePageImageLoaded = (isLoaded) => {
	return {
		type: "IMAGE_LOADED",
		imageLoaded: isLoaded
	};
};

const toggleMenuVisibility = (isVisible) => {
	return {
		type: "MENU_VISIBLE",
		payload: isVisible
	};
};

export { 
	changeAppSettings, changeCurrentPage, loadComicData, 
	changeCurrentPanel, changeCurrentView,
	changePageImageLoaded, toggleMenuVisibility
};