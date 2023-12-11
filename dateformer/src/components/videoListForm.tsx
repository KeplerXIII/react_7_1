import { VideoProps, VideoListProps } from '../types/types'
import { PrettyDateTime as DateTime } from './dateForm'

function Video({ url, date }: VideoProps) {
  return (
    <div className='video'>
      <iframe
        src={url}
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
      ></iframe>
      <DateTime date={date} />
    </div>
  )
}

export function VideoList({ list }: VideoListProps) {
  return list.map((item, index) => <Video key={index} url={item.url} date={item.date} />)
}
