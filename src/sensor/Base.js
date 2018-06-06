/**
 * Created by hustcc on 18/6/9.
 * Contract: i@hust.cc
 */

import debounce from '../debounce';

export default class {
  constructor(element) {
    this.element = element;

    // 监听器
    this.listeners = [];

    // 感应器
    this.sensor = undefined;
  }

  /**
   * 统一触发 listeners
   */
  resizeListener = debounce(() => {
    const { width, height } = getComputedStyle(this.element);

    // 依次触发执行
    this.listeners.forEach(listener => {
      listener({
        width,
        height,
      });
    })
  });

  /**
   * 监听某一个 callback
   * @param cb
   */
  bind = cb => {
    // 如果不存在 sensor，则创建一个 object
    if (!this.sensor) {
      this.sensor = this.createSensor();
    }

    if (this.listeners.indexOf(cb) === -1) {
      this.listeners.push(cb);
    }
  };

  /**
   * 取消绑定
   * @param cb
   */
  unbind = cb => {
    const idx = this.listeners.indexOf(cb);
    if (idx !== -1) {
      this.listeners.splice(idx, 1);
    }

    // 不存在 listener，并且存在 sensor object
    // 则移除 object
    if (this.listeners.length === 0 && this.sensor) {
      this.destroy();
    }
  };

  createSensor = () => {
    throw new Error('to be implemented.');
  };

  destroy = () => {
    throw new Error('to be implemented.');
  };
}
