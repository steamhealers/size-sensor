'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Base2 = require('./Base');

var _Base3 = babelHelpers.interopRequireDefault(_Base2);

var _constant = require('../constant');

/**
 * 使用 Object dom 接口来作为 size sensor
 * Created by hustcc on 18/6/9.
 * Contract: i@hust.cc
 */

var _class = function (_Base) {
  babelHelpers.inherits(_class, _Base);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.createSensor = function () {
      var obj = document.createElement('object');
      obj.setAttribute('style', _constant.SensorStyle);
      obj.setAttribute('class', _constant.SensorClassName);
      obj.type = 'text/html';
      obj.data = 'about:blank';

      // 调整样式
      if (getComputedStyle(_this.element).position === 'static') {
        _this.element.style.position = 'relative';
      }

      obj.onload = function () {
        obj.contentDocument.defaultView.addEventListener('resize', _this.resizeListener);
        // 直接触发一次 resize
        _this.resizeListener();
      };

      // 添加到 dom 结构中
      _this.element.appendChild(obj);

      return obj;
    }, _this.destroy = function () {
      if (_this.sensor && _this.sensor.parentNode) {
        // 移除事件
        _this.sensor.contentDocument.defaultView.removeEventListener('resize', _this.resizeListener);
        // 移除 dom
        _this.sensor.parentNode.removeChild(_this.sensor);
        _this.sensor = undefined;
      }
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  /**
   * 创建 sensor 的 object DOM
   * @returns {HTMLObjectElement}
   */


  /**
   * 完全 destroy
   */


  return _class;
}(_Base3.default);

exports.default = _class;
module.exports = exports['default'];