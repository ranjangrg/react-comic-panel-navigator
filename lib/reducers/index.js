"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "PanelViews", {
  enumerable: true,
  get: function get() {
    return _env.PanelViews;
  }
});
exports.default = void 0;

var _redux = require("redux");

var _env = require("../model/env");

var defaultAppSettings = {
  width: 370,
  height: 550,
  menuVisibilityDuration: 1500,
  // ref: https://uxplanet.org/8-tips-for-dark-theme-design-8dfc2f8f7ab6
  backgroundColor: "#121212"
};

var appSettingsReducer = function appSettingsReducer() {
  var initial_state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultAppSettings;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "APP_SETTINGS_UPDATE":
      return action.payload;

    default:
      return initial_state;
  }

  ;
};

var currentPageIdxReducer = function currentPageIdxReducer() {
  var initial_state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "CHANGE_PAGE":
      return action.payload;

    default:
      return initial_state;
  }

  ;
};

var comicDataReducer = function comicDataReducer() {
  var initial_state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _env.ComicData();
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "LOAD_COMIC":
      return action.payload;

    default:
      return initial_state;
  }

  ;
};

var currentPanelReducer = function currentPanelReducer() {
  var initial_state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "1";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "CHANGE_PANEL":
      return action.payload;

    default:
      return initial_state;
  }

  ;
};

var currentViewReducer = function currentViewReducer() {
  var initial_state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _env.PanelViews.PANEL;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "CHANGE_VIEW":
      return action.payload;

    default:
      return initial_state;
  }

  ;
};

var currentImageModReducer = function currentImageModReducer() {
  var initial_state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    x: 25,
    y: 25,
    height: 380,
    width: 359
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "UPDATE_IMAGE_MOD":
      return action.payload;

    default:
      return initial_state;
  }

  ;
};

var pageImageLoadedReducer = function pageImageLoadedReducer() {
  var initial_state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "IMAGE_LOADED":
      return action.imageLoaded;

    default:
      return initial_state;
  }
};

var menuVisibilityReducer = function menuVisibilityReducer() {
  var initial_state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var action = arguments.length > 1 ? arguments[1] : undefined;

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

var allReducers = (0, _redux.combineReducers)({
  appSettings: appSettingsReducer,
  currentPageIdx: currentPageIdxReducer,
  comicData: comicDataReducer,
  currentPanelIdx: currentPanelReducer,
  currentView: currentViewReducer,
  currentImageMod: currentImageModReducer,
  currentPageImageLoaded: pageImageLoadedReducer,
  menuVisibility: menuVisibilityReducer
});
var _default = allReducers;
exports.default = _default;