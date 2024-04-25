import { ExperiencesList } from './experiences-list';
import { ExperiencesLayout } from './experiences-layout';

export default function Experiences({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
    return (
        <>
            <ExperiencesLayout>
                <ExperiencesList searchTerm={ searchParams }/>
            </ExperiencesLayout>
        </>
    )
}