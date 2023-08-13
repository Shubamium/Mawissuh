import React from 'react'
import './youtubeVideo.scss'
type Props = {
	videoId:string
}

export default function YoutubeVideo({videoId}: Props) {
  return (
	<iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} className='youtube-video-player shadow-solid' title="Talent Showcase" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
  )
}