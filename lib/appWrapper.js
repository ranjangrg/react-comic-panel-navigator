"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _panelDisplay = _interopRequireDefault(require("./panelDisplay"));

var _navigator = require("./contexts/navigator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { useState, useEffect } from 'react';
function AppWrapper(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_navigator.NavigationProvider, null, /*#__PURE__*/_react.default.createElement(_panelDisplay.default, null)));
}

var _default = AppWrapper;
exports.default = _default;