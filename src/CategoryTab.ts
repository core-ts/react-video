import * as React from 'react';
import '../CategoryTab.css';
import { VideoCategory } from './model';
import { TabCategory } from './TabCategory';

export interface CategoryProps {
  data: VideoCategory[];
  setSelectedTab: React.Dispatch<React.SetStateAction<string | undefined>>;
  move?: number;
}
export function CategoryTab(props: CategoryProps) {
  const ref = React.useRef<any>(null);
  const { data, setSelectedTab } = props;
  const [previousBtnHide, setPreviousBtnHide] = React.useState(true);
  const [nextBtnHide, setNextBtnHide] = React.useState(false);

  const scroll = (scrollOffset: number) => {
    if (ref.current) {
      ref.current.scrollLeft += scrollOffset;
      const { scrollLeft, scrollWidth, clientWidth } = ref.current;
      const scrollMaxWidth = scrollWidth - clientWidth;
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
  return (React.createElement('div', { className: 'categories-tab' },
    React.createElement('div', { className: 'container' },
        React.createElement('button', { className: 'btn ' + (previousBtnHide && 'btn-hide'), onClick () { return scroll(-(props.move && props.move > 0 ? props.move : 101)); } }, '\u2039'),
        // tslint:disable-next-line:only-arrow-functions
        React.createElement('div', { className: 'tabs', ref }, data.map(function (item) {
            return (item.assignable ?
                React.createElement(TabCategory, { key: item.id, id: item.id, name: item.title, setSelectedTab }) : null);
        })),
        React.createElement('button', { className: 'btn ' + (nextBtnHide && 'btn-hide'), onClick () { return scroll(props.move && props.move > 0 ? props.move : 101); } }, '\u203A'))));
/*
  return (
    <div className='categories-tab'>
      <div className='container'>
        <button
          className={`btn ${previousBtnHide && 'btn-hide'}`}
          onClick={() => scroll(-(props.move && props.move > 0 ? props.move : 300))}
        >
          &#8249;
        </button>
        <div className='tabs' ref={ref}>
          {data.map((item: VideoCategory) => {
            return (
              item.assignable ?
                <TabCategory
                  key={item.id}
                  id={item.id}
                  name={item.title}
                  setSelectedTab={setSelectedTab}
                /> : null
            );
          })}
        </div>
        <button
          className={`btn ${nextBtnHide && 'btn-hide'}`}
          onClick={() => scroll(props.move && props.move > 0 ? props.move : 300)}
        >
          &#8250;
        </button>
      </div>
    </div>
  );*/
}
