"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var defaultMiddleware = function defaultMiddleware(action) {
  return action;
};
var createAction = function createAction(actionName) {
  var middleware = arguments.length <= 1 || arguments[1] === undefined ? [defaultMiddleware] : arguments[1];
  return function (payload, meta) {
    return _extends({
      type: actionName
    }, middleware.reduce(function (acc, func) {
      return func(acc);
    }, { payload: payload, meta: meta }));
  };
};

exports.default = createAction;