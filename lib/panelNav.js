"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _io = require("react-icons/io");

var _bs = require("react-icons/bs");

var _reducers = require("./reducers");

var _navigator = require("./contexts/navigator");

var _tooltip = _interopRequireDefault(require("./utils/tooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  panel: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0"
  },
  navContainer: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "rgba(0,0,0, 0.4)"
  },
  navItem: {
    color: "gainsboro",
    margin: "4px",
    padding: "4px",
    fontSize: "30px",
    cursor: "pointer"
  }
};

function PanelNav(props) {
  var _useContext = (0, _react.useContext)(_navigator.NavigationContext),
      gotoPrevPage = _useContext.gotoPrevPage,
      gotoNextPage = _useContext.gotoNextPage,
      gotoPrevPanel = _useContext.gotoPrevPanel,
      gotoNextPanel = _useContext.gotoNextPanel,
      toggleFullPageView = _useContext.toggleFullPageView,
      getVisibility = _useContext.getVisibility;

  var currentView = (0, _reactRedux.useSelector)(function (state) {
    return state.comicApp.currentView;
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    style: _objectSpread(_objectSpread({}, styles.panel), {
      visibility: getVisibility()
    })
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: styles.navContainer
  }, /*#__PURE__*/_react.default.createElement("div", {
    onClick: function onClick() {
      return gotoPrevPage();
    },
    style: styles.navItem,
    "aria-label": "previous page"
  }, /*#__PURE__*/_react.default.createElement(_tooltip.default, {
    title: /*#__PURE__*/_react.default.createElement(_io.IoMdSkipBackward, null),
    msg: "Show previous page",
    placement: "bottom"
  })), /*#__PURE__*/_react.default.createElement("div", {
    onClick: function onClick() {
      return gotoPrevPanel();
    },
    style: styles.navItem,
    "aria-label": "previous panel"
  }, /*#__PURE__*/_react.default.createElement(_tooltip.default, {
    title: /*#__PURE__*/_react.default.createElement(_io.IoMdArrowBack, null),
    msg: "Show previous panel",
    placement: "bottom"
  })), /*#__PURE__*/_react.default.createElement("div", {
    onClick: function onClick() {
      return toggleFullPageView();
    },
    style: styles.navItem,
    "aria-label": "full page"
  }, currentView === _reducers.PanelViews.FULL ? /*#__PURE__*/_react.default.createElement(_tooltip.default, {
    title: /*#__PURE__*/_react.default.createElement(_bs.BsFullscreenExit, null),
    msg: "Exit full-page view",
    placement: "bottom"
  }) : /*#__PURE__*/_react.default.createElement(_tooltip.default, {
    title: /*#__PURE__*/_react.default.createElement(_bs.BsFullscreen, null),
    msg: "Show full-page",
    placement: "bottom"
  })), /*#__PURE__*/_react.default.createElement("div", {
    onClick: function onClick() {
      return gotoNextPanel();
    },
    style: styles.navItem,
    "aria-label": "next panel"
  }, /*#__PURE__*/_react.default.createElement(_tooltip.default, {
    title: /*#__PURE__*/_react.default.createElement(_io.IoMdArrowForward, null),
    msg: "Show next panel",
    placement: "bottom"
  })), /*#__PURE__*/_react.default.createElement("div", {
    onClick: function onClick() {
      return gotoNextPage();
    },
    style: styles.navItem,
    "aria-label": "next page"
  }, /*#__PURE__*/_react.default.createElement(_tooltip.default, {
    title: /*#__PURE__*/_react.default.createElement(_io.IoMdSkipForward, null),
    msg: "Show next page",
    placement: "bottom"
  }))));
}

var _default = PanelNav;
exports.default = _default;