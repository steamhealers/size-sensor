/**
 * 使用 Object dom 接口来作为 size sensor
 * Created by hustcc on 18/6/9.
 * Contract: i@hust.cc
 */

import Base from './Base';
import { SensorStyle, SensorClassName } from '../constant';

export default class extends Base {

  /**
   * 创建 sensor 的 object DOM
   * @returns {HTMLObjectElement}
   */
  createSensor = () => {
    const obj = document.createElement('object');
    obj.setAttribute('style', SensorStyle);
    obj.setAttribute('class', SensorClassName);
    obj.type = 'text/html';
    obj.data = 'about:blank';

    // 调整样式
    if (getComputedStyle(this.element).position === 'static') {
      this.element.style.position = 'relative'
    }

    obj.onload = () => {
      obj.contentDocument.defaultView.addEventListener('resize', this.resizeListener);
      // 直接触发一次 resize
      this.resizeListener();
    };

    // 添加到 dom 结构中
    this.element.appendChild(obj);

    return obj;
  };

  /**
   * 完全 destroy
   */
  destroy = () => {
    if (this.sensor && this.sensor.parentNode) {
      // 移除事件
      this.sensor.contentDocument.defaultView.removeEventListener('resize', this.resizeListener);
      // 移除 dom
      this.sensor.parentNode.removeChild(this.sensor);
      this.sensor = undefined;
    }
  }
}
