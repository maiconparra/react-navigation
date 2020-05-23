"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanGestureHandler = PanGestureHandler;
Object.defineProperty(exports, "GestureHandlerRootView", {
  enumerable: true,
  get: function get() {
    return _reactNativeGestureHandler.GestureHandlerRootView;
  }
});
Object.defineProperty(exports, "GestureState", {
  enumerable: true,
  get: function get() {
    return _reactNativeGestureHandler.State;
  }
});
Object.defineProperty(exports, "PanGestureHandlerGestureEvent", {
  enumerable: true,
  get: function get() {
    return _reactNativeGestureHandler.PanGestureHandlerGestureEvent;
  }
});

var React = _interopRequireWildcard(require("react"));

var _reactNativeGestureHandler = require("react-native-gesture-handler");

var _GestureHandlerRefContext = _interopRequireDefault(require("../utils/GestureHandlerRefContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function PanGestureHandler(props) {
  const gestureRef = React.useRef(null);
  return /*#__PURE__*/React.createElement(_GestureHandlerRefContext.default.Provider, {
    value: gestureRef
  }, /*#__PURE__*/React.createElement(_reactNativeGestureHandler.PanGestureHandler, props));
}
//# sourceMappingURL=GestureHandler.native.js.map