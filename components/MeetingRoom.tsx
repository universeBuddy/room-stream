import { PaginatedGridLayout, SpeakerLayout } from "@stream-io/video-react-sdk";
import React, { useState } from "react";

type CallLayoutRoom = "grid" | "speker-left" | "speker-right";
const MeetingRoom = () => {
  const [layout, setLayout] = useState<CallLayoutType>("speker-left");

  const [showParticipants, setShowParticipants] = useState(false)


const CallLayout = ()=>{


  switch(layout){
    case 'grid':
      return <PaginatedGridLayout />

      case 'speker-right':
        return <SpeakerLayout 
        participantsBarPosition='left' />
      default:
        return <SpeakerLayout 
        participantsBarPosition='right' />
      
  }
}



  return (
    <section className="relative h-screen w-full oveflow-hidden pt-4 text-white">
      <div className="relative flex size-full items-center justify-center">
        <div className="flex size-full max-w-[1000px] items-center ">
          <CallLayout />
        </div>
        <div className="h-[calc(100vh-80px)] hidden ml-2"></div>
      </div>
    </section>
  );
};

export default MeetingRoom;
