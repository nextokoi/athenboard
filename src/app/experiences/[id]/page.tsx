import { Divider } from "keep-react";
import { CarouselComponent } from "../../components/ui/carousel";
import { BreadcrumbComponent } from "../../components/ui/breadcrumbs";
import { ExperienceHeader } from "../../components/experiences-id/experience-header";
import { HostDetails } from "../../components/experiences-id/host-details";
import { ExperienceDescription } from "../../components/experiences-id/experience-description";
import { IncludesSection } from "../../components/experiences-id/includes-section";
import { AccesibilitySection } from "../../components/experiences-id/accesibility-section";
import { HostBio } from "../../components/experiences-id/host-bio";
import { LocationSection } from "../../components/experiences-id/location-section";
import { ReviewsSection } from "../../components/experiences-id/reviews-section";
import { AvailableDatesSection } from "../../components/experiences-id/available-dates-section";
import { CancellationPolicy } from "../../components/experiences-id/cancellation-policy";
import { FaFlag } from "react-icons/fa6";
import { fetchImageUrl, fetchOneExperience, fetchOneArtist, fetchReviews, fetchScheduleDates } from "@/app/utils/supabase/dataService";

interface DetailsProps {
    params: { id: string }
}

export const revalidate = 60;

export const fetchExperienceData = async (id: string) => {
    try {
        const experience = await fetchOneExperience(id);
        
        if (!experience) {
            throw new Error('Experience not found');
        }

        const [imageUrl, reviews, artist, schedule_dates] = await Promise.all([
            fetchImageUrl(id),
            fetchReviews(id),
            fetchOneArtist(experience.artist_id),
            fetchScheduleDates(id)
        ]);

        if (!experience || !imageUrl || !reviews || !artist || !schedule_dates) {
            throw new Error('Incomplete data fetched');
        }

        return {
            experience,
            reviews,
            artData: {
                ...experience,
                ...artist,
                schedule_dates,
                imageUrl
            }
        };
    } catch (error) {
        console.error('Error fetching experience data: ', error.message);
        throw new Error('Failed to fetch experience data');
    }
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const  renderExperienceMainContent = (experience: any, artData: any, reviews: any) => {
    return (
        <>
            <BreadcrumbComponent data={experience} />
            <CarouselComponent data={artData.imageUrl} />
            <main className="pl-5 pb-10">
                <ExperienceHeader data={experience} />
                <HostDetails data={artData} />
                <ExperienceDescription data={experience} />
                <IncludesSection />
                <AccesibilitySection data={experience} />
                <HostBio data={artData} />
                <LocationSection />
                <ReviewsSection data={reviews} />
                <AvailableDatesSection data={artData} />
                <CancellationPolicy />
                <Divider />
                <p className="text-body-2 flex items-center gap-3 font-bold pt-5">
                    <FaFlag className="text-xl" />Report this experience
                </p>
            </main>
        </>
    );
};

export default async function Details({ params }: DetailsProps) {
    const { id } = params;

    try {
        const { experience, reviews, artData } = await fetchExperienceData(id);

        if (!experience || !reviews || !artData) {
            throw new Error('Missing data for the experience');
        }

        return renderExperienceMainContent(experience, artData, reviews);
    } catch (error) {
        return (
            <div>
                <h2>Error loading experience details</h2>
                <p>Please try again later.</p>
            </div>
        );
    }
}
