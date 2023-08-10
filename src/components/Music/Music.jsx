import { useState } from 'react';
import './Music.css';


import extractVideoId from '../../utils/extractVideoId';
import getMusic from '../../services/music';

export default function Music() {
    const [videoTitle, setVideoTitle] = useState('Russ - Goodbye');
    const [videoId, setVideoId] = useState('nA0fXQDKyho');
  
    const handleInputChange = async (event) => {
        const url = event.target.value;
        const extractedVideoId = extractVideoId(url);

        if (extractedVideoId) {
                const response = await getMusic(extractedVideoId);
                const title = response.items[0].snippet.title;

                setVideoId(extractedVideoId);
                setVideoTitle(title);
        }
    };

    return (
        <div className='music-container'>
            <div className='music-header'>
                <span className="material-symbols-outlined">
                    music_note
                </span>
            </div>
            <div className='music-info'>
                <h1 className='video-title'>{videoTitle || 'Title'}</h1> 
            </div>
            <input placeholder='Cole o link da sua música (youtube)' onChange={handleInputChange} />
            {videoId && (
                <div className='video-container'>
                    <iframe
                        title={videoTitle}
                        width="300"
                        height="170"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            )}
        </div>
    );
}
