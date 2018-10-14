import jsdom from 'jsdom';


// 解决 Error: It looks like you called `mount()` without a global document being loaded.
if (typeof document === 'undefined') {
  global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
  global.window = document.defaultView;
  global.navigator = global.window.navigator;
}