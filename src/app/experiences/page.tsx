import { fetchAllExperiences, fetchImageUrl } from '../utils/supabase/dataService'
import { ExperienceCard } from '../components/cards/experience-card'
import { SearchBarComponent } from '../components/ui/searchbar'
import { BreadcrumbComponent } from '../components/ui/breadcrumbs'
import { TagComponent } from '../components/ui/tag'
import { ButtonComponent } from '../components/ui/button'

export const revalidate = 60

export default async function Experiences({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
    const data = await fetchAllExperiences() || []
    const imageUrlsPromises = data.map(activity => fetchImageUrl(activity.id))
    const imageUrls = await Promise.all(imageUrlsPromises)

    const {
        date, category, available_languages, price_min, price_max,
        sensory_needs, personal_assistants_features,
        communication_features, mobility_features
    } = searchParams

    const filterCriteria = {
        date, category, available_languages, sensory_needs,
        personal_assistants_features, communication_features, mobility_features
    }

    const search = typeof searchParams.search === 'string' ? searchParams.search : undefined
    const lowercaseSearch = search ? search.toLowerCase() : ''

    const experiencesWithImages = data.map((experience, index) => ({
        ...experience,
        imageUrl: imageUrls[index]
    }))

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const filterByCriteria = (experiences: any[], key: string, value: string) => {
        const filterValues = Array.isArray(value) ? value : [value]
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        return experiences.filter((item: { [x: string]: string | any[] }) =>
            filterValues.every(value => item[key]?.includes(value))
        )
    }

    const applyFilters = () => {
        let experiences = experiencesWithImages

        if (search) {
            experiences = experiences.filter((item: { title: string }) => item.title.toLowerCase().includes(lowercaseSearch))
        }

        if (price_min || price_max) {
            const minPrice = Number(price_min)
            const maxPrice = Number(price_max)
            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
            experiences = experiences.filter((item: { price: any }) => {
                const price = Number(item.price)
                return (!Number.isNaN(minPrice) && price >= minPrice) && (!Number.isNaN(maxPrice) && price <= maxPrice)
            })
        }

        for (const [key, value] of Object.entries(filterCriteria)) {
            if (value) {
                experiences = filterByCriteria(experiences, key, value as string)
            }
        }

        return experiences
    }

    const filteredExperiences = applyFilters()

    const renderExperienceCards = () => {
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        return filteredExperiences.map((item: { id: any; imageUrl: string[]; title: string; price: any }) =>
            <ExperienceCard
                key={item.id}
                id={item.id}
                sourceImg={item.imageUrl[0]}
                score='5 (100)'
                title={item.title}
                description={`Starting from ${item.price}€ per person`}
                size="40"
            />
        )
    }

    const renderNoExperiencesFound = () => (
        <div className='h-96 w-full flex flex-col items-center justify-center gap-5'>
            <p className='text-body-2'>No experiences found</p>
        </div>
    )

    const experiencesClassName = filteredExperiences.length < 5 ? 'flex flex-wrap justify-center' : 'grid grid-cols-2 sm:grid-cols-3'
    return (
        <>
            <header className='py-8 flex flex-col gap-3 px-5'>
                <SearchBarComponent />
                <BreadcrumbComponent />
                <div className='flex justify-center gap-4 md:gap-8'>
                    <TagComponent label='Activity type' />
                    <TagComponent label='Price' />
                    <TagComponent label='Available languages' />
                </div>
            </header>
            <main className='flex flex-col items-center gap-10 pb-10'>
                <div className={`${experiencesClassName} gap-4`}>
                    {filteredExperiences.length === 0
                        ? renderNoExperiencesFound()
                        : renderExperienceCards()
                    }
                </div>
                {filteredExperiences.length >= 6 && (
                    <ButtonComponent title='Show more' bgColor='#3B6939' width='w-full' />
                )}
            </main>
        </>
    )
}
