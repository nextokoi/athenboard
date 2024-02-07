import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { AuthButtonServer } from '@/app/components/auth-button-server'
import { redirect } from 'next/navigation'
import SearchIcon from '@mui/icons-material/Search';
import PaletteIcon from '@mui/icons-material/Palette';
import BrushIcon from '@mui/icons-material/Brush';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import { FeatureBlock } from './components/feature-block';
import { ExperienceCard } from './components/experience-card';
import { ClickableChip } from './components/clickable-chip';
import { ExperienceHeroCard } from './components/experience-hero-card';
import { HorizontalScroll } from './components/horizontal-scroll';

export default async function Home() {
	const supabase = createServerComponentClient({ cookies })
	const { data: { session } } = await supabase.auth.getSession()

	/* 	if (session === null ){
			redirect('/login')
		} */

	/* const { data: activities } = await supabase.from('activities').select() */
	return (
		<main>
			{/* <AuthButtonServer /> */}
			{/* <pre>{JSON.stringify(activities, null, 2)}</pre> */}
			<header className="bg-[url('/hero.webp')] w-full h-screen bg-cover flex flex-col justify-around">
				<h4 className="text-4xl font-medium text-balanc text-[#261A00] ml-5" >
					Find the experiences that appeal to you
				</h4>
				<div className='ml-5'>
					<HorizontalScroll>
						<ExperienceHeroCard
							sourceImg='./gardering.webp'
							title='Gardering with Olivia'
							score='5 (100)'
							duration='2hr'
						/>
						<ExperienceHeroCard
							sourceImg='./sculpture.webp'
							title='Sculpture with James'
							score='4,5 (120)'
							duration='3hr'
						/>
						<ExperienceHeroCard
							sourceImg='./dance.webp'
							title='Dancing with James'
							score='5 (80)'
							duration='1hr'
						/>
						<ExperienceHeroCard
							sourceImg='./pottery.webp'
							title='Pottery with Ava'
							score='5 (100)'
							duration='2hr'
						/>
					</HorizontalScroll>
				</div>
			</header>
			<section className='flex flex-col justify-center items-center gap-5 py-14'>
				<h4 className='text-3xl font-medium text-[#171D1E]'>
					Explore the Art
				</h4>
				<button type='button' className='flex justify-center items-center gap-2 bg-[#775A0B] w-1/3 h-14 rounded-lg text-2xl text-white'>
					<SearchIcon sx={{ fontSize: 30 }} /> Try it
				</button>
			</section>
			<section className='flex flex-col gap-8 bg-[#9FEFFF] text-[#001F24] px-6 py-14'>
				<FeatureBlock
					title="Creative Diversity"
					description="Explore a broad range of artistic experiences, from sculpture workshops to gourmet cooking classes, all in one place."
					Icon={PaletteIcon}
				/>
				<FeatureBlock
					title="Connect with Talented Artists"
					description="Collaborate with talented and passionate artists who share their expertise and skills with you."
					Icon={BrushIcon}
				/>
				<FeatureBlock
					title="Book with Confidence"
					description="Our platform offers an easy and secure booking process, providing you with the confidence to immerse yourself in new creative adventures."
					Icon={CheckCircleIcon}
				/>
				<FeatureBlock
					title="Customize Your Artistic Journey"
					description="Find experiences that suit your interests and schedule. Customize your artistic journey according to your style and preferences."
					Icon={SettingsIcon}
				/>
			</section>
			<section className='py-14 pl-6'>
				<h3 className='text-2xl font-semibold mb-6 pr-6'>
					Uncover the diverse experiences awaiting you nearby
				</h3>
				<HorizontalScroll>
					<ClickableChip label='Sculpture' />
					<ClickableChip label='Pottery' />
					<ClickableChip label='Food' />
					<ClickableChip label='Gardering' />
					<ClickableChip label='Dance' />
					<ClickableChip label='Oil paiting' />
					<ClickableChip label='Photography' />
					<ClickableChip label='Gallery' />
					<ClickableChip label='Jewellery' />
					<ClickableChip label='Yoga' />
				</HorizontalScroll>
				<h3 className='text-2xl font-semibold my-6 pr-6'>
					The Top-Rated Experiences
				</h3>
				<HorizontalScroll>
					<ExperienceCard
						sourceImg='./pottery.webp'
						score='5 (100)'
						title='Pottery with Ava'
						description="Dive into the magic of clay in my ceramics workshop. Together, we'll breathe life into your creativity as you shape unique pieces..."
					/>
					<ExperienceCard
						sourceImg='./gallery.webp'
						score='5 (80)'
						title='Art Gallery Guide with Sofia'
						description="Explore the richness of local art with our Gallery Tour. Discover carefully selected galleries, where each piece tells its own story..."
					/>
					<ExperienceCard
						sourceImg='./food.webp'
						score='5 (60)'
						title='Cooking with William'
						description="Join me in discovering a universe of flavors and culinary techniques. From the secrets of Asian cuisine to Mediterranean delights..."
					/>
					<ExperienceCard
						sourceImg='./yoga.webp'
						score='5 (70)'
						title='Yoga with Emily'
						description="I invite you to disconnect from the outside world and reconnect with yourself through yoga. Together, we'll explore the strength and flexibility..."
					/>
				</HorizontalScroll>
				<div className='pr-6'>
					<button type="button" className='bg-[#3B6939] text-white w-full p-4 rounded-lg my-8'>
						Show all
					</button>
				</div>
			</section>
		</main>
	)
}
