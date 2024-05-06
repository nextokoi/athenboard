import { Divider } from "keep-react";
import { Map } from "./map";
export const LocationSection = () => {

  return (
    <div className="pr-5">
      <div className="flex flex-col gap-3 py-5">
        <h6 className="text-heading-6 font-medium">Where will you go</h6>
        <Map />
        <p className="text-body-2">
          My workshop is around here; i&apos;ll see you there.
        </p>
      </div>
      <Divider />
    </div>
  );
};
