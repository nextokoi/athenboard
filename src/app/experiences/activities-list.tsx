'use client'
import { ExperienceCard } from "../components/cards/experience-card"
import { useEffect, useState } from "react"
import { fetchDataFromSupabase, fetchImageUrl } from '../services/dataService'

interface YourDataType {
    id: number,
    name: string,
    price: number
}

export const ActivitiesList = () => {
    const [data, setData] = useState<YourDataType[]>([])
    const [imageURL, setImageURL] = useState<string[]>([])

    useEffect(() => {
        const getData = async () => {
            try {
                const fetchedData = await fetchDataFromSupabase()
                setData(fetchedData || [])
            } catch (error) {
                console.error('Error al obtener datos: ', error)
            }
        }
        getData()
    }, [])

    useEffect(() => {
        const getImageUrl = async () => {
            try {
                const urlsPromises = data.map(activity => fetchImageUrl(activity.id))
                const urls = await Promise.all(urlsPromises)
                setImageURL(urls || [])
            } catch (error) {
                console.error('Error al obtener la url de la imagen ', error)
            }
        }
        getImageUrl()
    }, [data])

    const getAllActivities = () => {
        return data.map((item, index) =>
            <ExperienceCard
                key={item.id}
                sourceImg={imageURL[index]}
                score='5 (100)'
                title={item.name}
                description={`Starting from ${item.price}€ per person`}
                size={40}
            />
        )
    }

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {getAllActivities()}
        </div>
    )
}