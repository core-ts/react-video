"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("../CategoryTab.css");
var TabCategory_1 = require("./TabCategory");
function CategoryTab(props) {
  var ref = React.useRef(null);
  var data = props.data, setSelectedTab = props.setSelectedTab;
  var _a = React.useState(true), previousBtnHide = _a[0], setPreviousBtnHide = _a[1];
  var _b = React.useState(false), nextBtnHide = _b[0], setNextBtnHide = _b[1];
  var scroll = function (scrollOffset) {
    if (ref.current) {
      ref.current.scrollLeft += scrollOffset;
      var _a = ref.current, scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
      var scrollMaxWidth = scrollWidth - clientWidth;
      if (scrollLeft < scrollMaxWidth) {
        setPreviousBtnHide(false);
        setNextBtnHide(false);
      }
      if (scrollLeft >= scrollMaxWidth) {
        setNextBtnHide(true);
      }
      if (!scrollLeft) {
        setPreviousBtnHide(true);
      }
    }
  };
  return (React.createElement("div", { className: 'categories-tab' }, React.createElement("div", { className: 'container' }, React.createElement("button", { className: "btn " + (previousBtnHide && 'btn-hide'), onClick: function () { return scroll(-(props.move && props.move > 0 ? props.move : 101)); } }, "\u2039"), React.createElement("div", { className: 'tabs', ref: ref }, data.map(function (item) {
    return (item.assignable ?
      React.createElement(TabCategory_1.TabCategory, { key: item.id, id: item.id, name: item.title, setSelectedTab: setSelectedTab }) : null);
  })), React.createElement("button", { className: "btn " + (nextBtnHide && 'btn-hide'), onClick: function () { return scroll(props.move && props.move > 0 ? props.move : 101); } }, "\u203A"))));
}
exports.CategoryTab = CategoryTab;
