import { ExperienceCard } from "../components/cards/experience-card"
import { fetchDataFromSupabase, fetchImageUrl } from '../utils/supabase/dataService'

export const ActivitiesList = async () => {
    try {
        const data = await fetchDataFromSupabase() || []
        const urlsPromises = data.map(activity => fetchImageUrl(activity.id))
        const urls = await Promise.all(urlsPromises)

        const getAllActivities = () => {
            return data.map((item, index) =>
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