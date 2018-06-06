'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _debounce = require('../debounce');

var _debounce2 = babelHelpers.interopRequireDefault(_debounce);

var _class = function _class(element) {
  var _this = this;

  babelHelpers.classCallCheck(this, _class);
  this.resizeListener = (0, _debounce2.default)(function () {
    var _getComputedStyle = getComputedStyle(_this.element),
        width = _getComputedStyle.width,
        height = _getComputedStyle.height;

    // 依次触发执行


    _this.listeners.forEach(function (listener) {
      listener({
        width: width,
        height: height
      });
    });
  });

  this.bind = function (cb) {
    // 如果不存在 sensor，则创建一个 object
    if (!_this.sensor) {
      _this.sensor = _this.createSensor();
    }

    if (_this.listeners.indexOf(cb) === -1) {
      _this.listeners.push(cb);
    }
  };

  this.unbind = function (cb) {
    var idx = _this.listeners.indexOf(cb);
    if (idx !== -1) {
      _this.listeners.splice(idx, 1);
    }

    // 不存在 listener，并且存在 sensor object
    // 则移除 object
    if (_this.listeners.length === 0 && _this.sensor) {
      _this.destroy();
    }
  };

  this.createSensor = function () {
    throw new Error('to be implemented.');
  };

  this.destroy = function () {
    throw new Error('to be implemented.');
  };

  this.element = element;

  // 监听器
  this.listeners = [];

  // 感应器
  this.sensor = undefined;
}

/**
 * 统一触发 listeners
 */


/**
 * 监听某一个 callback
 * @param cb
 */


/**
 * 取消绑定
 * @param cb
 */
; /**
   * Created by hustcc on 18/6/9.
   * Contract: i@hust.cc
   */

exports.default = _class;
module.exports = exports['default'];