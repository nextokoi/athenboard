import Image from "next/image"

const articles = [
    { id: '1', title: 'How to create an account', content: 'To create an account, click on the Sign In button on the top right and fill in your details.' },
    { id: '2', title: 'How to reset your password', content: 'To reset your password, go to Personal Information in your profile and change your password in "New password".' },
    { id: '3', title: 'How to book an experience', content: 'To book an experience, go to the experience you want to join and in the "Available Dates" section at the bottom, click on "Show more dates" and choose a date that suits you. You will automatically be taken through the payment gateway. Upon paying for the experience, the invoice is stored in your profile in the invoices section.' },
    { id: '4', title: 'How to access your invoices', content: 'Invoices for paid experiences are stored in your profile. There you will find all the information about the payment, including the hour, date, location, and more details about the experience.' }
]

export default function Page() {
    return (
        <main className="px-5 py-10 md:p-20 xl:h-screen">
            <div className="xl:grid xl:grid-cols-2 xl:gap-10 xl:h-full">
                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl font-bold mb-5">Help Center</h1>
                    <div className="flex flex-col gap-5">
                        {articles.map((article) => (
                            <div key={article.id} className="flex flex-col gap-3 p-4 border rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold text-balance">{article.title}</h3>
                                <p className="text-body-2 text-pretty">{article.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Image src="https://ofrkgmwhpmpxhpjhnlro.supabase.co/storage/v1/object/public/info_images/help.svg" alt="" width={500} height={500}/>
                </div>
            </div>
        </main>
    )
}
