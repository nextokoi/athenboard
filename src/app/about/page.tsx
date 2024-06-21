import Image from "next/image";

export default function Page() {

    const aboutBlocks = [
        {
            id: 1,
            title: "My Story",
            description: <>This project emerged from my curiosity to explore new technologies and demonstrate my strong skills in <strong>frontend development</strong>, as well as my ability to learn and apply <strong>backend</strong> concepts when needed. Inspired by facilitating connections between artists and art enthusiasts, I embarked on creating this application as part of my personal portfolio.</>
        },
        {
            id: 2,
            title: "Development Journey",
            description: <>Utilizing advanced technologies such as <strong>Next.js</strong> with <strong>TypeScript</strong>, <strong>Supabase</strong> for database management and authentication, <strong>Stripe</strong> for payment integration, and the <strong>Ant Design</strong> component library, I meticulously designed and developed every aspect of this application. Throughout the process, I tackled technical and creative challenges, employing innovative and efficient solutions.</>
        },
        {
            id: 3,
            title: "Goals and Vision",
            description: <>The primary goal of this project is to demonstrate my ability to develop robust and scalable web applications, leveraging modern tools and libraries like <strong>Ant Design</strong> for creating elegant and functional interfaces. I envision this application as a testament to my skills in implementing intuitive and visually appealing designs to enhance user experience.</>
        },
        {
            id: 4,
            title: "Skills and Experience",
            description: <>With a solid background in leveraging <strong>Ant Design</strong> for creating styled and optimized components, as well as expertise in data management with <strong>Supabase</strong> and responsive design with <strong>Tailwind CSS</strong>, I have applied my skills to craft a platform that excels in usability and modern aesthetics.</>
        },
        {
            id: 5,
            title: "What the Application Offers",
            description: <>This application offers users the opportunity to explore various artistic skills and book personalized sessions with talented instructors, all within an environment designed to facilitate seamless interaction and secure transactions via <strong>Stripe</strong>.</>
        }
    ]

    const renderAboutBlocks = () => {
        return aboutBlocks.map((block) => (
            <div key={block.id} className="flex flex-col gap-3 mb-10 last:mb-0">
                <h2 className="text-2xl">{block.title}</h2>
                <p>{block.description}</p>
            </div>
        ))
    }

    return (
        <div className="flex flex-col gap-10 mx-10 mt-10 mb-32 xl:mx-80">
            <div className="flex flex-col md:mx-24 xl:mx-20">
                <h1 className="text-3xl text-balance">About me</h1>
                <Image src={'https://ofrkgmwhpmpxhpjhnlro.supabase.co/storage/v1/object/public/info_images/frontend-developer.svg'} className="md:self-center" alt="error" width={600} height={300} />
                <p>
                    Hi! 👋 I'm Néstor, a passionate <strong>web developer</strong> with a strong focus on creating interactive and functional experiences. This project is a prime example of my skills and creativity in web application development, using a variety of modern technologies.
                </p>
            </div>
            <main className="md:mx-24 xl:mx-20">
                {renderAboutBlocks()}
            </main>
            <div className="flex flex-col gap-3 md:mx-24 xl:mx-20">
                <h2 className="text-2xl">Contact</h2>
                <p className="text-pretty">For more information about my work or to collaborate on future projects, feel free to reach out to me via{' '}<a className="text-blue-500" href="mailto:nextokoi.dev@gmail">email</a>.</p>
                <p className="text-pretty">
                    I'm excited to share this project with you and hope it serves as a strong testament to my skills and dedication in web development, particularly in creating innovative and functional experiences.
                </p>
            </div>
            <div className="flex flex-col gap-3">
                <h2 className="text-2xl">The Story Behind the Code</h2>
                <p>
                    This project is the result of several months of work. Initially, I thought I could complete it sooner, but technical challenges and pauses in development while working with technologies like <strong>Next.js</strong> and <strong>Supabase</strong>, as well as the need to find alternative approaches for specific functions, extended the process.
                </p>
                <p>
                    Finally, I managed to complete it thanks to perseverance and the support of my friends, family, and especially AKMU, whose music accompanied me during my development sessions, listening to their albums over and over again.
                </p>
                <p>
                    I also want to thank James Clear for his book "Atomic Habits," which provided me with the necessary tools to establish and maintain positive habits that were crucial in this process. Thanks to the combination of good music and good reading, I was able to stay focused and motivated until the end.
                </p>
            </div>
        </div>
    )
}
