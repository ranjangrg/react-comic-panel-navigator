"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = require("react-redux");

var _react = _interopRequireWildcard(require("react"));

var _reducers = require("./reducers");

var _actions = require("./actions");

var _navigator = require("./contexts/navigator");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function PanelImage(props) {
  var _useContext = (0, _react.useContext)(_navigator.NavigationContext),
      comicData = _useContext.comicData;

  var currentPageIdx = (0, _reactRedux.useSelector)(function (state) {
    return state.comicApp.currentPageIdx;
  });
  var currentPanelIdx = (0, _reactRedux.useSelector)(function (state) {
    return state.comicApp.currentPanelIdx;
  });
  var currentView = (0, _reactRedux.useSelector)(function (state) {
    return state.comicApp.currentView;
  });
  var appSettings = (0, _reactRedux.useSelector)(function (state) {
    return state.comicApp.appSettings;
  });
  var dispatch = (0, _reactRedux.useDispatch)();
  var styles = {
    panelRoot: {
      position: "relative",
      height: "".concat(appSettings.height, "px"),
      minHeight: "".concat(appSettings.height, "px"),
      width: "".concat(appSettings.width, "px"),
      marginLeft: "auto",
      marginRight: "auto",
      overflow: "hidden"
    },
    panelWrapper: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      height: "".concat(appSettings.height, "px"),
      width: "".concat(appSettings.width, "px"),
      overflow: "hidden",
      transition: "ease-in 0.5s"
    },
    panelImg: {
      objectFit: "contain",
      transition: "ease-in 0.5s"
    }
  };

  var imgLoaded = function imgLoaded() {
    dispatch((0, _actions.changePageImageLoaded)(true));
  };

  var clickHandler = function clickHandler(event) {
    // handle only while fullscreen
    if (currentView === _reducers.PanelViews.FULL) {
      var imageElem = document.querySelector("#panel-root #panel-wrapper #panel-img");
      var imageElemDims = imageElem.getBoundingClientRect();
      var scaleFactor = imageElem.width / imageElem.naturalWidth;
      var clickedPosition = {
        x: (event.clientX - imageElemDims.left) / scaleFactor,
        y: (event.clientY - imageElemDims.top) / scaleFactor
      };
      var clickedPanelId = undefined;
      var allPanelData = comicData.getAllPanelData(currentPageIdx);

      for (var panelIdx in allPanelData) {
        /* loop through all panels within current page */
        var currentPanel = allPanelData[panelIdx];
        var pointA = {
          x: currentPanel.x,
          y: currentPanel.y
        };
        var pointB = {
          x: parseFloat(pointA.x) + parseFloat(currentPanel.width),
          y: parseFloat(pointA.y) + parseFloat(currentPanel.height)
        }; // check if clicked within this panel

        if (clickedPosition.x > pointA.x && clickedPosition.x < pointB.x && clickedPosition.y > pointA.y && clickedPosition.y < pointB.y) {
          clickedPanelId = currentPanel.id;
          break; // found so no need to continue loop
        }
      }

      if (clickedPanelId !== undefined) {
        if (currentPanelIdx === clickedPanelId) {
          dispatch((0, _actions.changeCurrentView)(_reducers.PanelViews.PANEL));
        } else {
          dispatch((0, _actions.changeCurrentPanel)(clickedPanelId));
        }
      }
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    id: "panel-root",
    style: styles.panelRoot
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "panel-wrapper",
    onClick: clickHandler,
    style: styles.panelWrapper
  }, /*#__PURE__*/_react.default.createElement("img", {
    id: "panel-img",
    src: comicData.getPageUrl(currentPageIdx),
    alt: "comic page",
    width: "auto",
    onLoad: function onLoad() {
      return imgLoaded();
    },
    style: styles.panelImg
  })));
}

var _default = PanelImage;
exports.default = _default;