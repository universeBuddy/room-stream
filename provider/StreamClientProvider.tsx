import {
    StreamCall,
    StreamVideo,
    StreamVideoClient,
    User,
  } from '@stream-io/video-react-sdk';
import { ReactNode, useEffect, useState } from 'react';
  
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
  const userId = 'user-id';
  const token = 'authentication-token';
  const user: User = { id: userId };
  
  
 const StreamVideoProvider = ({children}:{children:ReactNode}) => {



    useEffect(()=>{

    },[]);
    const [videoClient, setVideoClient] = useState<StreamVideoClient>()
    return (
      <StreamVideo client={videoClient}>
        
      </StreamVideo>
    );
  };
  export default StreamVideoProvider