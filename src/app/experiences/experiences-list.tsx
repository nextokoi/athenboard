import { ExperienceCard } from "../components/cards/experience-card"
import { fetchDataFromSupabase, fetchImageUrl } from '../utils/supabase/dataService'

type ExperiencesListProps = {
    searchTerm: { [key: string]: string | string[] | undefined }
}

export const ExperiencesList = async ({ searchTerm } : ExperiencesListProps) => {
    try {
        const data = await fetchDataFromSupabase() || []
        const urlsPromises = data.map(activity => fetchImageUrl(activity.id))
        const urls = await Promise.all(urlsPromises)

        const search = typeof searchTerm.search === 'string' ? searchTerm.search : undefined
        const lowercaseSearch = search ? search.toLowerCase() : ''
     
        const filteredExperiences = data.filter(item => 
            item.title.toLowerCase().includes(lowercaseSearch)
        )

        const getAllActivities = () => {
            return filteredExperiences.map((item, index) =>
                <ExperienceCard
                    key={item.id}
                    id={item.id}
                    sourceImg={urls[index]}
                    score='5 (100)'
                    title={item.title}
                    description={`Starting from ${item.price}€ per person`}
                    size={40}
                />
            )
        }
    
        return (
            <>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {getAllActivities()}
                </div>
            </>
        )
    } catch (error) {
        console.error("Error fetching data:", error);
        return <p>Error fetching data</p>;
    }
    
}