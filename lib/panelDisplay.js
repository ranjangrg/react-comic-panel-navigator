"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _panelImage = _interopRequireDefault(require("./panelImage"));

var _panelInfo = _interopRequireDefault(require("./panelInfo"));

var _panelNav = _interopRequireDefault(require("./panelNav"));

var _actions = require("./actions");

var _navigator = require("./contexts/navigator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// TESTING context providers
// const TestComponent1 = () => {
// 	const { comicData } = useContext(NavigationContext);
// 	return (<div style={{ position: "fixed", bottom: 0 }}>
// 		<button onClick={() => console.log(comicData)}> Print </button>
// 	</div>);
// };
function PanelDisplay() {
  // const { comicData } = useContext(NavigationContext);
  var _useContext = (0, _react.useContext)(_navigator.NavigationContext),
      comicData = _useContext.comicData,
      gotoPrevPage = _useContext.gotoPrevPage,
      gotoNextPage = _useContext.gotoNextPage,
      gotoPrevPanel = _useContext.gotoPrevPanel,
      gotoNextPanel = _useContext.gotoNextPanel,
      toggleFullPageView = _useContext.toggleFullPageView;

  var appSettings = (0, _reactRedux.useSelector)(function (state) {
    return state.appSettings;
  });
  var currentPanelIdx = (0, _reactRedux.useSelector)(function (state) {
    return state.currentPanelIdx;
  });
  var currentPageIdx = (0, _reactRedux.useSelector)(function (state) {
    return state.currentPageIdx;
  });
  var dispatch = (0, _reactRedux.useDispatch)();
  var rootStyles = {
    position: "relative",
    display: "inline-block",
    width: appSettings.width,
    height: appSettings.height,
    overflow: "hidden",
    backgroundColor: appSettings.backgroundColor
  };

  var hoverInHandler = function hoverInHandler(e) {
    dispatch((0, _actions.toggleMenuVisibility)(true));
  };

  var hoverOutHandler = function hoverOutHandler(e) {
    setTimeout(function () {
      dispatch((0, _actions.toggleMenuVisibility)(false));
    }, appSettings.menuVisibilityDuration);
  };

  var handleKeyDown = function handleKeyDown(e) {
    console.log(e.key, e.code); // e.key OR e.code ??

    switch (e.code) {
      case "ArrowRight":
        gotoNextPanel();
        break;

      case "ArrowLeft":
        gotoPrevPanel();
        break;

      case "KeyF":
        toggleFullPageView();
        break;

      default: // do nothing

    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    style: rootStyles,
    onKeyDown: handleKeyDown,
    tabIndex: "-1",
    onMouseMove: function onMouseMove(e) {
      return hoverInHandler(e);
    },
    onMouseEnter: function onMouseEnter(e) {
      return hoverInHandler(e);
    },
    onMouseLeave: function onMouseLeave(e) {
      return hoverOutHandler(e);
    }
  }, /*#__PURE__*/_react.default.createElement(_panelImage.default, {
    comicData: comicData
  }), /*#__PURE__*/_react.default.createElement(_panelNav.default, {
    comicData: comicData
  }), /*#__PURE__*/_react.default.createElement(_panelInfo.default, {
    comicData: comicData
  }));
}

var _default = PanelDisplay;
exports.default = _default;