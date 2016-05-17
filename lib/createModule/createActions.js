'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createActions = undefined;

var _createAction = require('./createAction');

var _createAction2 = _interopRequireDefault(_createAction);

var _ramda = require('ramda');

var _camelCase = require('camel-case');

var _camelCase2 = _interopRequireDefault(_camelCase);

var _payloadPropchecker = require('./payloadPropchecker');

var _payloadPropchecker2 = _interopRequireDefault(_payloadPropchecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parsePayloadErrors = function parsePayloadErrors(_ref) {
  var payload = _ref.payload;
  var meta = _ref.meta;

  return {
    payload: payload,
    meta: meta,
    error: payload instanceof Error
  };
};

var onError = function onError(err) {
  console.error('Warning: Failed payloadType:', err);
};

var _generateActions = function _generateActions(generatedActions, transformation) {
  var action = transformation.action;
  var _transformation$paylo = transformation.payloadTypes;
  var payloadTypes = _transformation$paylo === undefined ? {} : _transformation$paylo;
  var _transformation$middl = transformation.middleware;
  var middleware = _transformation$middl === undefined ? [] : _transformation$middl;
  var actionName = transformation.formattedConstant;


  var camelizedActionName = (0, _camelCase2.default)(action);
  var defaultMiddlewares = [(0, _payloadPropchecker2.default)({ actionName: actionName, payloadTypes: payloadTypes, onError: onError }), parsePayloadErrors];

  generatedActions[camelizedActionName] = (0, _createAction2.default)(actionName, middleware.concat(defaultMiddlewares));

  return generatedActions;
};

var createActions = exports.createActions = function createActions(transformations) {
  return (0, _ramda.reduce)(_generateActions, {}, transformations);
};

exports.default = createActions;