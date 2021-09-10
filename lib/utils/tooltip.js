"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Tooltip(props) {
  var styles = {
    fontSize: "1rem",
    fontFamily: "'Bangers', sans-serif"
  };
  var tooltiptextClasses = "comic-app-util-tooltiptext ".concat(props.placement);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "comic-app-util-tooltip"
  }, props.title, /*#__PURE__*/_react.default.createElement("span", {
    className: tooltiptextClasses,
    style: styles
  }, props.msg));
}

var _default = Tooltip;
exports.default = _default;