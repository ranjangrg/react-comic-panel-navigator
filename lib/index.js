"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

require("../style.css");

var _reducers = _interopRequireDefault(require("./reducers"));

var _appWrapper = _interopRequireDefault(require("./appWrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appStore = (0, _redux.createStore)(_reducers.default, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function ComicPanelNavigatorApp(props) {
  return /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
    store: appStore
  }, /*#__PURE__*/_react.default.createElement(_appWrapper.default, {
    settings: props
  }));
}

var _default = ComicPanelNavigatorApp;
exports.default = _default;