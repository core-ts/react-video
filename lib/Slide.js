"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var PlayButton_1 = require("./PlayButton");
require("../Slide.css");
exports.Slide = function (props) {
  var id = props.id, thumbnail = props.thumbnail, thumbnailSize = props.thumbnailSize;
  var _a = React.useState(0), currentIndex = _a[0], setCurrentIndex = _a[1];
  var _b = React.useState(false), play = _b[0], setPlay = _b[1];
  var _c = React.useState([]), videos = _c[0], setVideos = _c[1];
  var _d = React.useState(3), length = _d[0], setLength = _d[1];
  var _e = React.useState(false), fetching = _e[0], setFetching = _e[1];
  React.useEffect(function () {
    (function () {
      if (id && fetching) {
        var max = props.max && props.max > 0 ? props.max : 3;
        props.getVideos(id, max).then(function (res) {
          setVideos(res.list);
          setLength(res.list.length);
        });
      }
    })();
  }, [fetching]);
  var next = function () {
    if (currentIndex < (length - 1)) {
      setCurrentIndex(function (prevState) { return prevState + 1; });
    }
    setPlay(false);
  };
  var prev = function () {
    if (currentIndex > 0) {
      setCurrentIndex(function (prevState) { return prevState - 1; });
    }
    setPlay(false);
  };
  var handlePlayVideo = function () {
    setPlay(true);
  };
  var handleFetch = function () {
    setFetching(true);
  };
  return (React.createElement("div", { className: 'carousel-container cover', style: { width: '100%' }, onMouseEnter: handleFetch }, React.createElement("div", { className: 'carousel-wrapper' }, React.createElement("button", { type: 'button', onClick: prev, className: 'left-arrow' }, "\u276E"), !play && React.createElement("div", { className: 'play-container', onClick: handlePlayVideo }, React.createElement(PlayButton_1.PlayButton, null)), React.createElement("div", { className: 'carousel-content-wrapper' }, React.createElement("div", { className: 'carousel-content', style: { transform: "translateX(-" + currentIndex * 100 + "%)" } }, videos && videos.length > 0 ? (videos.map(function (item, index) { return (currentIndex === index && play ? (React.createElement("iframe", { key: item.title, width: '200', height: '200', src: currentIndex === index ? "https://www.youtube.com/embed/" + item.id + "?autoplay=1" : "https://www.youtube.com/embed/" + item.id, title: 'YouTube video player', allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;' })) : (React.createElement("img", { className: 'img-thumb', key: item.title, src: item[thumbnailSize], alt: 'video thumbnail' }))); })) : (React.createElement("img", { src: thumbnail, alt: 'video thumbnail' })))), React.createElement("button", { type: 'button', onClick: next, className: 'right-arrow' }, "\u276F"))));
};
