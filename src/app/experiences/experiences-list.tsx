import { Typography } from "keep-react"
import { ExperienceCard } from "../components/cards/experience-card"
import { ButtonComponent } from "../components/ui/button"
import { fetchDataFromSupabase, fetchImageUrl } from '../utils/supabase/dataService'

export const revalidate = 60

type ExperiencesListProps = {
    searchTerm: { [key: string]: string | string[] | undefined }
}

export const ExperiencesList = async ({ searchTerm } : ExperiencesListProps) => {
    try {
        const data = await fetchDataFromSupabase() || []
        const imageUrlsPromises = data.map(activity => fetchImageUrl(activity.id))
        const imageUrls = await Promise.all(imageUrlsPromises)

        const experiencesWithImages = data.map((experience, index) => {
            return {
                ...experience,
                imageUrl: imageUrls[index]
            }
        })

        const search = typeof searchTerm.search === 'string' ? searchTerm.search : undefined
        const lowercaseSearch = search ? search.toLowerCase() : ''
        
        const filteredExperiences = experiencesWithImages.filter(item => 
            item.title.toLowerCase().includes(lowercaseSearch)
        )

        if (filteredExperiences.length === 0){
            return <Typography variant='body-2' className="p-10">No experiences found</Typography>
        }
            
        const getAllExperiences = () => {
            return filteredExperiences.map((item) =>
                <ExperienceCard
                    key={item.id}
                    id={item.id}
                    sourceImg={item.imageUrl}
                    score='5 (100)'
                    title={item.title}
                    description={`Starting from ${item.price}€ per person`}
                    size="40"
                />
            )
        }
        
        const experiencesClassName = lowercaseSearch ? 'flex flex-wrap justify-center' : 'grid grid-cols-2 sm:grid-cols-3'

        return (
            <>
                <div className={`${experiencesClassName} gap-4`}>
                    {getAllExperiences()}
                </div>
                {filteredExperiences.length >= 6 ? <ButtonComponent title='Show more' bgColor='#3B6939' width='w-full'/> : ''}
            </>
        )
    } catch (error) {
        console.error("Error fetching data:", error);
        return <p>Error fetching data</p>;
    }
    
}