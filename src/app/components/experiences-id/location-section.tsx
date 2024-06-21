"use client"

import { Divider } from "antd"
import { DynamicMapLeaflet } from "./leaflet-map"
import { useState } from "react"
import { Spin } from "antd"
export const LocationSection = () => {

  const [mapLoading, setMapLoading] = useState(true)
  return (
    <div className="pr-5">
      <div className="flex flex-col gap-10 py-5">
        <h5 className="text-2xl font-medium">Where will you go</h5>
        {mapLoading && <Spin className="my-3"/>}
        <DynamicMapLeaflet onLoad={() => setMapLoading(false)}/>
        <p className="text-lg">
          My workshop is around here, I&apos;ll see you there.
        </p>
      </div>
      <Divider />
    </div>
  )
}
