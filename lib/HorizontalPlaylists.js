"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var Slide_1 = require("./Slide");
exports.HorizontalPlaylists = function (props) {
  var scrollRef = React.useRef();
  var liRef = React.useRef();
  var _a = React.useState([]), playlists = _a[0], setPlaylists = _a[1];
  var scroll = function (dir) {
    var current = scrollRef.current;
    if (!current) {
      return;
    }
    var childWidth = current.childNodes.length;
    var scrollWidth = (current.scrollWidth / childWidth) * 4;
    if (dir === 'left') {
      current.scrollLeft -= scrollWidth;
    }
    else {
      current.scrollLeft += scrollWidth;
    }
  };
  React.useEffect(function () {
    (function () {
      if (props.channelId) {
        props.getChannelPlaylists(props.channelId).then(function (res) {
          setPlaylists(res.list);
        });
      }
    })();
  }, []);
  return (React.createElement("div", { className: 'scroll-view' }, React.createElement("ul", { className: 'list-view horizon', ref: scrollRef }, playlists && playlists.map(function (item) {
    return (React.createElement("li", { key: item.id, className: 'video', ref: liRef }, React.createElement("div", { className: 'cover' }, React.createElement(Slide_1.Slide, { id: item.id, thumbnail: item.mediumThumbnail, thumbnailSize: 'mediumThumbnail', getVideos: props.getPlaylistVideos })), React.createElement("h4", null, React.createElement(react_router_dom_1.Link, { to: "" + props.prefix + item.channelId }, item.title))));
  })), React.createElement("button", { type: 'button', onClick: function () { return scroll('left'); }, className: 'left-arrow', style: { transform: 'rotate(180deg)' } }, "\u276F"), React.createElement("button", { type: 'button', onClick: function () { return scroll('right'); }, className: 'right-arrow' }, "\u276F")));
};
