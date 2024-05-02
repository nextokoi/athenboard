import { fetchDataFromSupabase, fetchImageUrl } from '../utils/supabase/dataService';
import { ExperienceCard } from '../components/cards/experience-card';
import { SearchBarComponent } from '../components/ui/searchbar';
import { BreadcrumbComponent } from '../components/ui/breadcrumbs';
import { TagComponent } from '../components/ui/tag';
import { ButtonComponent } from '../components/ui/button';
import Link from 'next/link';

export const revalidate = 60

export default async function Experiences({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
    const data = await fetchDataFromSupabase() || []
    const imageUrlsPromises = data.map(activity => fetchImageUrl(activity.id))
    const imageUrls = await Promise.all(imageUrlsPromises)

    const experiencesWithImages = data.map((experience, index) => {
        return {
            ...experience,
            imageUrl: imageUrls[index]
        }
    })

    const search = typeof searchParams.search === 'string' ? searchParams.search : undefined
    const lowercaseSearch = search ? search.toLowerCase() : ''

    let filteredExperiences = experiencesWithImages.filter(item =>
        item.title.toLowerCase().includes(lowercaseSearch)
    )
    const filterByCriteria = (experiences: typeof filteredExperiences, key: string, value: string) => {
        return experiences.filter(item => item[key]?.includes(value))
    }

    for (const [key, value] of Object.entries(searchParams)) {
        if (typeof value === 'string') {
            switch (key) {
                case 'date':
                case 'category':
                case 'availables_languages':
                    filteredExperiences = filterByCriteria(filteredExperiences, key, value)
                    break
                default:
                    break
            }
        }
    }

    if (filteredExperiences.length === 0) {
        return (
            <div className='min-h-screen flex flex-col items-center justify-center gap-5'>
                <p className='text-body-2'>No experiences found</p>
                <Link href='/experiences' className='border border-slate-500 rounded-lg px-5 py-2 bg-slate-200'>Back to experiences</Link>
            </div>
        )

    }

    const getAllExperiences = () => {
        return filteredExperiences.map((item) =>
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

    const experiencesClassName = lowercaseSearch ? 'flex flex-wrap justify-center' : 'grid grid-cols-2 sm:grid-cols-3'
    return (
        <>
            <header className='py-8 flex flex-col gap-3 px-5'>
                <SearchBarComponent />
                <BreadcrumbComponent />
                <div className='flex justify-between sm:justify-center sm:gap-5'>
                    <TagComponent label='Activity type' />
                    <TagComponent label='Price' />
                    <TagComponent label='Available languages' />
                </div>
            </header>
            <main className='flex flex-col items-center gap-10 pb-10'>
                <div className={`${experiencesClassName} gap-4`}>
                    {getAllExperiences()}
                </div>
                {filteredExperiences.length >= 6 ? <ButtonComponent title='Show more' bgColor='#3B6939' width='w-full' /> : ''}
            </main>
        </>
    )
}