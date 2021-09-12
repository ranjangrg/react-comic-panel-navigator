"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavigationProvider = exports.NavigationContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _env = require("../model/env");

var _actions = require("../actions");

var _reducers = require("../reducers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var NavigationContext = /*#__PURE__*/(0, _react.createContext)({});
exports.NavigationContext = NavigationContext;

var NavigationProvider = function NavigationProvider(props) {
  var _useState = (0, _react.useState)(new _env.ComicData()),
      _useState2 = _slicedToArray(_useState, 2),
      comicData = _useState2[0],
      changeComicData = _useState2[1];

  var currentPageIdx = (0, _reactRedux.useSelector)(function (state) {
    return state.comicApp.currentPageIdx;
  });
  var currentPanelIdx = (0, _reactRedux.useSelector)(function (state) {
    return state.comicApp.currentPanelIdx;
  });
  var currentView = (0, _reactRedux.useSelector)(function (state) {
    return state.comicApp.currentView;
  });
  var currentPageImageLoaded = (0, _reactRedux.useSelector)(function (state) {
    return state.comicApp.currentPageImageLoaded;
  });
  var menuVisibile = (0, _reactRedux.useSelector)(function (state) {
    return state.comicApp.menuVisibility.visible;
  });
  var appSettings = (0, _reactRedux.useSelector)(function (state) {
    return state.comicApp.appSettings;
  });
  var pageImageLoadedPrmRef = (0, _react.useRef)();
  var imgElemRef = (0, _react.useRef)(document.getElementById("panel-img"));
  var wrapperElemRef = (0, _react.useRef)(document.getElementById("panel-wrapper"));
  var dispatch = (0, _reactRedux.useDispatch)();

  var gotoPage = function gotoPage(newPageIdx) {
    if (newPageIdx <= 0) {
      newPageIdx = 0;
    }

    if (newPageIdx >= comicData.getPageCount()) {
      newPageIdx = comicData.getPageCount() - 1;
    }

    if (newPageIdx !== currentPageIdx) {
      dispatch((0, _actions.changeCurrentPage)(newPageIdx));
      dispatch((0, _actions.changeCurrentPanel)("1"));
    }
  };

  var gotoPrevPage = function gotoPrevPage() {
    gotoPage(parseInt(currentPageIdx) - 1);
  };

  var gotoNextPage = function gotoNextPage() {
    gotoPage(parseInt(currentPageIdx) + 1);
  };

  var gotoLastPanel = function gotoLastPanel() {
    var finalPanelIdx = comicData.getPanelCount(currentPageIdx);
    dispatch((0, _actions.changeCurrentPanel)(String(finalPanelIdx)));
  };

  var gotoPrevPanel = function gotoPrevPanel() {
    var newPanelIdx = parseInt(currentPanelIdx) - 1;

    if (newPanelIdx > 0) {
      dispatch((0, _actions.changeCurrentPanel)(String(newPanelIdx)));
    } else {
      gotoPrevPage();
      gotoLastPanel();
    }
  };

  var gotoNextPanel = function gotoNextPanel() {
    var newPanelIdx = parseInt(currentPanelIdx) + 1;

    if (newPanelIdx <= comicData.getPanelCount(currentPageIdx)) {
      dispatch((0, _actions.changeCurrentPanel)(String(newPanelIdx)));
    } else {
      gotoNextPage();
    }
  };

  var toggleFullPageView = function toggleFullPageView() {
    var newView = _reducers.PanelViews.PANEL;

    if (currentView === _reducers.PanelViews.PANEL) {
      newView = _reducers.PanelViews.FULL;
    }

    dispatch((0, _actions.changeCurrentView)(newView));
  };

  var gotoPanel = function gotoPanel(newPanelIdx) {
    dispatch((0, _actions.changeCurrentView)(_reducers.PanelViews.PANEL));
    imgElemRef.current = document.getElementById("panel-img");
    wrapperElemRef.current = document.getElementById("panel-wrapper"); // wait for page-image to load first

    pageImageLoadedPrmRef.current.then(function (_msg) {
      var panelDims = comicData.getPanelData(currentPageIdx, newPanelIdx);

      if (panelDims) {
        var imgElem = imgElemRef.current;
        var wrapperElem = wrapperElemRef.current;
        var pageDims = {
          naturalWidth: imgElem.naturalWidth,
          naturalHeight: imgElem.naturalHeight
        };

        var newPanelDims = _objectSpread({}, panelDims);

        newPanelDims.height = appSettings.height;
        var scaleFactor = newPanelDims.height / panelDims.height;
        var widthOverflow = panelDims.width * scaleFactor > appSettings.width;

        if (widthOverflow) {
          scaleFactor = appSettings.width / panelDims.width; //console.warn("[ WARNING ] Width overflow");
        }

        newPanelDims.width = panelDims.width * scaleFactor;
        newPanelDims.height = panelDims.height * scaleFactor;
        wrapperElem.style.width = "".concat(newPanelDims.width, "px");
        wrapperElem.style.height = "".concat(newPanelDims.height, "px");
        imgElem.width = pageDims.naturalWidth * scaleFactor;
        imgElem.height = pageDims.naturalHeight * scaleFactor;
        var offsetX = panelDims.x * scaleFactor;
        var offsetY = panelDims.y * scaleFactor;
        imgElem.style.transform = "translate(-".concat(offsetX, "px, -").concat(offsetY, "px)");
      }
    });
  };

  var getVisibility = function getVisibility() {
    return menuVisibile ? "visible" : "hidden";
  }; // const updateComic = () => {
  // 	// changeComicData(newData);
  // 	console.log("Comic data updated");
  // };


  (0, _react.useEffect)(function () {
    imgElemRef.current = document.getElementById("panel-img");
    wrapperElemRef.current = document.getElementById("panel-wrapper");
    pageImageLoadedPrmRef.current = new Promise(function (resolve) {
      if (currentPageImageLoaded) {
        resolve("[ INFO ] Image loaded");
      }
    });
  });
  (0, _react.useEffect)(function () {
    dispatch((0, _actions.changePageImageLoaded)(false));
  }, [currentPageIdx, dispatch]);
  (0, _react.useEffect)(function () {
    if (currentView === _reducers.PanelViews.FULL) {
      wrapperElemRef.current.style.width = "".concat(appSettings.width, "px");
      wrapperElemRef.current.style.height = "".concat(appSettings.height, "px");
      imgElemRef.current.width = appSettings.width;
      imgElemRef.current.height = appSettings.height;
      imgElemRef.current.style.transform = "translate(0px, 0px)";
    } else if (currentView === _reducers.PanelViews.PANEL) {
      gotoPanel(currentPanelIdx);
    }
  }, [currentView]); // eslint-disable-line react-hooks/exhaustive-deps

  (0, _react.useEffect)(function () {
    var gotoCurrentPanel = function gotoCurrentPanel() {
      gotoPanel(currentPanelIdx);
    };

    gotoCurrentPanel();
  }, [currentPanelIdx, currentPageIdx, appSettings, comicData, currentPageImageLoaded, dispatch]);
  return /*#__PURE__*/_react.default.createElement(NavigationContext.Provider, {
    value: {
      comicData: comicData,
      gotoPage: gotoPage,
      gotoPrevPage: gotoPrevPage,
      gotoNextPage: gotoNextPage,
      gotoLastPanel: gotoLastPanel,
      gotoPrevPanel: gotoPrevPanel,
      gotoNextPanel: gotoNextPanel,
      toggleFullPageView: toggleFullPageView,
      gotoPanel: gotoPanel,
      getVisibility: getVisibility
    }
  }, props.children);
};

exports.NavigationProvider = NavigationProvider;