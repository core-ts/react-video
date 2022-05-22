import * as React from 'react';
import '../filter.css';
var types = [{ 'video': 'Video' }, { 'channel': 'Channel' }, { 'playlist': 'Play List' }];
var durations = [{ 'long': 'Over 20 Minutes' }, { 'medium': '4-20 Minutes' }, { 'short': 'Below 4 Minutes' }];
var orders = [{ 'relevance': 'Relevance' }, { 'date': 'Date' }, { 'rating': 'Rank' }];
export var FilterBar = function (props) {
  return (React.createElement(React.Fragment, null,
    React.createElement("div", { className: "filter-container " + props.searchParams.get('filter') },
      React.createElement("div", { className: 'filter-type' },
        React.createElement("div", { className: 'filter-group-name' },
          React.createElement("h4", null, props.resource ? props.resource.search_type : 'Search Type')),
        types.map(function (type) {
          return React.createElement("div", { key: Object.keys(type)[0], className: props.filter.type === Object.keys(type)[0] ? 'selected' : '', onClick: function () { return props.handleFilterType(Object.keys(type)[0] === props.filter.type ? 'any' : Object.keys(type)[0]); } },
            props.resource ? props.resource['type_' + Object.keys(type)[0]] : type[Object.keys(type)[0]],
            " ",
            props.filter.type === (Object.keys(type)[0]) && React.createElement(React.Fragment, null, "\u2716"));
        })),
      React.createElement("div", { className: 'filter-type' },
        React.createElement("div", { className: 'filter-group-name' },
          React.createElement("h4", null, props.resource ? props.resource.duration : 'Duration')),
        durations.map(function (type) {
          return React.createElement("div", { key: Object.keys(type)[0], className: props.filter.duration === Object.keys(type)[0] ? 'selected' : '', onClick: function () { return props.handleFilterDuration(Object.keys(type)[0] === props.filter.duration ? 'any' : Object.keys(type)[0]); } },
            props.resource ? props.resource['video_' + Object.keys(type)[0]] : type[Object.keys(type)[0]],
            " ",
            props.filter.duration === (Object.keys(type)[0]) && React.createElement(React.Fragment, null, "\u2716"));
        })),
      React.createElement("div", { className: 'filter-type' },
        React.createElement("div", { className: 'filter-group-name' },
          React.createElement("h4", null, props.resource ? props.resource.order : 'Order')),
        orders.map(function (type) {
          return React.createElement("div", { key: Object.keys(type)[0], className: props.filter.order === Object.keys(type)[0] ? 'selected' : '', onClick: function () { return props.handleFilterOrder(Object.keys(type)[0] === props.filter.order ? 'relevance' : Object.keys(type)[0]); } },
            props.resource ? props.resource['sort_' + Object.keys(type)[0]] : type[Object.keys(type)[0]],
            " ",
            props.filter.order === (Object.keys(type)[0]) && React.createElement(React.Fragment, null, "\u2716"));
        })))));
};
