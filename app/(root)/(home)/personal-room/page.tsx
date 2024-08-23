"use client";
import { Button } from "@/components/ui/button";
import { toast, useToast } from "@/components/ui/use-toast";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";

const Table = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className=" flex flex-col items-start gap-2 xl:flex-row">
    <h1 className="text-base font-medium text-sky-1 lg:text-xl xl:min-w-32">
      {title}:
    </h1>
    <h1 className="truncate tetx-sm font-bold max-sm:max-w-[320px] lg:text-xl">
      {" "}
      {description}:
    </h1>
  </div>
);
const PersonalRoom = () => {
  const { user } = useUser();
  const meetingId = user?.id;
  const { toast } = useToast();
  const { call } = useGetCallById(meetingId!);
  const client = useStreamVideoClient();

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}?personal=true`;

  const startRoom = async () => {
    if (!client || !user) return;

    const newCall = client.call("default", meetingId!);

    if(!call){
      await newCall.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });
    }
  
  };
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Personal Room</h1>

      <div className="flex w-full flex-col gap-8 xl:max-w-[900px]">
        <Table title="Topic" description={`${user?.username}'s meeting Room`} />
        <Table title="Meeting ID" description={meetingId!} />
        <Table title="Invite Link" description={meetingLink} />

        <div className="flex gap-5">
          <Button className="bg-blue-1" onClick={startRoom}>
            Start Meeting
          </Button>
          <Button
            className="bg-dark-3"
            onClick={() => {
              navigator.clipboard.writeText(meetingLink);
              toast({
                title: "Link Copied",
              });
            }}
          >
            Copy Invitation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PersonalRoom;
