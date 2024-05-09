// VideoGallery.js
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

// List of TikTok video URLs (replace with actual URLs)
const videos = [
  'https://www.youtube.com/watch?v=Ao7e4iisKMs&embeds_referring_euri=https%3A%2F%2Fchisfis-template.vercel.app%2F&source_ve_path=MzY4NDIsMjg2NjY&feature=emb_logo',
  'https://www.youtube.com/watch?v=GICl7v-Ulcw&t=136s',
  'https://www.youtube.com/watch?v=81oUtxybYLI'
];

function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <>
    
    <h2 class="text-3xl md:text-4xl font-semibold ml-12 mt-8 mb-8">🎬 The Videos</h2>
    <span class="mt-2 md:mt-4 font-normal block text-base sm:text-lg text-neutral-500 dark:text-neutral-400 ml-12">Check out our hottest videos. View more and share more new perspectives on just about any topic. Everyone’s welcome.</span>
    <div className="flex flex-col md:flex-row items-center md:items-start justify-evenly p-6 bg-white shadow-xl rounded-lg">
        
      {/* Main Video Section */}
      <div className="flex-1 p-4 rounded-lg shadow-md border-yellow-500 border">
        <ReactPlayer
          url={selectedVideo}
          controls
          playing
          className="rounded-lg overflow-hidden"
          width="100%"
          height="400px"
        />
      </div>

      {/* Video Thumbnails */}
      <div className="flex flex-row md:flex-col mt-4 md:mt-0 md:ml-6 space-x-4 md:space-x-0 md:space-y-4 overflow-x-auto">
        {videos.map((video, index) => (
          <div
            key={index}
            onClick={() => setSelectedVideo(video)}
            className={`cursor-pointer flex items-center justify-center p-2 rounded-lg bg-hite hover:bg-gray-300 transition duration-150 ease-in-out ${
              selectedVideo === video ? 'border-2 border-yellow-500' : ''
            }`}
          >
            <PlayArrowIcon className="text-yellow-500" />
            <span className="ml-2 text-sm font-medium">Video {index + 1}</span>
          </div>
        ))}
      </div>
    </div></>
    
  );
}

export default VideoGallery;
