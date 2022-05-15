"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
require("../VideoInfoBox.css");
function VideoInfoBox(props) {
  var _a = React.useState(true), collapsed = _a[0], setCollapsed = _a[1];
  var handleClick = function () {
    setCollapsed(!collapsed);
  };
  return (React.createElement("div", { className: 'video-info-container' }, React.createElement("div", { className: 'video-info' }, React.createElement("h3", { className: 'video-title' }, props.video.title), React.createElement("div", { className: 'publish' }, props.video.publishedAt.toDateString())), React.createElement("div", { className: 'video-info-box' }, React.createElement("div", { className: 'top' }, React.createElement("img", { src: props.channelThumbnail, alt: 'Avatar', width: 48, height: 48 }), React.createElement("div", { className: 'channel-info' }, React.createElement("h4", { className: 'channel-name' }, React.createElement(react_router_dom_1.Link, { to: "" + props.prefix + props.video.channelId }, props.video.channelTitle)))), React.createElement("div", { className: "video-description " + (collapsed ? 'collapsed' : 'extended') + " " }, React.createElement("p", { dangerouslySetInnerHTML: { __html: props.video.description ? props.video.description : '' } })), React.createElement("span", { className: 'btn-show', onClick: handleClick }, collapsed ? (props.resource ? props.resource.show_more : 'SHOW MORE') : (props.resource ? props.resource.show_less : 'SHOW LESS')))));
}
exports.VideoInfoBox = VideoInfoBox;
