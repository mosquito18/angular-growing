import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class RenderDataService {

  constructor() { }

  renderData(data?, propertyName?, href?, hrefName?, getLength?) {
    const arr = propertyName.split('.');
    let _value = '';
    const filter = (_arr, _data) => {
      let value;
      if (_arr.length === 1) {
        value = _data[propertyName] || _data[propertyName];
        if (getLength) {
          value = value.length;
        }
      } else {
        let newD = _data;
        _(_arr).forEach((ele, index: number) => {
          if (newD[ele] && newD[ele] instanceof Array) {
            newD = newD[ele][0];
          }
          if (index === _arr.length - 1) {
            value = newD[ele] ? newD[ele] : '';
          } else {
            if (newD[ele]) {
              newD = newD[ele];
            } else {
              return '';
            }
          }
        });
      }
      return value;
    };
    if (href) {
      _value = this.renderData(data, hrefName, false, '');
    } else {
      _value = filter(arr, data);
    }
    return _value;
  }
  renderData1(data?, property?, href?, hrefName?, getLength?) {
    const arr = property.propertyName.split('.');
    let _value = '';
    const filter = (_arr, _data) => {
      let value;
      if (_arr.length === 1) {
        value = _data[property.propertyName] || _data[property.standbyName];
        if (getLength) {
          value = value.length;
        }
      } else {
        let newD = _data;
        _(_arr).forEach((ele, index: number) => {
          if (newD[ele] && newD[ele] instanceof Array) {
            newD = newD[ele][0];
          }
          if (index === _arr.length - 1) {
            value = newD[ele] ? newD[ele] : '';
          } else {
            if (newD[ele]) {
              newD = newD[ele];
            } else {
              return '';
            }
          }
        });
      }
      return value;
    };
    if (href) {
      _value = this.renderData(data, hrefName, false, '');
    } else {
      _value = filter(arr, data);
    }
    return _value;
  }
}
