"use client";

import Image from "next/image";
import HomeCard from "./HomeCard";
import { useState } from "react";
import { useRouter } from "next/navigation";


const MeetingTypeList = () => {
  const router   = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isSchedulingMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={() => setMeetingState("isJoiningMeeting")}
        className="bg-orange-1"
      />
      <HomeCard
        img="/icons/schedule.svg"
        title="Schedule Meeting "
        description="Plan you Meeting"
        handleClick={() => setMeetingState("isSchedulingMeeting")}
        className="bg-blue-1"
      />
      <HomeCard
        img="/icons/recording.svg"
        title="View Recording"
        description="Check out your Recording"
        handleClick={() => setMeetingState("isJoiningMeeting")}
        className="bg-purple-1"
      />
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={() => router.push('/recordings')}
        className="bg-yellow-1"
      />
    </section>
  );
};

export default MeetingTypeList;
