import { AngleLeft } from "../components/icons"
import { Typography } from "keep-react"
import { CarouselComponent } from "../components/carousel"
import { Divider } from "keep-react"
import { AvatarComponent } from "../components/avatar"

export default function details() {
    return(
        <main> 
            <div className="flex gap-5 py-5 pl-2">
                <AngleLeft /> 
                <Typography variant="body-4"> Home / Experiences / Pottery with Ava</Typography>
            </div>
            <div className="flex justify-center">
                <CarouselComponent />
            </div>
            <div>
                <Typography variant="heading-5">Pottery With Ava</Typography>
                <div className="flex gap-4">
                    <Typography variant="body-4" className="">⭐5(100)</Typography>
                    <Typography variant="body-4" className="">Teror, España</Typography>
                </div>
            </div>
            <Divider />
            <div>
                <div className="flex gap-8">
                    <Typography variant="heading-6">Experience offered by Ava</Typography>
                    <AvatarComponent />
                </div>
                <div className="flex gap-8">
                    <Typography variant="body-2">3 hours</Typography>
                    <Typography variant="body-2">Available in: Spanish and English</Typography>
                </div>
            </div>
            <Divider />
            <div>
                <Typography variant="heading-6">What you will do</Typography>
                <Typography variant="body-2">In my ceramics studio, I invite you to experience clay shaping. I offer hands-on classes where you&apos;ll learn to mold and glaze your...</Typography>
                <Typography variant="body-4">More info</Typography>
            </div>
            <Divider />
            <div>
                <Typography variant="heading-6">What does it include</Typography>
            </div>
        </main>
    )
}