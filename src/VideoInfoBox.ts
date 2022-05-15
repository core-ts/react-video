import * as React from 'react';
import { Link } from 'react-router-dom';
import '../VideoInfoBox.css';
import { StringMap, Video } from './model';

// const channelFields = ['channelTitle', 'thumbnail'];
export interface VideoProps {
  video: Video;
  channelThumbnail?: string;
  prefix: string;
  resource?: StringMap;
  // getChannel: (id: string, fields?: string[]) => Promise<Channel | null | undefined>;
}
export function VideoInfoBox(props: VideoProps) {
  const [collapsed, setCollapsed] = React.useState(true);
  /*
  const [channel, setChannel] = React.useState<Channel>();
  React.useEffect(() => {
    (() => {
      if (props.video.channelId) {
        props.getChannel(props.video.channelId, channelFields).then(res => {
          if (res) {
            setChannel(res);
          }
        });
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
*/
  const handleClick = () => {
    setCollapsed(!collapsed);
  };
  return (React.createElement("div", { className: 'video-info-container' },
        React.createElement("div", { className: 'video-info' },
            React.createElement("h3", { className: 'video-title' }, props.video.title),
            React.createElement("div", { className: 'publish' }, props.video.publishedAt.toDateString())),
        React.createElement("div", { className: 'video-info-box' },
            React.createElement("div", { className: 'top' },
                React.createElement("img", { src: props.channelThumbnail, alt: 'Avatar', width: 48, height: 48 }),
                React.createElement("div", { className: 'channel-info' },
                    React.createElement("h4", { className: 'channel-name' },
                        React.createElement(Link, { to: "" + props.prefix + props.video.channelId }, props.video.channelTitle)))),
            React.createElement("div", { className: "video-description " + (collapsed ? 'collapsed' : 'extended') + " " },
                React.createElement("p", { dangerouslySetInnerHTML: { __html: props.video.description ? props.video.description : '' } })),
            React.createElement("span", { className: 'btn-show', onClick: handleClick }, collapsed ? (props.resource ? props.resource.show_more : 'SHOW MORE') : (props.resource ? props.resource.show_less : 'SHOW LESS')))));
/*
  return (
    <div className='video-info-container'>
      <div className='video-info'>
        <h3 className='video-title'>{props.video.title}</h3>
        <div className='publish'>{props.video.publishedAt.toDateString()}</div>
      </div>
      <div className='video-info-box'>
        <div className='top'>
          <img
            src={props.channelThumbnail}
            alt='Avatar'
            width={48}
            height={48}
          />
          <div className='channel-info'>
            <h4 className='channel-name'><Link to={`${props.prefix}${props.video.channelId}`}>{props.video.channelTitle}</Link></h4>
          </div>
        </div>
        <div className={`video-description ${collapsed ? 'collapsed' : 'extended'} `}>
          <p dangerouslySetInnerHTML={{ __html: props.video.description ? props.video.description : '' }} />
        </div>
        <span
          className='btn-show'
          onClick={handleClick}
        >
          {collapsed ? (props.resource ? props.resource.show_more : 'SHOW MORE') : (props.resource ? props.resource.show_less : 'SHOW LESS')}
        </span>
      </div>
    </div>
  );*/
}
