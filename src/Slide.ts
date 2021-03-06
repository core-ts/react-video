import * as React from 'react';
import '../Slide.css';
import { ListResult, PlaylistVideo } from './model';
import { PlayButton } from './PlayButton';

export interface SlideProps {
  id: string;
  thumbnail?: string;
  thumbnailSize: string;
  max?: number;
  getVideos: (playlistId: string, max?: number, nextPageToken?: string, fields?: string[]) => Promise<ListResult<PlaylistVideo>>;
}
export const Slide = (props: SlideProps) => {
  const { id, thumbnail, thumbnailSize } = props;
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [play, setPlay] = React.useState(false);
  const [videos, setVideos] = React.useState<PlaylistVideo[]>([]);
  const [length, setLength] = React.useState(3);
  const [fetching, setFetching] = React.useState(false);

  React.useEffect(() => {
    (() => {
      if (id && fetching) {
        const max = props.max && props.max > 0 ? props.max : 3;
        props.getVideos(id, max).then(res => {
          setVideos(res.list);
          setLength(res.list.length);
        });
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetching]);

  const next = () => {
    if (currentIndex < (length - 1)) {
      setCurrentIndex(prevState => prevState + 1);
    }
    setPlay(false);
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1);
    }
    setPlay(false);
  };

  const handlePlayVideo = () => {
    setPlay(true);
  };

  const handleFetch = () => {
    setFetching(true);
  };
  return (React.createElement('div', { className: 'carousel-container cover', style: { width: '100%' }, onMouseEnter: handleFetch },
  React.createElement('div', { className: 'carousel-wrapper' },
      React.createElement('button', { type: 'button', onClick: prev, className: 'left-arrow' }, '\u276E'),
      !play && React.createElement('div', { className: 'play-container', onClick: handlePlayVideo },
          React.createElement(PlayButton, null)),
      React.createElement('div', { className: 'carousel-content-wrapper' },
          // tslint:disable-next-line:only-arrow-functions
          React.createElement('div', { className: 'carousel-content', style: { transform: 'translateX(-' + currentIndex * 100 + '%)' } }, videos && videos.length > 0 ? (videos.map(function (item, index) { return (currentIndex === index && play ? (React.createElement('iframe', { key: item.title, width: '200', height: '200', src: currentIndex === index ? 'https://www.youtube.com/embed/' + item.id + '?autoplay=1' : 'https://www.youtube.com/embed/' + item.id, title: 'YouTube video player', allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;' })) : (React.createElement('img', { className: 'img-thumb', key: item.title, src: (item as any)[thumbnailSize], alt: 'video thumbnail' }))); })) : (React.createElement('img', { src: thumbnail, alt: 'video thumbnail' })))),
      React.createElement('button', { type: 'button', onClick: next, className: 'right-arrow' }, '\u276F'))));
/*
  return (
    <div className='carousel-container cover' style={{ width: '100%' }} onMouseEnter={handleFetch}>
      <div className='carousel-wrapper'>
        <button type='button' onClick={prev} className='left-arrow'>
          &#10094;
        </button>
        {
          !play && <div className='play-container' onClick={handlePlayVideo}>
            <PlayButton />
          </div>
        }
        <div className='carousel-content-wrapper'>
          <div className='carousel-content' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {
              videos && videos.length > 0 ? (
                videos.map((item, index) => (
                  currentIndex === index && play ? (
                    <iframe
                      key={item.title}
                      width='200'
                      height='200'
                      src={currentIndex === index ? `https://www.youtube.com/embed/${item.id}?autoplay=1` : `https://www.youtube.com/embed/${item.id}`}
                      title='YouTube video player'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
                    />
                  ) : (
                    <img className='img-thumb' key={item.title} src={(item as any)[thumbnailSize]} alt='video thumbnail'/>
                  )
                ))
              ) : (
                <img src={thumbnail} alt='video thumbnail'/>
              )
            }
          </div>
        </div>
        <button type='button' onClick={next} className='right-arrow'>
          &#10095;
        </button>
      </div>
    </div>
  );*/
};
