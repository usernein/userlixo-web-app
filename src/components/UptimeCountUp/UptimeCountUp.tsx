import { FC, useState } from "react";
// @ts-expect-error has no types
import Timer from "react-timer-wrapper";
import Timercode from "react-timecode";
import { useStore } from "zustand";
import { useStoreContext } from "@/context/useStoreContext.ts";
import { getInfo } from "@/store/selectors.ts";

interface UptimeCountUpProps {}

const UptimeCountUp: FC<UptimeCountUpProps> = () => {
  const store = useStoreContext();
  const info = useStore(store, getInfo);
  const [timeSince, setTimeSince] = useState(0);

  const now = new Date();
  const startTime = new Date((info.start_time ?? 0) * 1000);
  const diff = now.getTime() - startTime.getTime();
  const milliseconds = Math.floor(diff);

  return (
    <Timer
      active
      duration={null}
      time={milliseconds}
      onTimeUpdate={({ duration }: { duration: number }) =>
        setTimeSince(duration)
      }
    >
      <Timercode format={"HH:mm:ss"} time={timeSince} />
    </Timer>
  );
};

export default UptimeCountUp;
