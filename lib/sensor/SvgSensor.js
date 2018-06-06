'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Base2 = require('./Base');

var _Base3 = babelHelpers.interopRequireDefault(_Base2);

var _class = function (_Base) {
  babelHelpers.inherits(_class, _Base);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.createSensor = function () {}, _this.deploy = function () {}, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  return _class;
}(_Base3.default); /**
                    * TODO 使用 SVGResize 做传感器
                    * Created by hustcc on 18/6/9.
                    * Contract: i@hust.cc
                    */

exports.default = _class;
module.exports = exports['default'];