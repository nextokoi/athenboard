import { FaPalette } from "react-icons/fa6";
import { FaPaintbrush } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";

import { FeatureBlock } from './components/ui/feature-block';
import { ExperienceCard } from './components/cards/experience-card';
import { TagComponent } from './components/ui/tag';
import { ExperienceHeroCard } from './components/cards/experience-hero-card';
import { HorizontalScroll } from './components/horizontal-scroll';

import Link from 'next/link';
import { createClient } from "./utils/supabase/server";
import { Button, ConfigProvider } from "antd";

export const revalidate = 0

export default async function Home() {
	const supabase = createClient()
	const { data, error } = await supabase
		.from('experiences')
		.select(`
			id,
			title,
			duration, 
			description,
			images(
				url
			)
		`)

	if (error) throw error

	const experiencieWithFirstImage = data?.map((experience) => ({
		id: experience.id,
		title: experience.title,
		description: experience.description,
		duration: experience.duration,
		imageUrl: experience.images[0].url
	}))

	const renderExperiencesCards = () => {
		return experiencieWithFirstImage?.map((experience) => (
			<ExperienceCard
				key={experience.id}
				id={experience.id}
				title={experience.title}
				description={experience.description}
				sourceImg={experience.imageUrl}
				score={"5 (100)"}
				size={"64"}
			/>
		))
	}

	const renderHeroExperiencesCards = () => {
		const sortedExperiences = [...experiencieWithFirstImage].sort((a, b) => b.title.localeCompare(a.title))
		return sortedExperiences.map((experience) => (
			<ExperienceHeroCard
				key={experience.id}
				id={experience.id}
				title={experience.title}
				sourceImg={experience.imageUrl}
				score={"5 (100)"}
				duration={experience.duration}
			/>
		))
	}

	const tags = [
		{ id: 1, label: 'Sculpture' },
		{ id: 2, label: 'Pottery' },
		{ id: 3, label: 'Food' },
		{ id: 4, label: 'Gardering' },
		{ id: 5, label: 'Dance' },
		{ id: 6, label: 'Oil paiting' },
		{ id: 7, label: 'Photography' },
		{ id: 8, label: 'Gallery' },
		{ id: 9, label: 'Jewellery' },
		{ id: 10, label: 'Yoga' },
	]

	const featureBlocks = [
		{
			id: 1,
			icon: FaPalette,
			title: 'Creative Diversity',
			description: 'Explore a broad range of artistic experiences, from sculpture workshops to gourmet cooking classes, all in one place.',
		},
		{
			id: 2,
			icon: FaPaintbrush,
			title: 'Connect with Talented Artists',
			description: 'Collaborate with talented and passionate artists who share their expertise and skills with you.',
		},
		{
			id: 3,
			icon: FaCircleCheck,
			title: 'Book with Confidence',
			description: 'Our platform offers an easy and secure booking process, providing you with the confidence to immerse yourself in new creative adventures.',
		},
		{
			id: 4,
			icon: FaGear,
			title: 'Customize Your Artistic Journey',
			description: 'Find experiences that suit your interests and schedule. Customize your artistic journey according to your style and preferences.',
		},
	]

	const renderTags = () => {
		return tags?.map((tag) => (
			<TagComponent
				key={tag.id}
				label={tag.label}
			/>
		))
	}

	const renderFeatureBlocks = () => {
		return featureBlocks?.map((feature) => (
			<FeatureBlock
				key={feature.id}
				Icon={feature.icon}
				title={feature.title}
				description={feature.description}
			/>
		))
	}

	return (
		<main>
			<header className="bg-[url('https://ofrkgmwhpmpxhpjhnlro.supabase.co/storage/v1/object/public/user_images/hero.webp?t=2024-03-28T14%3A50%3A12.791Z')] w-full h-screen bg-cover flex flex-col justify-around md:bg-center lg:bg-top lg:bg-[url('https://ofrkgmwhpmpxhpjhnlro.supabase.co/storage/v1/object/public/user_images/hero-desktop.webp?t=2024-06-17T13%3A46%3A19.387Z')]">
				<h4 className="text-4xl font-medium text-balance text-[#261A00] ml-10 xl:ml-52 w-96" >
					Find the experiences that appeal to you
				</h4>
				<div className='ml-5 xl:ml-96'>
					<HorizontalScroll>
						{renderHeroExperiencesCards()}
					</HorizontalScroll>
				</div>
			</header>
			<section className='flex flex-col justify-center items-center gap-5 py-14'>
				<h4 className='text-3xl font-medium text-[#171D1E]'>
					Explore the Art
				</h4>
				<Link href="/experiences">
					<ConfigProvider 
						theme={{ 
							components: { 
								Button: { 
									paddingBlockLG: 30,
									paddingInlineLG: 40 
								} 
							} 
						}}
					>
						<Button size="large" className="p-8 text-lg font-medium text-[#333]" icon={<FaMagnifyingGlass className='text-2xl' />}>
							<span className="text-lg font-medium">Try it</span>
						</Button>
					</ConfigProvider>
				</Link>
			</section>
			<section className='bg-[#9FEFFF] text-[#001F24] px-6 py-14 grid justify-items-center'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center'>
					{renderFeatureBlocks()}
				</div>
			</section>
			<section className='py-14 pl-6'>
				<h3 className='text-2xl font-semibold mb-6 pr-6'>
					Uncover the diverse experiences awaiting you nearby
				</h3>
				<HorizontalScroll>
					{renderTags()}
				</HorizontalScroll>
				<h3 className='text-2xl font-semibold my-6 pr-6'>
					The Top-Rated Experiences
				</h3>
				<HorizontalScroll>
					{renderExperiencesCards()}
				</HorizontalScroll>
				{/* 				<div className='pr-6'>
					<button type="button" className='bg-[#3B6939] text-white w-full p-4 rounded-lg my-8'>
						Show all
					</button>
				</div> */}
			</section>
		</main>
	)
}
