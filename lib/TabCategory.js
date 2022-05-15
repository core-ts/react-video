"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function TabCategory(props) {
  var id = props.id, name = props.name, setSelectedTab = props.setSelectedTab;
  var handOnClick = function () {
    setSelectedTab(id);
  };
  return (React.createElement("li", { className: 'tab' }, React.createElement("input", { type: 'radio', id: id, name: 'tab', onClick: handOnClick }), React.createElement("label", { className: 'tab-label', htmlFor: id }, name)));
}
exports.TabCategory = TabCategory;
