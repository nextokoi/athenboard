import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { AuthButtonServer } from '@/app/components/auth/auth-button-server'
import { redirect } from 'next/navigation'

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
			<header className="bg-[url('https://ofrkgmwhpmpxhpjhnlro.supabase.co/storage/v1/object/public/user_images/hero.webp?t=2024-03-28T14%3A50%3A12.791Z')] w-full h-screen bg-cover flex flex-col justify-around">
				<h4 className="text-4xl font-medium text-balanc text-[#261A00] ml-5" >
					Find the experiences that appeal to you
				</h4>
				<div className='ml-5'>
					<HorizontalScroll>
						<ExperienceHeroCard
							sourceImg='https://ofrkgmwhpmpxhpjhnlro.supabase.co/storage/v1/object/public/user_images/gardering.webp?t=2024-03-28T14%3A50%3A24.205Z'
							title='Gardering with Olivia'
							score='5 (100)'
							duration='2hr'
						/>
						<ExperienceHeroCard
							sourceImg='https://ofrkgmwhpmpxhpjhnlro.supabase.co/storage/v1/object/public/user_images/sculpture.webp?t=2024-03-28T14%3A50%3A58.141Z'
							title='Sculpture with James'
							score='4,5 (120)'
							duration='3hr'
						/>
						<ExperienceHeroCard
							sourceImg='https://ofrkgmwhpmpxhpjhnlro.supabase.co/storage/v1/object/public/user_images/dance.webp?t=2024-03-28T14%3A51%3A06.638Z'
							title='Dancing with Robert'
							score='5 (80)'
							duration='1hr'
						/>
						<ExperienceHeroCard
							sourceImg='https://ofrkgmwhpmpxhpjhnlro.supabase.co/storage/v1/object/public/user_images/oil.webp?t=2024-03-28T14%3A03%3A48.371Z'
							title='Oil painting with Gerard'
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
				<Link href="/experiences" className='flex justify-center items-center gap-2 bg-[#775A0B] w-1/3 h-14 rounded-lg text-2xl text-white' style={{ textDecoration: 'none', cursor: 'pointer' }}>
					<FaMagnifyingGlass className='text-2xl'/>
					Try it
				</Link>
			</section>
			<section className='flex flex-col gap-8 bg-[#9FEFFF] text-[#001F24] px-6 py-14'>
				<FeatureBlock
					title="Creative Diversity"
					description="Explore a broad range of artistic experiences, from sculpture workshops to gourmet cooking classes, all in one place."
					Icon={FaPalette}
				/>
				<FeatureBlock
					title="Connect with Talented Artists"
					description="Collaborate with talented and passionate artists who share their expertise and skills with you."
					Icon={FaPaintbrush}
				/>
				<FeatureBlock
					title="Book with Confidence"
					description="Our platform offers an easy and secure booking process, providing you with the confidence to immerse yourself in new creative adventures."
					Icon={FaCircleCheck}
				/>
				<FeatureBlock
					title="Customize Your Artistic Journey"
					description="Find experiences that suit your interests and schedule. Customize your artistic journey according to your style and preferences."
					Icon={FaGear}
				/>
			</section>
			<section className='py-14 pl-6'>
				<h3 className='text-2xl font-semibold mb-6 pr-6'>
					Uncover the diverse experiences awaiting you nearby
				</h3>
				<HorizontalScroll>
					<TagComponent label='Sculpture' />
					<TagComponent label='Pottery' />
					<TagComponent label='Food' />
					<TagComponent label='Gardering' />
					<TagComponent label='Dance' />
					<TagComponent label='Oil paiting' />
					<TagComponent label='Photography' />
					<TagComponent label='Gallery' />
					<TagComponent label='Jewellery' />
					<TagComponent label='Yoga' />
				</HorizontalScroll>
				<h3 className='text-2xl font-semibold my-6 pr-6'>
					The Top-Rated Experiences
				</h3>
				<HorizontalScroll>
					<ExperienceCard
						sourceImg='https://ofrkgmwhpmpxhpjhnlro.supabase.co/storage/v1/object/sign/user_images/pottery.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyX2ltYWdlcy9wb3R0ZXJ5LndlYnAiLCJpYXQiOjE3MTE2MzEyOTEsImV4cCI6MzE3MDQwMDk1MjkxfQ.CgN72U3u11GSdKQS_dw-wIwCn_N0oL3j34poGRn2Ck4&t=2024-03-28T13%3A08%3A11.309Z'
						score='5 (100)'
						title='Pottery with Ava'
						description="Dive into the magic of clay in my ceramics workshop. Together, we'll breathe life into your creativity as you shape unique pieces..."
						size={60}
					/>
					<ExperienceCard
						sourceImg='https://ofrkgmwhpmpxhpjhnlro.supabase.co/storage/v1/object/public/user_images/gallery.webp?t=2024-03-28T14%3A02%3A25.587Z'
						score='5 (80)'
						title='Art Gallery Guide with Sofia'
						description="Explore the richness of local art with our Gallery Tour. Discover carefully selected galleries, where each piece tells its own story..."
						size={60}
					/>
					<ExperienceCard
						sourceImg='https://ofrkgmwhpmpxhpjhnlro.supabase.co/storage/v1/object/public/user_images/food.webp?t=2024-03-28T14%3A03%3A22.081Z'
						score='5 (60)'
						title='Cooking with William'
						description="Join me in discovering a universe of flavors and culinary techniques. From the secrets of Asian cuisine to Mediterranean delights..."
						size={60}
					/>
					<ExperienceCard
						sourceImg='https://ofrkgmwhpmpxhpjhnlro.supabase.co/storage/v1/object/public/user_images/yoga.webp?t=2024-03-28T14%3A52%3A31.169Z'
						score='5 (70)'
						title='Yoga with Emily'
						description="I invite you to disconnect from the outside world and reconnect with yourself through yoga. Together, we'll explore the strength and flexibility..."
						size={60}
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
