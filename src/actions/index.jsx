
const changeAppSettings = (newSettings) => {
	return {
		type: "APP_SETTINGS_UPDATE",
		payload: newSettings
	};
}

const changeCurrentPage = (newPageIdx) => {
	return {
		type: "CHANGE_PAGE",
		payload: parseInt(newPageIdx)
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
		payload: String(newPanelIdx)
	};
};

const changeCurrentView = (newView) => {
	return {
		type: "CHANGE_VIEW",
		payload: parseInt(newView)
	};
};

const changePageImageLoaded = (isLoaded) => {
	return {
		type: "IMAGE_LOADED",
		imageLoaded: Boolean(isLoaded)
	};
};

const toggleMenuVisibility = (isVisible) => {
	return {
		type: "MENU_VISIBLE",
		payload: Boolean(isVisible)
	};
};

export { 
	changeAppSettings, changeCurrentPage, loadComicData, 
	changeCurrentPanel, changeCurrentView,
	changePageImageLoaded, toggleMenuVisibility
};