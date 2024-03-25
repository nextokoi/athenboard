/* eslint-disable @next/next/no-img-element */
import { Typography } from "keep-react"
import { Divider } from "keep-react"

import { CarouselComponent } from "../components/ui/carousel"
import { AvatarComponent } from "../components/ui/avatar"
import { IncludesCard } from "../components/cards/includes-card"
import { HorizontalScroll } from "../components/horizontal-scroll"
import { BreadcrumbComponent } from "../components/ui/breadcrumbs"
import { ButtonComponent } from "../components/ui/button"
import { ReviewComponent } from "./reviews"

import { BsPaintBucket } from "react-icons/bs";
import { BsTools } from "react-icons/bs";

export default function details() {
    return(
        <main> 
            <BreadcrumbComponent />
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
                <Typography variant="body-4" className="font-bold">More info</Typography>
            </div>
            <Divider />
            <div>
                <Typography variant="heading-6">What does it include</Typography>
                <div>
                    <HorizontalScroll>
                        <IncludesCard Icon={BsPaintBucket} title="Materials"/>
                        <IncludesCard Icon={BsTools} title="Use of equipment and tools"/>
                    </HorizontalScroll>
                </div>
            </div>
            <Divider />
            <div>
                <Typography variant="heading-6">Accesibility</Typography>
                <Typography variant="body-2">
                    Free entry for individuals assisting participants with functional diversity.
                </Typography>
                <ButtonComponent title="Show all benefits" width="full" bgColor="#3B6939"/>
            </div>
            <Divider />
            <div>
                <div className="flex gap-8 items-center">
                    <Typography variant="heading-6">
                        Meet Ava, your artist
                    </Typography>
                    <AvatarComponent />
                </div>
                <div>
                    <div>
                        <span>⭐</span>
                        <span>100 reviews</span>
                    </div>
                    <div>
                        <span>✅</span>
                        <span>Verified</span>
                    </div>
                    <Typography variant="body-2">
                        Hi, I&apos;m Ava, the creator behind the ceramic workshop. Since my childhood, I found solace and expression in the art of clay. Each piece I mold carries with it my personal journey. In my studio, I share that special connection between clay and creativity, guiding others to discover their own story in each piece. 
                        Welcome to my artistic corner!
                    </Typography>
                    <ButtonComponent title="Contact with the artist" width="full" bgColor="#3B6939"/>
                </div>
            </div>
            <Divider />
            <div>
                <Typography variant="heading-6">Where will you go</Typography>
                <img src='http://unsplash.it/300/150?gravity=center' alt=''/>
                <Typography variant="body-2">
                    My workshop is around here; i&apos;ll see you there.
                </Typography>
            </div>
            <Divider />
            <div>
                <Typography variant="heading-6">⭐5(100 reviews)</Typography>
                <HorizontalScroll>
                    <ReviewComponent />
                    <ReviewComponent />
                </HorizontalScroll>
                <ButtonComponent title="Show more reviews" width="full" bgColor="#3B6939"/>
            </div>
            <Divider />
            <div>
                <Typography variant="heading-6">Choose from the available dates</Typography>
                <ButtonComponent title="Show more dates" width="full" bgColor="#3B6939" />
            </div>
            <Divider />
            <div>
                <Typography variant="heading-6">Cancellation Policy</Typography>
                <Typography variant="body-2">Cancel up to 24 hours before the start time for a full refund</Typography>
            </div>
            <Divider />
            <Typography variant="body-2" className="font-bold">Report this experience</Typography>
        </main>
    )
}