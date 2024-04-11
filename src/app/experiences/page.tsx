import { ExperiencesList } from './experiences-list';
import { ClientComponent } from './client-component';

export default function Experiences({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
    return (
        <>
            <ClientComponent>
                <ExperiencesList searchTerm={ searchParams }/>
            </ClientComponent>
        </>
    )
}