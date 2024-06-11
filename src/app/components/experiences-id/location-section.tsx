"use client"

import { Divider } from "keep-react";
import { DynamicMapLeaflet } from "./leaflet-map";
import { useState } from "react";
import { Spin } from "antd";
export const LocationSection = () => {

  const [mapLoading, setMapLoading] = useState(true);
  return (
    <div className="pr-5">
      <div className="flex flex-col gap-3 py-5">
        <h6 className="text-heading-6 font-medium">Where will you go</h6>
        {mapLoading && <Spin className="my-3"/>}
        <DynamicMapLeaflet onLoad={() => setMapLoading(false)}/>
        <p className="text-body-2">
          My workshop is around here; i&apos;ll see you there.
        </p>
      </div>
      <Divider />
    </div>
  );
};
