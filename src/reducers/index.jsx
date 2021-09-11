import { combineReducers } from "redux";
import { ComicData, PanelViews } from '../model/env';

const defaultAppSettings = {
	width: 370, height: 550, menuVisibilityDuration: 1500,
	// ref: https://uxplanet.org/8-tips-for-dark-theme-design-8dfc2f8f7ab6
	backgroundColor: "#121212"
};
// const defaultAppSettings_large = {
// 	width: 1180, height: 650, menuVisibilityDuration: 1500,
// 	// ref: https://uxplanet.org/8-tips-for-dark-theme-design-8dfc2f8f7ab6
// 	backgroundColor: "#121212"
// };
const appSettingsReducer = (initial_state = defaultAppSettings, action) => {
	switch (action.type) {
		case "APP_SETTINGS_UPDATE":
			return action.payload;
		default:
			return initial_state;
	};
}

const currentPageIdxReducer = (initial_state=0, action) => {
	switch (action.type) {
		case "CHANGE_PAGE":
			return action.payload;
		default:
			return initial_state;
	};
};

const comicDataReducer = (initial_state=new ComicData(), action) => {
	switch (action.type) {
		case "LOAD_COMIC":
			return action.payload;
		default:
			return initial_state;
	};
};

const currentPanelReducer = (initial_state="1", action) => {
	switch (action.type) {
		case "CHANGE_PANEL":
			return action.payload;
		default:
			return initial_state;
	};
};

const currentViewReducer = (initial_state=PanelViews.PANEL, action) => {
	switch (action.type) {
		case "CHANGE_VIEW":
			return action.payload;
		default:
			return initial_state;
	};
};

const currentImageModReducer = (initial_state={x: 25, y: 25, height: 380, width: 359}, action) => {
	switch (action.type) {
		case "UPDATE_IMAGE_MOD":
			return action.payload;
		default:
			return initial_state;
	};
};

const pageImageLoadedReducer = (initial_state=false, action) => {
	switch (action.type) {
		case "IMAGE_LOADED":
			return action.imageLoaded;
		default:
			return initial_state;
	}
};

const menuVisibilityReducer = (initial_state=true, action) => {
	switch (action.type) {
		case "MENU_VISIBLE":
			return {
				visible: action.payload,
				triggerTime: Date.now()
			};
		default:
			return initial_state;
	}
};

const allReducers = combineReducers({
	appSettings: appSettingsReducer,
	currentPageIdx: currentPageIdxReducer,
	comicData: comicDataReducer,
	currentPanelIdx: currentPanelReducer,
	currentView: currentViewReducer,
	currentImageMod: currentImageModReducer,
	currentPageImageLoaded: pageImageLoadedReducer,
	menuVisibility: menuVisibilityReducer
});

export { PanelViews };
export default allReducers;