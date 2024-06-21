"use client"

import dynamic from 'next/dynamic'

const DynamicMapLeaflet = dynamic(() => import('./leaflet-map').then((mod) => mod.MapLeaflet), {
    ssr: false,
})

export { DynamicMapLeaflet }
