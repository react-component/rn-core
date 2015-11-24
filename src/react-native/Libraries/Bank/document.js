/**
 *  文档对象，注册监听全局事件
 */
'use strict';

var DeviceEventEmitter = require('RCTDeviceEventEmitter');
var AntRNApiBridge = require('NativeModules').AntRNApiBridge;

var win = window;
var handlers = {};

function add(event, fn){
  handlers[event] || (handlers[event] = []);

  var handler   = {};
  handler.fn    = fn;

  handlers[event].push(handler);
}

function remove(event, fn){
  if (handlers[event]) {
    for (var i = 0; i < handlers[event].length; i++) {
      if (fn === handlers[event][i].fn) {
        handlers[event].splice(i, 1);
        if (handlers[event].length === 0) {
          delete handlers[event];
        }
        break;
      }
    }
  }
}

function trigger(event, args) {
  if (handlers[event]) {
    for (var i = 0; i < handlers[event].length; i++) {
      handlers[evnet][i].fn(event, args);
    }
  }
}

win.Ali = {
  call: function(api, params, callback){
    AntRNApiBridge.call(api, params, callback);
  },
  _handleMessageFromObjC: function(message){
    var resp = JSON.parse(message);
    var handlerName = resp.handlerName;
    var data = resp.data;
    trigger(handlerName, data);
  }
};

var Document = {
  addListener: add,
  removeListener: remove,
  trigger: trigger
};

module.exports = Document;