import * as React from 'react';
import '../filter.css';
import { Duration, ItemType, SortType, StringMap } from './model';

const types = [{ 'video': 'Video' }, { 'channel': 'Channel' }, { 'playlist': 'Play List' }];
const durations = [{ 'long': 'Over 20 Minutes' }, { 'medium': '4-20 Minutes' }, { 'short': 'Below 4 Minutes' }];
const orders = [{ 'relevance': 'Relevance' }, { 'date': 'Date' }, { 'rating': 'Rank' }];

export interface Filter {
  type: ItemType;
  duration: Duration;
  order?: SortType;
  nextPageToken?: string;
  q?: string;
}
export interface FilterBarProps {
  filter: Filter;
  searchParams: URLSearchParams;
  resource?: StringMap;
  handleFilterType: (value: ItemType) => Promise<void>;
  handleFilterDuration: (value: Duration) => Promise<void>;
  handleFilterOrder: (value: SortType) => Promise<void>;
}

export const FilterBar = (props: FilterBarProps) => {
  return (React.createElement(React.Fragment, null,
    React.createElement('div', { className: 'filter-container ' + props.searchParams.get('filter') },
        React.createElement('div', { className: 'filter-type' },
            React.createElement('div', { className: 'filter-group-name' },
                React.createElement('h4', null, props.resource ? props.resource.search_type : 'Search Type')),
            // tslint:disable-next-line:only-arrow-functions
            types.map(function (type) {
                return React.createElement('div', { key: Object.keys(type)[0], className: props.filter.type === Object.keys(type)[0] ? 'selected' : '', onClick () { return props.handleFilterType(Object.keys(type)[0] === props.filter.type ? 'any' : Object.keys(type)[0] as any); } },
                    (type as any)[Object.keys(type)[0]],
                    ' ',
                    props.filter.type === (Object.keys(type)[0]) && React.createElement(React.Fragment, null, '\u2716'));
            })),
        React.createElement('div', { className: 'filter-type' },
            React.createElement('div', { className: 'filter-group-name' },
                React.createElement('h4', null, props.resource ? props.resource.duration : 'Duration')),
            // tslint:disable-next-line:only-arrow-functions
            durations.map(function (type) {
                return React.createElement('div', { key: Object.keys(type)[0], className: props.filter.duration === Object.keys(type)[0] ? 'selected' : '', onClick () { return props.handleFilterDuration(Object.keys(type)[0] === props.filter.duration ? 'any' : Object.keys(type)[0] as any); } },
                    (type as any)[Object.keys(type)[0]],
                    ' ',
                    (type as any)[Object.keys(type)[0]],
                    ' ',
                    props.filter.duration === (Object.keys(type)[0]) && React.createElement(React.Fragment, null, '\u2716'));
            })),
        React.createElement('div', { className: 'filter-type' },
            React.createElement('div', { className: 'filter-group-name' },
                React.createElement('h4', null, props.resource ? props.resource.order : 'Order')),
            // tslint:disable-next-line:only-arrow-functions
            orders.map(function (type) {
                return React.createElement('div', { key: Object.keys(type)[0], className: props.filter.order === Object.keys(type)[0] ? 'selected' : '', onClick () { return props.handleFilterOrder(Object.keys(type)[0] as any === props.filter.order ? 'relevance' : Object.keys(type)[0] as any); } },
                    (type as any)[Object.keys(type)[0]],
                    ' ',
                    (type as any)[Object.keys(type)[0]],
                    ' ',
                    props.filter.order === (Object.keys(type)[0]) && React.createElement(React.Fragment, null, '\u2716'));
            })))));
  /*
  return (
    <>
      <div className={`filter-container ${props.searchParams.get('filter')}`}>
        <div className='filter-type'>
          <div className='filter-group-name'>
            <h4>{props.resource ? props.resource.search_type : 'Search Type'}</h4>
          </div>
          {types.map((type: any) =>
            <div key={Object.keys(type)[0]} className={props.filter.type === Object.keys(type)[0] ? 'selected' : ''} onClick={() => props.handleFilterType(Object.keys(type)[0] === props.filter.type ? 'any' : Object.keys(type)[0] as ItemType)}>
              {type[Object.keys(type)[0]]} {props.filter.type === (Object.keys(type)[0]) && <>&#10006;</>}
            </div>
          )}
        </div>
        <div className='filter-type'>
          <div className='filter-group-name'>
            <h4>{props.resource ? props.resource.duration : 'Duration'}</h4>
          </div>
          {durations.map((type: any) =>
            <div key={Object.keys(type)[0]} className={props.filter.duration === Object.keys(type)[0] ? 'selected' : ''} onClick={() => props.handleFilterDuration(Object.keys(type)[0] === props.filter.duration ? 'any' : Object.keys(type)[0] as Duration)}>
              {type[Object.keys(type)[0]]} {type[Object.keys(type)[0]]} {props.filter.duration === (Object.keys(type)[0]) && <>&#10006;</>}
            </div>
          )}
        </div>
        <div className='filter-type'>
          <div className='filter-group-name'>
            <h4>{props.resource ? props.resource.order : 'Order'}</h4>
          </div>
          {orders.map((type: any) =>
            <div key={Object.keys(type)[0]} className={props.filter.order === Object.keys(type)[0] ? 'selected' : ''} onClick={() => props.handleFilterOrder(Object.keys(type)[0] === props.filter.order ? 'relevance' : Object.keys(type)[0] as SortType)}>
              {type[Object.keys(type)[0]]} {type[Object.keys(type)[0]]} {props.filter.order === (Object.keys(type)[0]) && <>&#10006;</>}
            </div>
          )}
        </div>
      </div>
    </>
  );*/
};
