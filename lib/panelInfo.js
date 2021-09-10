"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = require("react-redux");

var _react = _interopRequireWildcard(require("react"));

var _fa = require("react-icons/fa");

var _navigator = require("./contexts/navigator");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  position: "absolute",
  bottom: "0",
  left: "0",
  right: "0",
  textAlign: "center",
  color: "gainsboro",
  backgroundColor: "rgba(0,0,0, 0.4)",
  fontFamily: "'Bangers', sans-serif"
};
var tableStyles = {
  width: "100%"
};

function PanelInfo(props) {
  var _useContext = (0, _react.useContext)(_navigator.NavigationContext),
      comicData = _useContext.comicData;

  var currentPageIdx = (0, _reactRedux.useSelector)(function (state) {
    return state.currentPageIdx;
  });
  var currentPanelIdx = (0, _reactRedux.useSelector)(function (state) {
    return state.currentPanelIdx;
  });
  var currentPageImageLoaded = (0, _reactRedux.useSelector)(function (state) {
    return state.currentPageImageLoaded;
  });
  var menuVisibile = (0, _reactRedux.useSelector)(function (state) {
    return state.menuVisibility.visible;
  });
  var currentPanelData = (0, _reactRedux.useSelector)(function (state) {
    return comicData.getPanelData(state.currentPageIdx, state.currentPanelIdx);
  });
  var currentPanelDataRef = (0, _react.useRef)(comicData.getPanelData(currentPageIdx, currentPanelIdx));
  (0, _react.useEffect)(function () {
    currentPanelDataRef.current = comicData.getPanelData(currentPageIdx, currentPanelIdx);
  }, [comicData, currentPageIdx, currentPanelIdx]);

  var getVisibility = function getVisibility() {
    return menuVisibile ? "visible" : "hidden";
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    style: _objectSpread(_objectSpread({}, styles), {
      visibility: getVisibility()
    })
  }, /*#__PURE__*/_react.default.createElement("h1", null, /*#__PURE__*/_react.default.createElement("span", null, currentPageImageLoaded ? '' : /*#__PURE__*/_react.default.createElement(_fa.FaSpinner, {
    className: "spin"
  })), "Page ", currentPageIdx, " of ", comicData.getPageCount() - 1), /*#__PURE__*/_react.default.createElement("table", {
    style: tableStyles
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "#"), /*#__PURE__*/_react.default.createElement("th", null, "x"), /*#__PURE__*/_react.default.createElement("th", null, "y"), /*#__PURE__*/_react.default.createElement("th", null, "width"), /*#__PURE__*/_react.default.createElement("th", null, "height"))), /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, currentPanelData ? currentPanelData['id'] : '-'), /*#__PURE__*/_react.default.createElement("td", null, currentPanelData ? currentPanelData['x'] : '-'), /*#__PURE__*/_react.default.createElement("td", null, currentPanelData ? currentPanelData['y'] : '-'), /*#__PURE__*/_react.default.createElement("td", null, currentPanelData ? currentPanelData['width'] : '-'), /*#__PURE__*/_react.default.createElement("td", null, currentPanelData ? currentPanelData['height'] : '-')))));
}

var _default = PanelInfo;
exports.default = _default;