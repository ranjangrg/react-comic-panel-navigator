"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleMenuVisibility = exports.changePageImageLoaded = exports.changeCurrentView = exports.changeCurrentPanel = exports.loadComicData = exports.changeCurrentPage = exports.changeAppSettings = void 0;

var changeAppSettings = function changeAppSettings(newSettings) {
  return {
    type: "APP_SETTINGS_UPDATE",
    payload: newSettings
  };
};

exports.changeAppSettings = changeAppSettings;

var changeCurrentPage = function changeCurrentPage(newPageIdx) {
  return {
    type: "CHANGE_PAGE",
    payload: parseInt(newPageIdx)
  };
};

exports.changeCurrentPage = changeCurrentPage;

var loadComicData = function loadComicData(newComicData) {
  return {
    type: "LOAD_COMIC",
    payload: newComicData
  };
};

exports.loadComicData = loadComicData;

var changeCurrentPanel = function changeCurrentPanel(newPanelIdx) {
  return {
    type: "CHANGE_PANEL",
    payload: String(newPanelIdx)
  };
};

exports.changeCurrentPanel = changeCurrentPanel;

var changeCurrentView = function changeCurrentView(newView) {
  return {
    type: "CHANGE_VIEW",
    payload: parseInt(newView)
  };
};

exports.changeCurrentView = changeCurrentView;

var changePageImageLoaded = function changePageImageLoaded(isLoaded) {
  return {
    type: "IMAGE_LOADED",
    imageLoaded: Boolean(isLoaded)
  };
};

exports.changePageImageLoaded = changePageImageLoaded;

var toggleMenuVisibility = function toggleMenuVisibility(isVisible) {
  return {
    type: "MENU_VISIBLE",
    payload: Boolean(isVisible)
  };
};

exports.toggleMenuVisibility = toggleMenuVisibility;