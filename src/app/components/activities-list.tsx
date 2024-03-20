'use client'
import { ExperienceCard } from "./experience-card"

export const ActivitiesList = () => {
    return (
        <div className="grid grid-cols-2 gap-8">
            <ExperienceCard
                sourceImg='./pottery.webp'
                score='5 (100)'
                title='Pottery with Ava'
                description="Starting from 60€ per person"
                size={40}
            />
            <ExperienceCard
                sourceImg='./gallery.webp'
                score='4.9 (120)'
                title='Art Gallery Tour with Alice'
                description="Starting from 20€ per person"
                size={40}
            />
            <ExperienceCard
                sourceImg='./photography.webp'
                score='5 (110)'
                title='Photograph the city with Emily'
                description="Starting from 30€ per person"
                size={40}
            />
            <ExperienceCard
                sourceImg='./food.webp'
                score='4.9 (120)'
                title='Cooking with Austin'
                description="Starting from 50€ per person"
                size={40}
            />
            <ExperienceCard
                sourceImg='./oil.webp'
                score='5 (150)'
                title='Draw in oil with William'
                description="Starting from 60€ per person"
                size={40}
            />
            <ExperienceCard
                sourceImg='./jewellery.webp'
                score='4.9 (130)'
                title='Create jewelry with Charlotte'
                description="Starting from 80€ per person"
                size={40}
            />
        </div>
    )
}