import { BreadcrumbComponent } from "../components/ui/breadcrumbs"
import { SearchBarComponent } from "../components/ui/searchbar"
import { TagComponent } from "../components/ui/tag"

export const ExperiencesLayout = ({ children } : {children: React.ReactNode}) => {
    return (
        <>
            <header className='py-8 flex flex-col gap-3 px-5'>
                <SearchBarComponent/>
                <BreadcrumbComponent />
                <div className='flex justify-between sm:justify-center sm:gap-5'>  
                    <TagComponent label='Activity type' />
                    <TagComponent label='Price' />
                    <TagComponent label='Available languages' />
                </div>
            </header>
            <main className='flex flex-col items-center gap-10 pb-10'>
                {children}
            </main>
        </>
    )
}