import React from 'react'
import './video.css'

export default function Video() {
  return (
    <div class="background-video">
  <video autoplay loop muted playsinline id="myVideo">
    <source src="./background21.mp4" type="video/mp4"/>
    Your browser does not support the video tag.
  </video>
  <div class="content">
    <h1>Bienvenue sur mon site</h1>
  </div>
</div>
  )
}
