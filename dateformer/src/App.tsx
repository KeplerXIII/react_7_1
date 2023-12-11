import { VideoListData } from './db/videoList'
import {VideoList} from './components/videoListForm'
import { useState } from 'react'

export default function App() {
  const [list] = useState(VideoListData)

  return <VideoList list={list} />
}
