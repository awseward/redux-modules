"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createAction = function createAction(actionName, middleware) {
  return function (payload, meta) {
    return _extends({
      type: actionName
    }, middleware.reduce(function (acc, func) {
      return func(acc);
    }, { payload: payload, meta: meta }));
  };
};

exports.default = createAction;